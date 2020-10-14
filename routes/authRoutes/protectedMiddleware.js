const jwt = require("jsonwebtoken");
const Authorized = require("./authorized");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, Authorized.authorized, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Invalid Token" });
      } else {
        res.jwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Please Log in" });
  }
};