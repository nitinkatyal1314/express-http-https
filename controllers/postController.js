import Post from '../modals/postModal.js';

const addPostByFarmer = async (req, res) => {
  const {
    description,
    product,
    category,
    variety,
    weight,
    weightUnit,
    pricePerWeight,
    cropYear,
    mobileNumber,
    altmobileNumber,
    status,
    address,
  } = req.body;

  //farmer here means the objectid - _id from mongodb
  const post = new Post({
    farmer: req.user._id,
    description,
    product,
    category,
    variety,
    weight,
    weightUnit,
    pricePerWeight,
    cropYear,
    mobileNumber,
    altmobileNumber,
    status,
    address,
  });
  const createdPost = await post.save();
  res.status(201).json(createdPost);
};

const getAllPostsByFarmers = async (req, res) => {
  const allPosts = await Post.find({}).populate('farmer').select('-password');
  res.status(200).json(allPosts);
};

export { addPostByFarmer, getAllPostsByFarmers };
