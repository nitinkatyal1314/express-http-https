import express from 'express';
import {
  registerFarmer,
  getAllFarmers,
} from '../controllers/farmerController.js';

const router = express.Router();

router.route('/').post(registerFarmer);
router.route('/').get(getAllFarmers);

export default router;
