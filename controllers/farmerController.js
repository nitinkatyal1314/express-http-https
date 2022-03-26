import Farmer from '../modals/farmerModal.js';
import generateToken from '../utils/generateToken.js';
const getAllFarmers = async (req, res) => {
  Farmer.find({}, (err, farmers) => {
    if (!err) {
      res.end(JSON.stringify(farmers));
    }
  });
};

const loginFarmer = async (req, res) => {
  const { email, password } = req.body;
  const farmer = await Farmer.findOne({
    email: email,
  });
  if (farmer && farmer.password === password) {
    res.status(200).json({
      _id: farmer._id,
      name: farmer.name,
      email: farmer.email,
      token: generateToken(farmer._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid Email or Password');
  }
};

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

export { registerFarmer, getAllFarmers, loginFarmer };
