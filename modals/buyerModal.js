import mongoose from 'mongoose';
const buyerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    address: {
      pincode: {
        type: Number,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      fullAddress: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Buyer = mongoose.model('Buyer', buyerSchema);

export default Buyer;
