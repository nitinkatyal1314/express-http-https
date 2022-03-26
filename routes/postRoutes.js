import express from 'express';
import {
  addPostByFarmer,
  getAllPostsByFarmers,
} from '../controllers/postController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addPostByFarmer);
router.route('/').get(getAllPostsByFarmers);

export default router;
