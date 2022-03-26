import express from 'express';
import {
  registerFarmer,
  getAllFarmers,
  loginFarmer,
} from '../controllers/farmerController.js';

const router = express.Router();

router.route('/').post(loginFarmer);
router.route('/').get(getAllFarmers);
router.route('/register').post(registerFarmer);

export default router;
