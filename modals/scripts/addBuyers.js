import Buyer from '../buyerModal.js';
import buyersData from '../data/buyers.js';
import connectDB from '../../config/db.js';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

Buyer.insertMany(
  buyersData.map((buyer, i) => {
    return {
      name: buyer.name,
      email: buyer.email,
      password: buyer.password,
      address: buyer.address,
      mobile: buyer.mobile,
      language: buyer.language,
    };
  })
)
  .then((buyers) => {
    console.log('Buyers data populated');
  })
  .catch((err) => {
    console.log('Could not insert Buyer data : ', err);
  });
