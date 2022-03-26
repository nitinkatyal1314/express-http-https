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

export { registerBuyer };
