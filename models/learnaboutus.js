const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const learnaboutusSchema = new Schema({
  firstname: { type: String, required: true },
  picture: { type: String },
  lastname: { type: String, required: true },
  quote: String,
  email: String, 
  linkedin: String, 
  instagram: String, 
  twitter: String, 
  facebook: String
});

//name in quotes is the model that shows up in mlab
const LearnAboutUs = mongoose.model("learnaboutus", learnaboutusSchema);

module.exports = LearnAboutUs;
