const { check } = require('express-validator');

const wishNameValidation = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid title.')
    .isLength({ max: 80 })
    .withMessage('Title must not be longer than 80 characters.'),
    check('description')
      .isLength({ max: 300 })
      .withMessage('Description must not be longer than 300 characters.'),
    check('country')
      .isLength({ max: 50 })
      .withMessage('Country name must not be longer than 50 characters.'),
    check('regionCity')
      .isLength({ max: 80 })
      .withMessage('Region/city name must not be longer than 80 characters.'),
];

module.exports = [
  wishNameValidation 
];