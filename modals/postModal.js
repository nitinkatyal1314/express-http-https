import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
  {
    farmer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Farmer',
    },
    description: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    variety: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    weightUnit: {
      type: String,
      required: true,
    },
    pricePerWeight: {
      type: String,
      required: true,
    },
    cropYear: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    altmobileNumber: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: [
        "published",
        "unpublished",
        "deleted",
        "sold"
      ],
      default: "published"
    },
    address: {
      pincode: {
        type: Number,
        required: true,
      },
      country: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      fullAdress: {
        type: String,
        required: true
      }
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
