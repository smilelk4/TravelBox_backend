const { Router } = require('express');
const usersRouter = require('./users');
const collectionsRouter = require('./myCollections');
const wishesRouter = require('./myWishes');

const router = Router();

router.use('/users', usersRouter);
router.use('/collections', collectionsRouter);
router.use('/wishes', wishesRouter);

// router.get('/', (req, res, next) => {
//   res.send('indexxxx');
// })

module.exports = router;