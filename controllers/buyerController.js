import Buyer from '../modals/buyerModal.js';

const registerBuyer = async (req, res) => {
  const { name, password, email } = req.body;
  const buyer = await Buyer.create({
    name,
    email,
    password,
  });

  res.status(201).json({
    _id: buyer._id,
    name: buyer.name,
    email: buyer.email,
  });
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
      token: generateToken(buyer._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid Email or Password');
  }
};

export { registerBuyer, loginBuyer, getAllBuyers };
