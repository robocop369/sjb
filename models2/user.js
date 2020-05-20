const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userID: Schema.Types.ObjectId,
  username: { type: String, required: true },
  password:  { type: String, required: true },
  email:  { type: String, required: true },
  firstname:{ type: String, required: true },
  lastname: { type: String, required: true },
  address: { type: String, required: true }, 
  neighborhood: { type: String, required: true }, 
  wardnumber: { type: String, required: true },
  alderman: { type: String, required: true },
  officeaddress: { type: String, required: true },
  todo: [	{	todo_id: Schema.Types.ObjectId, todocontent: String, date: Date, status: boolean}],
  bookmark:[{post_id: Schema.Types.ObjectId,link: String, comment: String, date: Date}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;

