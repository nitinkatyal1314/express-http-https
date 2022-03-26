import express from 'express';
import { registerBuyer } from '../controllers/buyerController.js';

const router = express.Router();

router.route('/').post(registerBuyer);

export default router;
