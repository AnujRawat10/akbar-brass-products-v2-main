import mongoose, { Schema, type Document } from "mongoose"

export interface IUser extends Document {
  email: string
  password: string
  name: string
  isActive: boolean
  lastLogin: Date | null
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    isActive: { type: Boolean, default: true },
    lastLogin: { type: Date, default: null },
  },
  { timestamps: true }
)

export const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema)
