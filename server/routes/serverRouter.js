const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');
const chatController = require('../controllers/chatController');

// ADD FUNCTIONALITY

router.post(
  '/signup',
  userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  chatController.getChats,
  (req, res) => {
    return res.json({ 
      existName: res.locals.existName,
      missInfo: res.locals.missInfo, 
      loggedIn: res.locals.signedIn, 
      id: res.locals.userId, 
      user: res.locals.userDetail, 
      chats: res.locals.chats
    });
  }
);

router.post(
  '/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  chatController.getChats,
  (req, res) => {
    return res.json({ 
      loggedIn: res.locals.signedIn, 
      id: res.locals.userId, 
      user: res.locals.userDetail, 
      chats: res.locals.chats
    });
  }
);

router.get(
  '/isLoggedIn', 
  sessionController.isLoggedIn, 
  (req, res) => {
    return res.json({ 
      loggedIn: res.locals.signedIn, 
      id: req.cookies.ssid, 
    });
  }
);

router.get(
  '/logout',
  sessionController.clearSession,
  (req, res) => {
    return res.clearCookie('ssid').redirect('/');
  }
);

router.get(
  '/user', 
  userController.getUserDetail, 
  chatController.getChats,
  (req, res) => {
    return res.json({  
      user: res.locals.userDetail, 
      chats: res.locals.chats
    });
  }
);

router.patch(
  '/addApt', 
  userController.addAppointment, 
  (req, res) => {
    return res.json({ 
      appointments: res.locals.appointments 
    });
  }
);

router.patch(
  '/deleteApt', 
  userController.deleteAppointment, 
  (req, res) => {
    return res.json({ 
      appointments: res.locals.appointments 
    });
  }
);

router.patch(
  '/addShot',
  userController.addVaccination, 
  (req, res) => {
    return res.json({ 
      shotRecords: res.locals.shotRecords 
    });
  }
);

router.patch(
  '/deleteShot', 
  userController.deteleVaccination, 
  (req, res) => {
    return res.json({ 
      shotRecords: res.locals.shotRecords 
  });
  }
);

router.patch(
  '/updateShot', 
  userController.deteleVaccination, 
  userController.addVaccination, 
  (req, res) => {
    return res.json({ 
      shotRecords: res.locals.shotRecords 
    });
  }
);

router.post(
  '/chats', 
  chatController.createChat, 
  chatController.getChats, 
  (req, res) => {
    return res.json({ 
      chats: res.locals.chats 
    });
  }
);

module.exports = router;

