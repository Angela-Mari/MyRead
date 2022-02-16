const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');
const { BlobServiceClient, ContainerClient, BlobSASPermissions } = require('@azure/storage-blob');

function generatePostFilename(postid) {
  return "post-"+postid;
}

// @route    GET api/image/postimage/:postid
// @desc     Get user by token
// @access   Private
router.get('/:postId', auth, async (req, res) => {
  const url = await getAzureSignedUrl(generatePostFilename(req.params.postId), 360);
  res.send(url).end();
  // console.log(url);
});

// @route    POST api/postimage/:postId
// @desc     Get user by token
// @access   Private
router.post('/:postId', auth, async (req, res) => {
  try {
    const postStorageUrl = config.get('postPics.storageUrl'); //LOCALHOST
    // const postStorageUrl = process.env.POST_PIC_STORAGE_URL; //for HEROKU

    await Post.findOneAndUpdate(
      { _id: req.params.postId },
      {
        $set: {
          picture: postStorageUrl + generatePostFilename(req.params.postId)
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(200).end();
  } catch (err) {
    console.error(err.message);
  }
});

async function getAzureSignedUrl(fileName, minutesToExpiration) {
  const postConnectionString = config.get('postPics.connectionString'); //for LOCALHOST
//   const postConnectionString = process.env.POST_PIC_CONNECTION_STRING; //for HEROKU

  const containerName = 'posts';
  const connectionString = postConnectionString;

  const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blobClient = containerClient.getBlobClient(fileName);
  const url = await blobClient.generateSasUrl(
    { 
      expiresOn: new Date(new Date().valueOf() + minutesToExpiration * 1000), // Required. Date type
      permissions: BlobSASPermissions.parse("racw"),
      cacheControl: "No-Cache" // Required
    }
  );
  return url;
}

module.exports = router;