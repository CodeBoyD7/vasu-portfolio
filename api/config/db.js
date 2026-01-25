import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { MONGO_URI: uri, DB_NAME, COLLECTION_NAME } = process.env;

let isConnected; // Variable to track connection state

export const getCollections = async () => {
  try {
    // Check if already connected
    if (!isConnected) {
      await mongoose.connect(uri);
      isConnected = true; // Update the connection state
      console.log("MongoDB Connected");
    }

    const db = mongoose.connection.useDb(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);
    const sampleDocs = await collection.find({}).toArray();

    return { success: true, data: sampleDocs }; // Return success object
  } catch (error) {
    console.error("Error retrieving collections:", error);
    return { success: false, message: error.message }; // Return error object
  }
};
