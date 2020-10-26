const { Router } = require('express');
const usersRouter = require('./users');

const router = Router();

router.use('/users', usersRouter);

router.get('/', (req, res, next) => {
  res.send('indexxxx');
})

module.exports = router;