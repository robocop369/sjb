const db = require("../models");
const axios = require("axios");


// Defining methods for the chicagoDataController
module.exports = {
  findAll: function (req, res) {
    if (!req.query.q) {
      req.query.q = "22";
    }
    //https://data.cityofchicago.org/resource/7nii-7srd.json abandond buildings
     // https://data.cityofchicago.org/resource/building-permits.json
    // https://data.cityofchicago.org/resource/22u3-xenr.json  building violations
    
    // https://data.cityofchicago.org/resource/s6ha-ppgi.json affordable housing dev
    // https://data.cityofchicago.org/Community-Economic-Development/Affordable-Rental-Housing-Developments/dkgm-i9fi


    const url = "https://data.cityofchicago.org/resource/building-permits.json"
    const params = {
          ward: `${req.query.q}`,
             // limit: 500,
          // app_token:`${process.env.BEST_BUY_API_KEY}`
          
          // data: {
          //   "$limit": 500,
          //   "$$app_token": `${process.env.BEST_BUY_API_KEY}`
          }
    
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', req.query.q);
    axios
      .get(url, {params})        
      .then(results => {
        console.log("RESULTS: ", results.data);
        // console.log("Retrieved " + data.length + " records from the dataset!");
        res.json([...results.data]);
      })
      .catch(err => console.log(err));


  },
  findByClass: function(req, res) {
    if (req.query.q) {
      req.query.q = "mobile";
    }
    console.log("REQ CONTR: ", req.query.q);
    res.json(true);
    // axios
    //   .get(
    //     `https://api.bestbuy.com/v1/products(departmentId=
    //     ${req.params.id})?format=json&apiKey=${process.env.BEST_BUY_API_KEY}`
    //   )
    //   .then(results => {
    //     console.log("RESULTS!!!: ", results.data);
    //     res.json([...results.data.products]);
    //   })
    //   .catch(err => console.log(err));
  },
  findById: function(req, res) {
    axios
      .get(
        `https://api.bestbuy.com/v1/products(productId=${
          req.params.id
        })?format=json&apiKey=${process.env.BEST_BUY_API_KEY}`
      )
      .then(results => {
        res.json(results.data.products[0]);
      })
      .catch(err => console.log(err));
  },
  create: function(req, res) {
    db.Product.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Product.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Product.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
