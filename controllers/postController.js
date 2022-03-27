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
  try {
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
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllPostsByFarmers = async (req, res) => {
  try {
    const allPosts = await Post.find({}).populate('farmer').select('-password');
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { addPostByFarmer, getAllPostsByFarmers };
