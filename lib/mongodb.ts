import mongoose from "mongoose"

interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

const globalWithMongoose = globalThis as typeof globalThis & {
  mongoose?: MongooseCache
}

const cached: MongooseCache = globalWithMongoose.mongoose ?? { conn: null, promise: null }

if (!globalWithMongoose.mongoose) {
  globalWithMongoose.mongoose = cached
}

export async function connectDB() {
  if (cached.conn) return cached.conn

  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable in .env.local")
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri)
  }

  cached.conn = await cached.promise
  return cached.conn
}
