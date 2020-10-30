const express = require('express');
const { asyncHandler } = require('../../utils');
const { MyCollection, MyWish, ToDo } = require('../../db/models');
const { checkIfAuthenticated } = require('../../auth');

const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const collection = await MyCollection.findOne({
    where: { id },
    include: { 
      model: MyWish,
      include: {
        model: ToDo
      }
    }
  });
  
  res.json({
    collection
  });
}));

router.post('/', checkIfAuthenticated, asyncHandler(async (req, res, next) => {
  const { userId, collectionName, description } = req.body;
  const collection = await MyCollection.create({
    userId,
    collectionName,
    description
  });

  res.status(201).json({
    ...collection.toJSON()
  });
}));

module.exports = router;