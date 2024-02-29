const Chat = require('../models/chatModel');

const chatController = {};

/**
* createChat - add new chat to database
*/
chatController.createChat = (req, res, next) => {
  const { username, timeStamp, message } = req.body;
  Chat.create({ username, timeStamp, message }, (err, chat) => {
    if (err) {
      return next({
        log: 'Error occurred in userController.createUser',
        status: 500,
        message: { err: 'An error occurred in userController.createUser'}
      });
    } else {
      return next();
    }
  });
};

/**
* getChat - get the last 50 chats from database
*/
chatController.getChats = async (req, res, next) => {
  try{
    const doc = await Chat.find().sort({_id:-1}).limit(50);
    res.locals.chats = doc;
    return next();
  } catch(err) {
    return next({
        log: 'Error occurred in chatController.getChat',
        status: 500,
        message: { err: 'An error occurred in chatController.getChat'}
    })
  }
}

module.exports = chatController;