import express from 'express';
import {
  addPostByFarmer,
  getAllPostsByFarmers,
} from '../controllers/postController.js';

const router = express.Router();

router.route('/').post(addPostByFarmer);
router.route('/').get(getAllPostsByFarmers);

export default router;
