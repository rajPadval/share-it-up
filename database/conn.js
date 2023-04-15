import mongoose from "mongoose"

const MONGO_URI = "mongodb+srv://2021ca38f:2021ca38f@cluster0.mu9e8vn.mongodb.net/shareItUp?retryWrites=true&w=majority"

const connectDb = async() => {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected");
}

export default connectDb