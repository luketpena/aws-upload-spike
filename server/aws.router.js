const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

const AWS_KEY_ID = process.env.AWS_KEY_ID || null;

router.get('/', (req,res)=>{
  console.log('Key ID:',AWS_KEY_ID);
  res.sendStatus(200);
});

module.exports = router;