import mongoose from 'mongoose';
import locationSchema from './locationModal.js';

const farmerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      pincode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      fullAddress: {
        type: String,
        required: true,
      },
    },
    location: {
      type: locationSchema,
      required: false,
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
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     next()
//   }

//   const salt = await bcrypt.genSalt(10)
//   this.password = await bcrypt.hash(this.password, salt)
// })

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password)
// }

const Farmer = mongoose.model('Farmer', farmerSchema);

export default Farmer;
