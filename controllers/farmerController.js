import Farmer from '../modals/farmerModal.js';

const registerFarmer = async (req, res) => {
  const { name, password, email } = req.body;
  const farmer = await Farmer.create({
    name,
    email,
    password,
  });

  res.status(201).json({
    _id: farmer._id,
    name: farmer.name,
    email: farmer.email,
  });
};

export { registerFarmer };
