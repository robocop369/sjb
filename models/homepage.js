const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homepageSchema = new Schema({
   ward: String, 
   type: String, 
    title: String, 
    blurb: String, 
    img: String, 
    link: String
});

const Homepage = mongoose.model("Homepage", homepageSchema);

module.exports = Homepage;
