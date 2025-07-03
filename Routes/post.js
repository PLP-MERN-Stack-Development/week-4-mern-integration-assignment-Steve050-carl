import express from 'express';
import post from ' ../models/Post.js';
import {protect} from '../middleware/auth.js';
const router = express.Router();


//Get all  posts
router.get('/', protect, async(req, res) => {
    const posts = await Post.find().populate('Category');
    res.json(posts);
})

// Get one post
router.get('/id', protect, async(req, res) =>{
    const post = await
    Post.findById(req.params.id).populate('Category');
    res.json(post);
})

//Create post
router.post('/', protect, async(req, res) =>{
    const post =new Post(req.body);
    await post.save();
    res.status(201).json(post);

})

//Update post 
router.post('/id', protect, async(req, res)=> {
    const post = await
    Post.findById(req.params.id, req.body, {
        new: true
    });
})

//Delete post
router.delete('/id', protect, async(req, res) =>{
    await Post.findByIdAndDelete(req.params.id);
    res.json({message: 'Post deleted'});
});

export default router;