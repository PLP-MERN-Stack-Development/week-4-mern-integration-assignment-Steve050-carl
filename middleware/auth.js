import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET;

export const protect = (req, res, next)=>{
    const token = req.headers.authorization?.split('') [1];
    if(!token) return res.status(401).json({message: 'Unauthorized'});

    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded.id;

        next();
     }catch{
        res.status(401).json({message:'Invalid token'});

     }
}; 