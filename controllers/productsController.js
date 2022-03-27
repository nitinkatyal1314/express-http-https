import Product from '../modals/productsModal.js';

const getProducts = async (req, res) => {
  try {
    Product.find({})
      .populate('category')
      .populate('category.variety')
      .then((d) => {
        res.end(JSON.stringify(d));
      })
      .catch((err) => {
        console.log('Error retrieving products ', err);
      });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export { getProducts };
