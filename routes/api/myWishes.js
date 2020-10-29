const express = require('express');
const { asyncHandler } = require('../../utils');
const { MyWish } = require('../../db/models');

const router = express.Router();

router.post('/', asyncHandler(async (req, res, next) => {
  const { 
          collectionId,
          title,
          description,
          country,
          regionCity,
          goalSaving,
          interestLevel,
          goalDate,
          starred,
          accomplished
        } = req.body;

  const wish = await MyWish.create({
    userId,
    collectionId,
    title,
    description,
    country,
    regionCity,
    goalSaving,
    interestLevel,
    goalDate,
    starred,
    accomplished
  });

  res.status(201).json({
    ...wish.toJSON()
  });
}));

module.exports = router;