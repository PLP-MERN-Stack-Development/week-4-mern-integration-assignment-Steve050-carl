import mongoose from 'mongoose';
const connectDB =async ()=>{
    try{
        await mongoose.connect(ProcessingInstruction.env.MONGO_URI);
        console.log('MongoDB connected successfully!');
    }catch(error){
        console.error(error);

    Process.exit(1)
  }
};

export default connectDB;
