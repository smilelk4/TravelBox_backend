const { Router } = require('express');
const bcrypt = require('bcrypt');

const { User, MyCollection, MyWish, ToDo } = require('../../db/models');
const { asyncHandler, hashPassword, handleValidationErrors } = require('../../utils');
const validations = require('../../validators');
const { generateToken, checkIfAuthenticated } = require('../../auth');

const router = Router();

router.post('/auth', asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  try {
    res.locals.user = await User.findOne({ where: { email } });
  } catch (e) {
    next(e);
  }

  const isValidPassword = bcrypt.compareSync(password, res.locals.user.hashedPassword.toString());
  if(isValidPassword) {
    const { token } = generateToken(res.locals.user.id, res.locals.user.username);
    return res.json({
      token,
      user: {
        id: res.locals.user.id,
        firstName: res.locals.user.firstName,
        lastName: res.locals.user.lastName,
        imageUrl: res.locals.user.profileImage,
        username: res.locals.user.username
      }
    });
  }
  const err = new Error('Invalid login information.');
  err.title = "Invalid Login";
  err.status = 401;
  next(err);
}));

router.post('/', 
  validations,
  handleValidationErrors,
  asyncHandler(async (req, res) => {
  const { username, firstName, lastName, email, password, profileImage } = req.body;
  const hashedPassword = await hashPassword(password.trim());

  try {
    res.locals.user = await User.create({
      username: username.trim(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      hashedPassword,
      profileImage: profileImage.trim()
    });
  } catch(e) {
    next(e);
  }

  const { token } = generateToken(res.locals.user.id, res.locals.user.username);
 
  res.status(201).json({
    token,
    user: {
      id: res.locals.user.id,
      firstName: res.locals.user.firstName,
      lastName: res.locals.user.lastName,
      imageUrl: res.locals.user.profileImage,
      username: res.locals.user.username
    }
  });
}));

router.get('/token', checkIfAuthenticated, (req, res) => {
  const { id, username, firstName, lastName, profileImage: imageUrl } = res.locals.user;
  res.json({
    id,
    firstName,
    lastName,
    imageUrl,
    username
  });
});

router.get('/:id/collections', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({
    where: { id },
    include: { model: MyCollection }
  })

  res.json({
    collections: user.MyCollections
  });
}));


router.get('/:id/starred-wishes', asyncHandler(async (req, res) => {
  const id = req.params.id;

  const wishes = await MyWish.findAll({
    where: { userId: id, starred: true }
  });

  res.json({
    wishes
  });
}));

module.exports = router;