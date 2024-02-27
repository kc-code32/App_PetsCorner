const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
  age: {type: Number, required: true},
  breed: {type: String, required: true},
  gender: {type: String, required: true},
  birthday: {type: String, required: true},
  city: {type: String, required: true},
  friends: [{ username: String }],
  appointments: [{ date: String, location: String, reason: String, time: String }],
  shotRecords: [{ vaccine: String, lastVaccinated: String, dueDate: String}],
  events: [{ event: String, data: String, location: String,}]
});

// use pre hook to run the func before middleware func save/update a user doc
userSchema.pre('save', function(next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    console.log(this);
    this.password = hash;
    return next();
  })
})

module.exports = mongoose.model('User', userSchema);