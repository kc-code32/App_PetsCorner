const User = require('../models/userModel');
const Session = require('../models/sessionModel.js');
const bcrypt = require('bcryptjs');

const userController = {};

/**
* commented out return errObj to pass status res to frontend
*/

/**
* createUser - create and save a new User into the database.
*/
userController.createUser = (req, res, next) => {
  const { username, password, name, age, breed, gender, birthday, city } = req.body;
  if (!username || !password || !name || !age || !breed || !gender || !birthday || !city) {
    res.locals.signedIn = false;
    res.locals.missInfo = true;
    console.log('Missing info in userController.createUser');
    return next();
    // return next({
    //   log: 'Missing info in userController.createUser',
    //   status: 400,
    //   message: { err: 'An error occurred in userController.createUser'}
    // });
    // return res.redirect('/');
  }

  User.create({ username, password, name, age, breed, gender, birthday, city}, (err, user) => {
    if (err) {
      res.locals.signedIn = false;
      res.locals.existName = true;
      console.log('Error occurred in userController.createUser');
      return next();
      // return next({
      //   log: 'Error occurred in userController.createUser',
      //   status: 500,
      //   message: { err: 'An error occurred in userController.createUser'}
      // });
    } else {
      // log all the below to see what they looks like and pick what to use
      // console.log('user', user);
      // console.log(user.id);
      // console.log(user._id);
      res.locals.userDetail = user;
      res.locals.userId = user.id;
      res.locals.signedIn = true;
      return next();
    }
  });
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = (req, res, next) => {
  // write code here
  const { username, password } = req.body;
  if (!username || !password) {
    res.locals.signedIn = false;
    // return next();
    return next({
      log: 'Missing username or password in userController.verifyUser',
      status: 400,
      message: { err: 'An error occurred in userController.verifyUser'}
    });
  }

  User.findOne({ username }, (err, user) => {
    if (err) {
      res.locals.signedIn = false;
      // return next();
      return next({
        log: 'Error occurred in userController.verifyUser',
        status: 500,
        message: { err: 'An error occurred in userController.verifyUser'}
      });
    } else {
      bcrypt.compare(password, user.password)
        .then((result) => {
          if (!result) {
            res.locals.signedIn = false;
            // return next();
            // return res.redirect('signup');
            return next({
              log: 'Incorrect password',
              status: 500,
              message: { err: 'An error occurred in userController.verifyUser'}
            });
          } else {
            res.locals.signedIn = true;
            res.locals.userDetail = user;
            res.locals.userId = user.id;
            return next();
          }
        })
        .catch((err) => {
          res.locals.signedIn = false;
          // return next();
          return next({
            log: 'Error occurred in userController.verifyUser',
            status: 500,
            message: { err: 'An error occurred in userController.verifyUser'}
          });
        });
    }
  });
};

userController.getUserDetail = (req, res, next) => {
  const user = req.cookies.ssid;
  User.findOne({ _id: user }, (err, user) => {
    if (err) {
      // return next();
      return next({
        log: 'Error occurred in userController.verifyUser',
        status: 500,
        message: { err: 'An error occurred in userController.verifyUser'}
      });
    } else {
      res.locals.userDetail = user;
      return next();
    }
  });
}

userController.addAppointment = async (req, res, next) => {
  try {
    const { username, date, location, reason, time } = req.body;
    const doc = await User.findOneAndUpdate({ username }, 
      { $push: { appointments: { date, location, reason, time }}}, 
      {new: true}
    )
    res.locals.appointments = doc.appointments;
    // console.log(res.locals.appointments);
    return next();
  } catch(err) {
    return next({
      log: 'Error occurred in userController.addAppointment',
      status: 500,
      message: { err: 'An error occurred in userController.addAppointment'}
    })
  }
}

userController.deleteAppointment = async (req, res, next) => {
  try {
    const { username, appointment } = req.body;
    // console.log('apt', appointment);
    // console.log('name', username);
    const doc = await User.findOneAndUpdate({ username }, 
      { $pull: { appointments: appointment }}, 
      {new: true}
    )
    res.locals.appointments = doc.appointments;
    // console.log('after',res.locals.appointments);
    return next();
  } catch(err) {
    return next({
      log: 'Error occurred in userController.addAppointment',
      status: 500,
      message: { err: 'An error occurred in userController.addAppointment'}
    })
  }
}

userController.addVaccination = async (req, res, next) => {
  try {
    const { username, vaccine, lastVaccinated, dueDate } = req.body;
    // if (!lastVaccinated) return next();
    const doc = await User.findOneAndUpdate({ username }, 
      { $push: { shotRecords: { vaccine, lastVaccinated, dueDate }}}, 
      {new: true}
    )
    res.locals.shotRecords = doc.shotRecords;
    // console.log(res.locals.appointments);
    return next();
  } catch(err) {
    return next({
      log: 'Error occurred in userController.addAppointment',
      status: 500,
      message: { err: 'An error occurred in userController.addAppointment'}
    })
  }
}

userController.deteleVaccination = async (req, res, next) => {
  try {
    const { username, vaccine, lastVaccinated, dueDate } = req.body;
    const doc = await User.findOneAndUpdate({ username }, 
      { $pull: { shotRecords: { vaccine } }}, 
      {new: true}
    )
    // tried to update instead of remove and add, didn't work, will lookback at it
    // add it to a new function updateVaccination to try later
    // if (!lastVaccinated || !dueDate) return next();
    // const doc = await User.findOneAndUpdate({ username, vaccine }, 
    //   { $set: { lastVaccinated, dueDate }}, 
    //   {new: true}
    // )
    res.locals.shotRecords = doc.shotRecords;
    // console.log(res.locals.appointments);
    return next();
  } catch(err) {
    return next({
      log: 'Error occurred in userController.addAppointment',
      status: 500,
      message: { err: 'An error occurred in userController.addAppointment'}
    })
  }
}

// !!!!!! test it later !!!!!!
// !!!!!! test it later !!!!!!
// !!!!!! test it later !!!!!!
userController.updateVaccination = async (req, res, next) => {
  try {
    const { username, vaccine, lastVaccinated, dueDate } = req.body;
    // tried to update instead of remove and add, didn't work, will lookback at it
    if (!lastVaccinated || !dueDate) return next();
    const doc = await User.findOneAndUpdate({ username, vaccine }, 
      { $set: { lastVaccinated, dueDate }}, 
      {new: true}
    )
    res.locals.shotRecords = doc.shotRecords;
    // console.log(res.locals.appointments);
    return next();
  } catch(err) {
    return next({
      log: 'Error occurred in userController.updateVaccination',
      status: 500,
      message: { err: 'An error occurred in userController.updateVaccination'}
    })
  }
}

module.exports = userController;
