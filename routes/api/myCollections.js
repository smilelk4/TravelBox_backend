const express = require('express');
const { asyncHandler, handleValidationErrors } = require('../../utils');
const { MyCollection, MyWish, ToDo } = require('../../db/models');
const { checkIfAuthenticated } = require('../../auth');
const collectionValidation = require('../../validators/collectionValidators');
const multer = require('multer');
const upload = multer();

const router = express.Router();

const AWS = require('aws-sdk');
const { awsKeys } = require('../../config');

AWS.config.update({
  secretAccessKey: awsKeys.secretAccessKey,
  accessKeyId: awsKeys.accessKeyId,
  region: awsKeys.region
});

const s3 = new AWS.S3();

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

const fileFilter = (req, res, next) => {
  const file = req.files[0];
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    next();
  } else {
    const err = new Error('Only JPEG and PNG files are accepted.');
    err.status = 422;
    next(err);
  }
}

router.post('/', 
upload.any(),
checkIfAuthenticated, 
collectionValidation,
handleValidationErrors,
fileFilter,
asyncHandler(async (req, res, next) => {
  const { userId, collectionName, description } = req.body;
  const file = req.files[0];

  const params = {
    Bucket: 'travel-box-images',
    Key: Date.now().toString() + file.originalname,
    Body: file.buffer,
    ACL: 'public-read',
    ContentType: file.mimetype
  }

  const promise = s3.upload(params).promise();
  const uploadedImage = await promise;
  console.log(uploadedImage)
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