const express = require('express');
const { asyncHandler, handleValidationErrors } = require('../../utils');
const { MyWish } = require('../../db/models');
const { checkIfAuthenticated } = require('../../auth');
const wishValidation = require('../../validators/wishValidators');

const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const wish = await MyWish.findOne({
    where: { id }
  });
  
  res.json({
    wish
  });
}));

router.post('/', 
checkIfAuthenticated,
wishValidation,
handleValidationErrors,
asyncHandler(async (req, res, next) => {
  const { 
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
    goalDate: goalDate || null,
    starred,
    accomplished
  });

  res.status(201).json({
    ...wish.toJSON()
  });
}));

module.exports = router;