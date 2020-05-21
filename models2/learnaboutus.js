const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const learnaboutusSchema = new Schema({
  aboutus_id: Schema.Types.ObjectId,
  picture: { type: String, get: v => `${root}${v}` },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  quote: String,
  contactinfo: [{ email: String, linkedin: String, instagram: String, twitter: String, facebook: String}]
});

const LearnAboutUs = mongoose.model("LearnAboutUs", learnaboutusSchema);

module.exports = LearnAboutUs;
