const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const asyncHandler = handler => {
  return (req, res, next) => {
    return handler(req, res, next).catch(next);
  }
};

const hashPassword = async password => {
  return await bcrypt.hash(password, 10);
};

const handleValidationErrors = (req, res, next) => {
  const validatorErrors = validationResult(req);

  if(!validatorErrors.isEmpty()) {
    const errors = validatorErrors.array().map(e => e.msg);
    const err = new Error('Bad Request.');
    err.status = 400;
    err.title = 'Bad Request.';
    err.errors = errors;
    return next(err);
  }
  next();
};

module.exports = {
  asyncHandler,
  hashPassword,
  handleValidationErrors
}