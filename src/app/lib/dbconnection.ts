import mongoose from "mongoose";

const dbConnection = async () => {

  try {
    const mongodbAtlas = process.env.MONGODB_URI || ""; 
    await mongoose.connect(mongodbAtlas);

    console.log('DB Online');

  } catch (error) {
    console.log(error);
    throw new Error("Database error - Talk to the administrator");
  }
};

export default dbConnection;