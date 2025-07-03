import express from 'express';
import bcrypt from 'bycryptjs';
import jwt from 'jsonwebtoken';
import user from '../models/Users.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

//Register
router.post('/register', async(req, res)=>{
    const { username, password } = req.body;
    const hashed = await bcrypt.hash(password,10);
    const user = new User({username, password: hashed});
    await user.save();
    res.status(201).json({message: 'User registered'}); 
});

//Login
router.post('/login', async(req, res)=>{
    const { username, password} = req.body;
    const user = await user.findOne({username});
    if(!user) return res.status(400).json({message: 'Invalid username'});

    const isMatch = await bycrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({message: 'Invalid password or username'});

    const token = jwt.sign({ id: user._id}, JWT_SECRET, {expiresIn: '10 minutes'});
    res.json({token});
});
export default router;