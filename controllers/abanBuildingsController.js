const axios = require("axios");

// Defining methods for the chicagoDataController
module.exports = {
  findAllAbanBuildings: function (req, res) {
    if (!req.query.q) {
      req.query.q = "1";
    }

    const url = "https://data.cityofchicago.org/resource/7nii-7srd.json"
    
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
      //   console.log("RESULTS: ", results.data);
      //   // console.log("Retrieved " + data.length + " records from the dataset!");
      //   res.json([...results.data]);
      // })
      
        // console.log("Retrieved " + results.data.length + " records from the dataset!");
        let peopleTypes = {};
        // for each result
        results.data.forEach(result => {
          // -- see if perm type is in our permtypes obj
          // PERMIT - EASY PERMIT PROCESS
          let peopleType = result.any_people_using_property_homeless_childen_gangs_;
          if (peopleTypes[peopleType]) {
            // -- if that prop does exist increment that props value
            peopleTypes[peopleType] = peopleTypes[peopleType] + 1;
          } else {
            // -- if that prop doesnt exist, add that property to permtypes obj with a value of 1; 
            peopleTypes[peopleType] = 1;
          }
        });
        let ABObject = []

        for (const peopleType in peopleTypes) {
          ABObject.push({
            y: peopleTypes[peopleType],
            label: peopleType
          })
        }

        // console.log('BUILDING OBJECT FROM AbanBuilding API CALL',  ABObject)

        res.json(ABObject);
      })
      .catch(err => console.log(err));

  },

};

