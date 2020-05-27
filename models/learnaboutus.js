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

const LearnAboutUs = mongoose.model("LearnAboutUs", learnaboutusSchema);

module.exports = LearnAboutUs;
