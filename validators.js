const { check } = require('express-validator');
const { User } = require('./db/models');

const usernameValidation = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid username.')
    .isLength({ min: 5 })
    .withMessage('Username must be longer than 5 characters.')
    .isLength({ max: 30 })
    .withMessage('Username must not be longer than 30 characters.')
    .trim().matches(/^\w+$/)
    .withMessage('Username must only contain alphabets, numbers, and _(underscores).')
    .custom(value => {
      return User.findOne({ where: { username: value } }).then(user => {
        if (user) {
          throw new Error('The provided username is already used by another account.');
        }
        return true;
      });
    })
];

const nameValidation = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid first name.')
    .isLength({ max: 30 })
    .withMessage('First name must be not be longer than 30 characters.')
    .matches(/^[a-zA-Z-\s]+$/)
    .withMessage('First name must only contain alphabets and -(hyphen).'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid last name.')
    .isLength({ max: 30 })
    .withMessage('Last name must be not be longer than 30 characters.')
    .matches(/^[a-zA-Z-\s]+$/)
    .withMessage('Last name must only contain alphabets and -(hyphen).'),
];

const emailValidation = [
  check('email')
    .exists({ checkFalsy: true })
    .trim().isEmail()
    .withMessage('Please enter a valid email.')
    .isLength({ max: 55 })
    .withMessage('Email must not be longer than 55 characters.')
    .custom(value => {
      return User.findOne({ where: { email: value } }).then(user => {
        if(user) {
          throw new Error('The provided email address is already used by another account.');
        }
        return true;
      });
    })
];

const passwordValidation = [
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid password.')
    .isLength({ min: 8 })
    .withMessage('Password must be longer than 8 characters.')
    .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
    .withMessage('Password must have at least one lower-case letter, upper-case letter, number, and special character(!@#$%^&*).')
    .trim().matches(/^[\w_!@#$%^&*]+$/)
    .withMessage('Password can only contain alphabets, numbers, and any of the following characters: _!@#$%^&* .'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value to confirm your password.')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('The password fields must match.');
      }
      return true;
    })
];

module.exports = [
  usernameValidation, 
  nameValidation, 
  emailValidation,
  passwordValidation
];