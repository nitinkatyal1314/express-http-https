import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
  {
    farmer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Farmer',
    },
    name: {
      type: String,
      required: true,
    },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Farmer',
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    // reviews: [reviewSchema],
    // rating: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    // numReviews: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    // countInStock: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
