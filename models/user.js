const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
  //userID: {type: Schema.Types.ObjectId },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
  // ,
  // username: { type: String, required: true },

  // firstname:{ type: String, required: true },
  // lastname: { type: String, required: true },

  // address: { type: String, required: true }, 

  // neighborhood: { type: String, required: true }, 
  // ward: { type: String, required: true },
  // alderman: { type: String, required: true },
  // officeaddress: { type: String, required: true },

  // todo: [	{	todo_id: Schema.Types.ObjectId, 
  //           todocontent: String, 
  //           date: Date, 
  //           status: boolean}],

  // bookmark:[{post_id: Schema.Types.ObjectId,
  //           link: String, 
  //           comment: String, date: Date}]

});

// Execute before each user.save() call
UserSchema.pre("save", function(callback) {
  let user = this;

  // Break out if the password hasn't changed
  if (!user.isModified("password")) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return callback(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return callback(err);
      user.password = hash;
      callback();
    });
  });
});

UserSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
