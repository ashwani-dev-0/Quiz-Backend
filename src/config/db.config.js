import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";


const mongoDbUri = process.env.MONGO_URI;

//definition

async function connectDb() {
  //   console.log("hi db connecting");

  try {
    const response = await mongoose.connect(mongoDbUri);
    console.log("db connected..");
    // console.log(response);
  } catch (error) {
    console.log(error);
    console.log("Error in connecting database");
    console.log("MONGO URI:", process.env.MONGO_URI);
  }
}

//function call
connectDb();
