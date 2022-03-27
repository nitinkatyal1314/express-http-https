import Buyer from '../modals/buyerModal.js';
import generateToken from '../utils/generateToken.js';

const registerBuyer = async (req, res) => {
  const { name, password, email, mobile, language, address } = req.body;
  try {
    const buyer = await Buyer.create({
      name,
      email,
      password,
      mobile,
      language,
      address,
    });
    res.status(201).json({
      _id: buyer._id,
      name: buyer.name,
      email: buyer.email,
      mobile: buyer.mobile,
      language: buyer.language,
      address: buyer.address,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const getAllBuyers = async (req, res) => {
  Buyer.find({}, (err, buyers) => {
    if (!err) {
      res.end(JSON.stringify(buyers));
    }
  });
};

const loginBuyer = async (req, res) => {
  const { email, password } = req.body;
  const buyer = await Buyer.findOne({
    email: email,
  });
  if (buyer && buyer.password === password) {
    res.status(200).json({
      _id: buyer._id,
      name: buyer.name,
      email: buyer.email,
      address: buyer.address,
      language: buyer.language,
      mobile: buyer.mobile,
      token: generateToken(buyer._id),
    });
  } else {
    res.status(401).json({
      error: 'Invalid Email or Password',
    });
  }
};

export { registerBuyer, loginBuyer, getAllBuyers };
