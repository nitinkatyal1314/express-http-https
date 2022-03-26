import Farmer from '../farmerModal.js';
import farmersData from '../data/farmers.js';
import connectDB from '../../config/db.js';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

Farmer.insertMany(farmersData.map((farmer, i) => {
    return {
        "name": farmer.name,
        "email": farmer.email,
        "password": farmer.password,
        "address": farmer.address,
        "location": { type: 'Point', 
            coordinates: [farmer.location.coordinates.latitude, farmer.location.coordinates.longitude] }
    }
})).then((farmers) => {
    console.log("Farmers data populated");
}).catch((err)=> {
    console.log("Could not insert farmer data : ", err);
});
