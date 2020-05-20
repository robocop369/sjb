const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homepageSchema = new Schema({
  neighborhoodstats: [{stat: Schema.Types.ObjectId, img: String, get: v => `${root}${v}`}],
  orgsinfo:[{ orgpostID: Schema.Types.ObjectId, title: String, blurb: String, img: String, get: v => `${root}${v}`, link: String}],
  housinginfo:[{ houspostID: Schema.Types.ObjectId, title: String, blurb: String, img: String, get: v => `${root}${v}`, link: String}],
  developmnentinfo:[{ devpostID: Schema.Types.ObjectId, title: String, blurb: String, img: String, get: v => `${root}${v}`, link: String}]
});

const Homepage = mongoose.model("Homepage", homepageSchema);

module.exports = Homepage;
