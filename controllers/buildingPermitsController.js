const db = require("../models");
const axios = require("axios");


// Defining methods for the chicagoDataController
module.exports = {
  findAllBuildingPermits: function (req, res) {
    if (!req.query.q) {
      req.query.q = "1";
    }

    const url = "https://data.cityofchicago.org/resource/ydr8-5enu.json"
    
    var axiosConfig = {
      method: "get",
      url: url,
      // data: {
      //   "$limit" : 10
      // },
      params: {
        ward: `${req.query.q}`,
        }
    }
    
    // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', req.query.q);
    // console.log('axiosConfig', axiosConfig);
axios(axiosConfig)
      .then(results => {
        // console.log("Retrieved " + results.data.length + " records from the dataset!");
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
        let BPObject = []

        for (const permitType in permitTypes) {
          BPObject.push({
            y: permitTypes[permitType],
            label: permitType
          })
        }

        // console.log('BUILDING OBJECT FROM API CALL',  BPObject)

        res.json(BPObject);
      })
      .catch(err => console.log(err));

  },

 };
