import { config } from "dotenv"
import mongoose from "mongoose"
import bcrypt from "bcryptjs"

config({ path: ".env.local" })

const MONGODB_URI = process.env.MONGODB_URI!

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
)

const User = mongoose.models.User || mongoose.model("User", UserSchema)

const SEED_USERS = [
  {
    name: "Demo User",
    email: "demo@akbarbrass.com",
    password: "demo123",
    isActive: true,
  },
]

async function seed() {
  if (!MONGODB_URI) {
    console.error("MONGODB_URI is not set in .env.local")
    process.exit(1)
  }

  console.log("Connecting to MongoDB...")
  await mongoose.connect(MONGODB_URI)
  console.log("Connected.\n")

  for (const userData of SEED_USERS) {
    const existing = await User.findOne({ email: userData.email })

    if (existing) {
      console.log(`  [skip] ${userData.email} — already exists`)
      continue
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10)

    await User.create({
      email: userData.email,
      password: hashedPassword,
      name: userData.name,
      isActive: userData.isActive,
    })

    console.log(`  [created] ${userData.email} (password: ${userData.password})`)
  }

  console.log("\nSeed complete.")
  console.log("\nLogin credentials:")
  console.log("  Admin:  admin@akbarbrass.com / admin123  (set in .env.local)")
  for (const u of SEED_USERS) {
    console.log(`  User:   ${u.email} / ${u.password}`)
  }

  await mongoose.disconnect()
  process.exit(0)
}

seed().catch((err) => {
  console.error("Seed failed:", err)
  process.exit(1)
})
