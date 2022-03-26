import express from 'express';
import { addPostByFarmer } from '../controllers/postController.js';

const router = express.Router();

router.route('/').post(addPostByFarmer);
// router.route('/').get(getAllPosts);

export default router;
