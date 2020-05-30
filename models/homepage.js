const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homepageSchema = new Schema({
  ward: String, 
  neighborhoodstats: [{
    stat: Schema.Types.ObjectId, 
    img: String
  }],
  orgsinfo:[{ 
    orgpostID: Schema.Types.ObjectId, 
    title: String, 
    blurb: String,
    img: String,
    link: String
  }],
  housinginfo:[{ 
    houspostID: Schema.Types.ObjectId,
    title: String, 
    blurb: String, 
    img: String,
     link: String
    }],
  developmentinfo:[{ 
    devpostID: Schema.Types.ObjectId, 
    title: String, 
    blurb: String, 
    img: String, 
    link: String
  }]
});

const Homepage = mongoose.model("homepage", homepageSchema);

module.exports = Homepage;
