import express from 'express';
import { registerBuyer, loginBuyer } from '../controllers/buyerController.js';

const router = express.Router();

router.route('/').post(loginBuyer);
router.route('/register').post(registerBuyer);

export default router;
