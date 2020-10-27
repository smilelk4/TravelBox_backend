const { Router } = require('express');
const usersRouter = require('./users');
const collectionsRouter = require('./collections');

const router = Router();

router.use('/users', usersRouter);
router.use('/collections', collectionsRouter);

router.get('/', (req, res, next) => {
  res.send('indexxxx');
})

module.exports = router;