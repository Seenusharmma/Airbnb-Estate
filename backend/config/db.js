import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://roshansharma404error:YZxYf55Io4jBpgXk@cluster0.t6gnssl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("DB connected")
    } catch (error) {
        console.log("db error")
    }
}
export default connectDb
