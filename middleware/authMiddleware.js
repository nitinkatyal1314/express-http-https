import jwt from 'jsonwebtoken';
import Buyer from '../modals/buyerModal.js';
import Farmer from '../modals/farmerModal.js';

const protect = async (req, res, next) => {
  let token = req.headers.authorization;
  if (token && token.startsWith('Bearer')) {
    try {
      token = token.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const promises = [
        Buyer.findById(decoded.id).select('-password'),
        Farmer.findById(decoded.id).select('-password'),
      ];
      req.user = await Promise.all(promises);
      console.log(req.user);
      next();
    } catch (err) {
      res.status(401).json({
        error: 'Not Authorized, Token Failed',
      });
      // throw new Error('Not Authorized, Token Failed');
    }
  } else {
    res.status(401).json({
      error: 'Not Authorized, No Token',
    });
    // throw new Error('Not Authorized, No Token');
  }
};
export { protect };
