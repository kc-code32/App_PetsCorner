const User = require('../models/userModel');
// const userController = require('./controllers/userController');

const cookieController = {};

/**
* setCookie - set a cookie with a pet name, might not be used
*/
cookieController.setCookie = (req, res, next) => {
  // write code here
  const userName = req.body.username;

  User.findOne({username: userName})
    .then(data => {
      const petName = data.name.toString();

      res.cookie('petName', petName, {
        httpOnly: true,
        secure: true
      });

      next();
    })
    .catch(error => next({
      log : 'Error occurred in cookieController.setSSIDCookie',
      status : 400,
      message : {err: error}
    }))
}

/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = (req, res, next) => {
  // write code here
  if (res.locals.signedIn) {
    const userName = req.body.username;

    User.findOne({username: userName})
      .then(data => {
        const userID = data._id.toString();

        res.cookie('ssid', userID, {
          httpOnly: true,
          secure: true
        });

        next();
      })
      .catch(error => next({
        log : 'Error occurred in cookieController.setSSIDCookie',
        status : 400,
        message : {err: error}
      }))
  }
}

module.exports = cookieController;
