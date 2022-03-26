import express from 'express';
import {
  registerBuyer,
  loginBuyer,
  getAllBuyers,
} from '../controllers/buyerController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(loginBuyer);
router.route('/').get(protect, getAllBuyers);
router.route('/register').post(registerBuyer);

export default router;
