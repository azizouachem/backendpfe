const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  password: String,
  roles:['admin','sousAdmin','technicien'],
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;