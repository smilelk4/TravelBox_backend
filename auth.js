const bearerToken = require('express-bearer-token');
const jwt = require('jsonwebtoken');
const uuid = require('uuid').v4;

const { jwtConfig: { secret, expiresIn } } = require('./config');

const generateToken = (user) => {
  const data = {
    name: user.name
  };
  const jwtid = uuid();

  return {
    jti: jwtid,
    token: jwt.sign(
      { data },
      secret,
      { expiresIn: Number.parseInt(expiresIn), jwtid }
    )
  }
}

module.exports = {
  generateToken
}