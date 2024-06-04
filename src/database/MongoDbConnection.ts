import mongoose from 'mongoose';

let isConnected = false;

const connectDB = async () =>{


    if(isConnected){
        console.log("Database already connected");
        return   
    }
    try{
        await mongoose.connect(process.env.MONGODB_URL  ?? "")
        console.log("Database connected successfully");
        isConnected = true;

    }
    catch(e){
console.log("error in connectDB",e)

    }

}
export default connectDB