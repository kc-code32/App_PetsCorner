const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');
const chatController = require('../controllers/chatController');

// ADD FUNCTIONALITY
// see if username not found or password incorrect or username or password missing when signing up

router.post(
  '/signup',
  userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  chatController.getChats,
  (req, res) => {
    return res.json({ loggedIn: res.locals.signedIn, id: res.locals.userId, user: res.locals.userDetail, chats: res.locals.chats});
  }
);

router.post(
  '/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  chatController.getChats,
  (req, res) => {
    return res.json({ loggedIn: res.locals.signedIn, id: res.locals.userId, user: res.locals.userDetail, chats: res.locals.chats});
  }
);

router.get('/isLoggedIn', sessionController.isLoggedIn, (req, res) => {
  return res.json({ loggedIn: res.locals.signedIn, id: req.cookies.ssid });
});

router.get('/logout', (req, res) => {
  return res.clearCookie('ssid').redirect('/');
});

// router.get('/user', userController.getUserDetail, (req, res) => {
//   return res.json(res.locals.userDetail);
// });

router.patch('/addApt', userController.addAppointment, (req, res) => {
  return res.json({ appointments: res.locals.appointments });
});

router.patch('/deleteApt', userController.deleteAppointment, (req, res) => {
  return res.json({ appointments: res.locals.appointments });
});

router.patch('/addShot', userController.addVaccination, (req, res) => {
  return res.json({ shotRecords: res.locals.shotRecords });
});

router.patch('/deleteShot', userController.deteleVaccination, (req, res) => {
  return res.json({ shotRecords: res.locals.shotRecords });
});

router.patch('/updateShot', userController.deteleVaccination, userController.addVaccination, (req, res) => {
  return res.json({ shotRecords: res.locals.shotRecords });
});

router.post('/chats', chatController.createChat, chatController.getChats, (req, res) => {
  return res.json({ chats: res.locals.chats});
});


module.exports = router;










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
