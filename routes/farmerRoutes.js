import express from 'express';
import {
  registerFarmer,
  getAllFarmers,
  loginFarmer,
} from '../controllers/farmerController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(loginFarmer);
router.route('/').get(protect, getAllFarmers);
router.route('/register').post(registerFarmer);

export default router;
