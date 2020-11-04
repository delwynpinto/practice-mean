// Middleware that verifies the sent auth token
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) =>{
  try {
    // Extracts the token from the header
    const token = req.headers.authorization.split(" ")[1];

    // Returns the decoded token
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);

    // Adds userData to the request
    req.userData = { email: decodedToken.email, userId: decodedToken.userId };
    next();
  }
  catch(error) {
    res.status(401).json({message: "You are not authenticated"});
  }

};
