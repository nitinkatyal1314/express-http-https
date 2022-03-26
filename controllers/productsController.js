import Product from '../modals/productsModal.js';

const getProducts  = async(req, res) => {
    Product.find({}).populate("category").populate("category.variety").
    then(d => {
        res.end(JSON.stringify(d));
    }).catch(err => {
        console.log("Error retreiving products ", err);
    })
  }

export { getProducts };
