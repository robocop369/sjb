const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
  username: { type: String, required: true },
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
  user_fName:  {
     type: String, required: true 
  },
  user_lName: { 
    type: String, required: true 
  },
  user_address: { 
    type: String, required: true 
  }, 
  ward: { 
    type: String, required: true 
  },
  alderman: { 
    type: String, required: true 
  },
  wardofficeaddress: { 
    type: String, required: true 
  },
  todo: [	{	
      todo_id: Schema.Types.ObjectId, 
      todo_content: String, 
      todo_date: Date, 
      todo_status: Schema.Types.Boolean
    }],
  bookmark: [ {
    bookmark_id: Schema.Types.ObjectId,
    bookmark_link: String, 
    bookmark_comment: String,
    bookmarked_date: Date,
    bookmarked_status: Schema.Types.Boolean
  }]
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

const User = mongoose.model("user", UserSchema);

module.exports = User;