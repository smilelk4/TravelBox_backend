const express = require('express');
const { asyncHandler, handleValidationErrors } = require('../../utils');
const { MyWish, Image } = require('../../db/models');
const { checkIfAuthenticated } = require('../../auth');
const wishValidation = require('../../validators/wishValidators');
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
  const wish = await MyWish.findOne({
    where: { id },
    include: {
      model: Image
    }
  });
  
  res.json({
    wish
  });
}));

const fileFilter = file => {
  if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
    const err = new Error('Only JPEG and PNG files are accepted.');
    err.status = 422;
    throw err;
  }
}

router.post('/', 
upload.any(),
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
  const file = req.files[0];

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

  if (file) {
    fileFilter(file);
    const params = {
      Bucket: 'travel-box-images',
      Key: Date.now().toString() + file.originalname,
      Body: file.buffer,
      ACL: 'public-read',
      ContentType: file.mimetype
    }
    const promise = s3.upload(params).promise();
    const uploadedImage = await promise;
    const imageUrl = uploadedImage.Location;

    let wishImage = await Image.create({
      userId,
      wishId: wish.id,
      image: imageUrl
    });

    wishImage.collectionId = wish.collectionId;

    res.status(202).json({
      ...wish.toJSON(),
      ...wishImage.toJSON()
    });
    return;
  }

  res.status(201).json({
    ...wish.toJSON()
  });
}));


router.put('/:id', 
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
  const { id } = req.params;

  const wish = await MyWish.findByPk(id);

  wish.update({
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

  res.status(202).json({
    ...wish.toJSON(),
  });
}));

router.patch('/:id', 
// checkIfAuthenticated, 
asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const wish = await MyWish.findOne({
    where: { id },
      include: {
      model: Image
    }
  });
  
  wish.update({
    starred: !wish.starred
  })

  return res.status(202).json({...wish.toJSON()});
}));

router.delete('/:id', 
checkIfAuthenticated, 
asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const wish = await MyWish.findOne({
    where: { id }
  })

  await wish.destroy();

  res.status(202);
}));

module.exports = router;