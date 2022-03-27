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
  console.log(farmer);
  console.log(password);
  if (farmer && farmer.password === password) {
    res.status(200).json({
      _id: farmer._id,
      name: farmer.name,
      email: farmer.email,
      address: farmer.address,
      location: farmer.location,
      language: farmer.language,
      mobile: farmer.mobile,
      token: generateToken(farmer._id),
    });
  } else {
    res.status(401).json({
      error: 'Invalid Email or Password',
    });
  }
};

const registerFarmer = async (req, res) => {
  const { name, password, email, address, location, language, mobile } =
    req.body;
  try {
    const farmer = await Farmer.create({
      name,
      email,
      password,
      address,
      location,
      language,
      mobile,
    });

    res.status(201).json({
      _id: farmer._id,
      name: farmer.name,
      email: farmer.email,
      address: farmer.address,
      location: farmer.location,
      language: farmer.language,
      mobile: farmer.mobile,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export { registerFarmer, getAllFarmers, loginFarmer };
