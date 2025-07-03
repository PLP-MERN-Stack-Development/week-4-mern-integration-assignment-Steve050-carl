import mongoose from 'mongoose';
const postSchema = new mongoose.schema({
    title:{type: String, required: true},
    body:{type: String, required: true},
    category:{type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    createdAt:{type: Date, default: Date.now}
});

const Post = mongoose.model('Post',postSchema);
export default Post;