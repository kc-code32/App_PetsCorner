const User = require('../models/userModel');

const cookieController = {};

/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = (req, res, next) => {
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
