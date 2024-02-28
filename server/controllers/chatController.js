const Chat = require('../models/chatModel');
// const Session = require('../models/sessionModel.js');
// const bcrypt = require('bcryptjs');

const chatController = {};

/**
* createUser - create and save a new User into the database.
*/
chatController.createChat = (req, res, next) => {
  const { username, timeStamp, message } = req.body;
  // if (!username || !password || !name || !age || !breed || !gender || !birthday || !city) {
  //   res.locals.signedIn = false;
  //   return next();
  //   // return next({
  //   //   log: 'Missing info in userController.createUser',
  //   //   status: 400,
  //   //   message: { err: 'An error occurred in userController.createUser'}
  //   // });
  // }
  Chat.create({ username, timeStamp, message }, (err, chat) => {
    if (err) {
      // return next();
      return next({
        log: 'Error occurred in userController.createUser',
        status: 500,
        message: { err: 'An error occurred in userController.createUser'}
      });
    } else {
      // res.locals.newChat = chat;
      return next();
    }
  });
};

chatController.getChats = async (req, res, next) => {
  if (res.locals.signedIn) {
    try{
      const doc = await Chat.find().sort({_id:-1}).limit(50);
      res.locals.chats = doc;
      // console.log(doc);
      return next();
    } catch(err) {
      return next({
          log: 'Error occurred in chatController.getChat',
          status: 500,
          message: { err: 'An error occurred in chatController.getChat'}
      })
    }
  } else return next();
}

module.exports = chatController;