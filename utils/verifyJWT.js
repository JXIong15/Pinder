require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]
  
    if (!token) {
      res.send("NEED TOKEN!");
    } else {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          res.json({auth: false, message: "FAILED TO AUTH"})
        } else {
          req.userId = decoded.id;
          next();
        }
      })
    }
  }
  module.exports = verifyJWT;