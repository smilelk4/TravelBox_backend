const { Router } = require('express');

const { User } = require('../../db/models');
const { asyncHandler, hashPassword, handleValidationErrors } = require('../../utils');
const validations = require('../../validators');

const router = Router();

router.get('/', (req, res, next) => {
  res.send('users');
});

router.post('/', 
  validations,
  handleValidationErrors,
  asyncHandler(async (req, res, next) => {
  const { username, firstName, lastName, email, password, profileImage } = req.body;
  const hashedPassword = await hashPassword(password.trim());

  const user = await User.create({
    username: username.trim(),
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim(),
    hashedPassword,
    profileImage: profileImage.trim()
  });
 
  res.status(201).json({
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      imageUrl: user.imageUrl,
      username: user.username
    }
  });
}));

module.exports = router;