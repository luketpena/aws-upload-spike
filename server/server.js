const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const sessionMiddleware = require('./session-middleware');

const awsRouter = require('./aws.router');

/*-----< MIDDLEWARE >-----*/
app.use(bodyParser.json({limit: '50mb', extended: true})); // needed for angular requests
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static('build'));

app.use(sessionMiddleware);
app.use(fileUpload());

/*-----< ROUTES >-----*/
app.use('/api/aws',awsRouter);

/*-----< START SERVER >-----*/
app.listen(PORT,()=>{
  console.log('Listening on port:',PORT);
})