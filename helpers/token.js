const jwt = require('jsonwebtoken');

module.exports = {
  generate({ username, password }) {
    const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;

    let payload = {
      username,
      password
    };

    return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: JWT_EXPIRE });
  }
};
