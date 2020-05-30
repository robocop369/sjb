const db = require("../models");
const axios = require("axios");


// Defining methods for the chicagoDataController
module.exports = {
  findAllBuildingViolations: function (req, res) {
    if (!req.query.q) {
      req.query.q = "22";
    }

    // https://data.cityofchicago.org/resource/22u3-xenr.json  building violations
    
    const url = "https://data.cityofchicago.org/resource/22u3-xenr.json"
    
    var axiosConfig = {
      method: "get",
      url: url,
      params: {
        ward: `${req.query.q}`,
        // permit_type: "PERMIT - EASY PERMIT PROCESS",
        // data: {
        //     "$limit": 500
        //     "$$app_token": `${process.env.BEST_BUY_API_KEY}`
        //   }
      }
    }
    
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', req.query.q);
    axios (axiosConfig)
      .then(results => {
        // console.log("RESULTS: ", results.data);
        console.log("Retrieved " + results.data.length + " records from the dataset!");
        let permitTypes = {};
        // for each result
        results.data.forEach(result => {
          // -- see if perm type is in our permtypes obj
          // PERMIT - EASY PERMIT PROCESS
          let permType = result.permit_type.replace(/ /g, '-');
          if (permitTypes[permType]) {
            // -- if that prop does exist increment that props value
            permitTypes[permType] = permitTypes[permType] + 1;
          } else {
            // -- if that prop doesnt exist, add that property to permtypes obj with a value of 1; 
            permitTypes[permType] = 1;
          }
        });
        let permitObject = []

        for (const permitType in permitTypes) {
          permitObject.push({
            y: permitTypes[permitType],
            label: permitType
          })
        }

        console.log('??????????????????????????', permitTypes, permitObject)
        /*
          {
            permitType1: 4,
            permitType2: 5
          }
        */
        res.json(permitObject);
      })
      .catch(err => console.log(err));
    // return {
    //   count: results.data.length
    // }

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
