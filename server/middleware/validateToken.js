const jwt = require("jsonwebtoken");

// Middleware function to validate tokens
const validateToken = (req, res, next) => {
  // Bypass validation for the `/auth` route
  if (req.path.startsWith('/auth')) {
    return next();
  }

  // Get the token from the `Authorization` header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    // TODO: Store this key in environment variables
    const SECRET_KEY = "secret_key";
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Attach decoded user info to the request
    next(); // Pass control to the next middleware or route handler
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};

module.exports = validateToken;
