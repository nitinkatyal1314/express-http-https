import Product from '../productsModal.js';
import products from '../data/products.js';
import connectDB from '../../config/db.js';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

Product.insertMany(products).then((ps) => {
    console.log("Products data populated");
}).catch((err)=> {
    console.log("Could not insert product data : ", err);
});
