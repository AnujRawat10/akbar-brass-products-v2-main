import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { connectDB } from "@/lib/mongodb"
import { User } from "@/lib/models/user"
import { createShopifyCustomer } from "@/lib/shopify"

// GET all users
export async function GET() {
  try {
    await connectDB()

    const users = await User.find({})
      .select("-password")
      .sort({ createdAt: -1 })

    return NextResponse.json({ users })
  } catch (error) {
    console.error("Fetch users error:", error)
    return NextResponse.json(
      { error: "Failed to fetch users." },
      { status: 500 }
    )
  }
}

// POST create user
export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json()

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Name, email, and password are required." },
        { status: 400 }
      )
    }

    await connectDB()

    const existing = await User.findOne({ email: email.toLowerCase().trim() })
    if (existing) {
      return NextResponse.json(
        { error: "A user with this email already exists." },
        { status: 409 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      name: name.trim(),
      isActive: true,
    })

    // Create customer in Shopify (non-blocking — don't fail user creation if this errors)
    const nameParts = name.trim().split(/\s+/)
    createShopifyCustomer({
      first_name: nameParts[0],
      last_name: nameParts.slice(1).join(" ") || "",
      email: email.toLowerCase().trim(),
    }).catch((err) => console.error("Shopify customer creation failed:", err))

    return NextResponse.json({
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
        isActive: user.isActive,
        createdAt: user.createdAt,
      },
    }, { status: 201 })
  } catch (error) {
    console.error("Create user error:", error)
    return NextResponse.json(
      { error: "Failed to create user." },
      { status: 500 }
    )
  }
}
