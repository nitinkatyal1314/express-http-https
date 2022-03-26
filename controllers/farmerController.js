import Farmer from '../modals/farmerModal.js';


const getAllFarmers  = async(req, res) => {
  Farmer.find({}, (err, farmers) => {
    if (!err){
      res.end(JSON.stringify(farmers));
    }
  });
}

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

export { registerFarmer, getAllFarmers };
