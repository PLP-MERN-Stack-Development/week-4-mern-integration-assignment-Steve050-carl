import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from '../config/db';
import postRoutes from '/.Routes/post.js';
import categoryRoutes from './Routes/categories.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/posts', postRoutes);
app.use('/api/categories',categoryRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log('Server running on port $(PORT)'));