const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const sessionMiddleware = require('./session-middleware');

const awsRouter = require('./aws.router');

/*-----< MIDDLEWARE >-----*/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

app.use(sessionMiddleware);

/*-----< ROUTES >-----*/
app.use('/api/aws',awsRouter);

/*-----< START SERVER >-----*/
app.listen(PORT,()=>{
  console.log('Listening on port:',PORT);
})