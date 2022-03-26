import express from 'express';
import { registerFarmer } from '../controllers/farmerController.js';

const router = express.Router();

router.route('/').post(registerFarmer);

export default router;
