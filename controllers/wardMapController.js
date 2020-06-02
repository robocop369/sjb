const axios = require("axios");

// Defining methods for the chicagoDataController
module.exports = {
  findAllWards: function (req, res) {
    var map, cachedGeoJson, searchBox;
    var wrappedGeoJson = [];

    $.ajax({
     url: "https://data.cityofchicago.org/resource/k9yb-bpqx.json",
     type: "GET",
     data: {
       "$limit" : 5000,
       "$$app_token" : "8MsoFyxjS53a2z1L0Hjt3XtRz"
       //update to:
       //process.env.CHICAGO_WARD_TOKEN
     }
    }).done(function(data) {              
     cachedGeoJson = data;
     for(i=0;i<cachedGeoJson.length; i++){
         wrappedGeoJson.push(    
             { type: "Feature", 
               properties: {
               ward: cachedGeoJson[i].ward,
               },
               geometry: cachedGeoJson[i].the_geom
               }
         )
        };
   });


};

