const express = require('express');
const { asyncHandler } = require('../../utils');
const { MyCollection } = require('../../db/models');

const router = express.Router();

router.post('/', asyncHandler(async (req, res, next) => {
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