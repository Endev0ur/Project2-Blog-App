const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    let token = req.header('Authorization'); 

    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No token provided", success: false });
    }

    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1]; 
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token", success: false });
  }
};

module.exports = authMiddleware;