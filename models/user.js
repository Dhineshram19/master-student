const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    requied: true,
  },
  password: {
    type: String,
    requied: true,
  },
  usertype:{
    type: String,
    unique: true,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports =  User = mongoose.model("User", UsersSchema)