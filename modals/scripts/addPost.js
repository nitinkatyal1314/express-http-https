import Post from '../postModal.js';
import posts from '../data/posts.js';
import connectDB from '../../config/db.js';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

Post.insertMany(posts).then((ps) => {
    console.log("Post data populated");
}).catch((err)=> {
    console.log("Could not insert post data : ", err);
});
