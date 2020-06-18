const express = require('express');
const fileUpload = require('express-fileupload');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

const AWS_KEY_ID = process.env.AWS_KEY_ID || null;
const AWS_KEY = process.env.AWS_KEY || null;

const fs = require('fs');
const aws = require('aws-sdk');
const s3 = new aws.S3({
  accessKeyId: AWS_KEY_ID,
  secretAccessKey: AWS_KEY
});

function uploadFile(in_fileName) {
  fs.readFile(fileName, (err,data)=>{
    if (err) throw err;
    const param = {
      Bucket: 'ltpena-aws-spike',
      Key: in_fileName,
      Body: JSON.stringify(data,null,2)
    };
    s3.upload(params, function(s3Err,data) {
      if (s3Err) throw s3Err;
      console.log(`File uploaded successfully at ${data.Location}`);
    })
  })
}


router.get('/', (req,res)=>{
  console.log('Key ID:',AWS_KEY_ID);
  res.sendStatus(200);
});

router.post('/upload', async (req,res)=>{
  try {
    console.log('Incoming file:',req.files);
    res.sendStatus(200);
  } catch(error) {
    console.log('Error uploading to S3:',error);
    res.sendStatus(400);
  }
})

module.exports = router;