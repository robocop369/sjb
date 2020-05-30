const db = require("../models");
const axios = require("axios");


// Defining methods for the chicagoDataController
module.exports = {
  findAllOrdViolations: function (req, res) {
    if (!req.query.q) {
      req.query.q = "1";
    }

    // https://data.cityofchicago.org/resource/22u3-xenr.json  building violations
    // https://data.cityofchicago.org/resource/awqx-tuwv.json Ordinance Violations
    
    const url = "https://data.cityofchicago.org/resource/awqx-tuwv.json"
    
    var axiosConfig = {
      method: "get",
      url: url,
      params: {
        ward: `${req.query.q}`,
      }
    }
    
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', req.query.q);
    axios (axiosConfig)
      .then(results => {
     //   console.log("RESULTS: ", results.data);
      //   // console.log("Retrieved " + data.length + " records from the dataset!");
      //   res.json([...results.data]);
      // })
      
        console.log("Retrieved " + results.data.length + " records from the dataset!");
        let caseDispos = {};
        // for each result
        results.data.forEach(result => {
          // -- see if perm type is in our caseDispos obj
          // PERMIT - EASY PERMIT PROCESS
          let caseDispo = result.case_disposition;
          if (caseDispos[caseDispo]) {
            // -- if that prop does exist increment that props value
            caseDispos[caseDispo] = caseDispos[caseDispo] + 1;
          } else {
            // -- if that prop doesnt exist, add that property to caseDispos obj with a value of 1; 
            caseDispos[caseDispo] = 1;
          }
        });
        let caseDispoObject = []

        for (const caseDispo in caseDispos) {
          caseDispoObject.push({
            y: caseDispos[caseDispo],
            label: caseDispo
          })
        }

        console.log('BUILDING OBJECT FROM Ord Violations API CALL',  caseDispoObject)
        // console.log('??????????????????????????', caseDispos, caseDispoObject)
        /*
          {
            permitType1: 4,
            permitType2: 5
          }
        */
        res.json(caseDispoObject);
      })
      .catch(err => console.log(err));
    // return {
    //   count: results.data.length
    // }

  },

};
