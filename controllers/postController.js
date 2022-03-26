import Post from '../modals/postModal.js';

const addPostByFarmer = async (req, res) => {
  const { farmer, name, category, description, price } = req.body;

  //farmer here means the objectid - _id from mongodb
  const post = new Post({
    farmer,
    name,
    category,
    description,
    price,
  });
  const createdPost = await post.save();
  res.status(201).json(createdPost);
};

export { addPostByFarmer };
