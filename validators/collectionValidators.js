const { check } = require('express-validator');
const { MyCollection } = require('../db/models');


const collectionNameValidation = [
  check('collectionName')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid collection name.')
    .isLength({ max: 30 })
    .withMessage('Collection name must not be longer than 30 characters.')
];

module.exports = [
  collectionNameValidation 
];