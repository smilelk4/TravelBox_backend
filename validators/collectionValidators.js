const { check } = require('express-validator');

const collectionNameValidation = [
  check('collectionName')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid collection name.')
    .isLength({ max: 30 })
    .withMessage('Collection name must not be longer than 30 characters.'),
  check('description')
    .isLength({ max: 300 })
    .withMessage('Description must not be longer than 300 characters.')
];

module.exports = [
  collectionNameValidation 
];