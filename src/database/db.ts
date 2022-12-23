import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

export const connectDB = () => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect(
      `mongodb+srv://megas:${process.env.CONNECT_DB}@cluster0.skzgeih.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(`Faild to connect db ${err}`));
};
