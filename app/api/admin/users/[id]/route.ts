import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { connectDB } from "@/lib/mongodb"
import { User } from "@/lib/models/user"

// PATCH update user (toggle active, change password)
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()

    await connectDB()

    const update: Record<string, unknown> = {}

    if (typeof body.isActive === "boolean") {
      update.isActive = body.isActive
    }

    if (body.password && typeof body.password === "string") {
      if (body.password.length < 6) {
        return NextResponse.json(
          { error: "Password must be at least 6 characters." },
          { status: 400 }
        )
      }
      update.password = await bcrypt.hash(body.password, 10)
    }

    const user = await User.findByIdAndUpdate(
      id,
      update,
      { new: true }
    ).select("-password")

    if (!user) {
      return NextResponse.json(
        { error: "User not found." },
        { status: 404 }
      )
    }

    return NextResponse.json({ user })
  } catch (error) {
    console.error("Update user error:", error)
    return NextResponse.json(
      { error: "Failed to update user." },
      { status: 500 }
    )
  }
}

// DELETE user
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    await connectDB()

    const user = await User.findByIdAndDelete(id)

    if (!user) {
      return NextResponse.json(
        { error: "User not found." },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Delete user error:", error)
    return NextResponse.json(
      { error: "Failed to delete user." },
      { status: 500 }
    )
  }
}
