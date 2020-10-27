const express = require('express');
const { asyncHandler } = require('../../utils');
const { MyWish } = require('../../db/models');

const router = express.Router();

router.post('/', asyncHandler(async (req, res, next) => {
  const { collectionId,
          description,
          country,
          regionCity,
          targetSaving,
          interestLevel,
          targetDate,
          starred,
          accomplished
        } = req.body;

  const wish = await MyWish.create({
    collectionId,
    description,
    country,
    regionCity,
    targetSaving,
    interestLevel,
    targetDate,
    starred,
    accomplished
  });

  res.status(201).json({
    ...wish.toJSON()
  });
}));

module.exports = router;