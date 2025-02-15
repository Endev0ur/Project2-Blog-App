const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    let token = req.header('Authorization'); // ✅ Get token from headers

    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No token provided", success: false });
    }

    // ✅ Handle both "Bearer <TOKEN>" and "<TOKEN>" formats
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1]; // Remove "Bearer " prefix
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // ✅ Attach user data to request
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token", success: false });
  }
};

module.exports = authMiddleware;