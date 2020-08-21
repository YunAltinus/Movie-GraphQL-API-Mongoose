const jwt = require("jsonwebtoken");

const getAccessToken = async (req, res, next) => {
  const token = await req.headers["authorization"];
  if (token && token !== null) {
    try {
      const checkToken = token.split(" ")[1];

      const activeUser = await jwt.verify(checkToken, process.env.JWT_KEY);
      req.activeUser = activeUser;
    } catch (error) {
      console.log(error);
    }
  }
  return next();
};

module.exports = getAccessToken;
