import mongoose from "mongoose";

// connecting to database
const connectDB = async () => {
  try {
    const connectionUrl = process.env.DB_URI;

    if (!connectionUrl) {
      throw new Error(
        "MongoDB connection string (DB_URI) is not defined in environment variables"
      );
    }

    await mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.set("strictQuery", false);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    // In production, you might want to handle this error differently
    process.exit(1);
  }
};

export default connectDB;
