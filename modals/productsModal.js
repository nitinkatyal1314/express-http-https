import mongoose from 'mongoose';

const varietySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
})

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  variety: [varietySchema]
})

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: [categorySchema]
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
