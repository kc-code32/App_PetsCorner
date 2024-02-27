const express = require('express');
const path = require('path');
const serverRouter = require('./routes/serverRouter');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

// const userController = require('./controllers/userController');
// const cookieController = require('./controllers/cookieController');
// const sessionController = require('./controllers/sessionController');

const PORT = 3000;

const app = express();

// const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/unit11test' : 'mongodb://localhost/unit11dev';
// mongoose.connect(mongoURI); 

const MONGO_URI = 'mongodb+srv://kelvinchen138:QygYDKRCPRddHDIc@cluster0.xfjiboz.mongodb.net/';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'petsCorner'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));


/**
* Automatically parse urlencoded body content and form data from incoming requests and place it
* in req.body
*/
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));


/**
* --- Express Routes ---
* Express will attempt to match these routes in the order they are declared here.
* If a route handler / middleware handles a request and sends a response without
* calling `next()`, then none of the route handlers after that route will run!
* This can be very useful for adding authorization to certain routes...
*/

/**
* root
*/

app.use('/server', serverRouter);
// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, '../client/html/login.html'));
// });

// /**
// * signup
// */
// app.get('/signup', (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, '../client/html/signup.html'));
// });

// app.post('/signup', userController.createUser, sessionController.startSession, cookieController.setSSIDCookie, (req, res, next) => {
//   // what should happen here on successful sign up?
//   return res.redirect('/user');
// });


// /**
// * login
// */
// app.post('/login', userController.verifyUser, sessionController.startSession, cookieController.setSSIDCookie, (req, res) => {
//   // what should happen here on successful log in?
//   return res.redirect('/user');
// });


// /**
// * Authorized routes
// */
// app.get('/user', sessionController.isLoggedIn, (req, res) => {
//   // console.log('accessed secret');
//   return res.status(200).sendFile(path.resolve(__dirname, '../client/html/user.html'));
// });


/**
 * 404 handler
 */
app.use('*', (req,res) => {
  return res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log : 'Express error handler caught unknown middleware error',
    status : 400,
    message : {err: 'An error occurred'}
  }

  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);

  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

module.exports = app;
