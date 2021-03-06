import axios from "axios";

export default {

  //Authentication 
  login: function (userData) {
    return axios.post("api/users/login", userData);
  },
  signup: function (userData) {
    return axios.post("api/users/signup", userData);
  },
  isAuth: function (_id) {
    return axios.get("api/users/" + _id);
  },
  logout: function () {
    return axios.get("api/users/logout");

  },

 // Gets all cards
getPosts: function() {
  return axios.get("/api/homepages");
},

// Gets all wards
// getAllWards: function() {
//   return axios.get("/api/landlords/");
// },



  // Gets all landlord
  getLandlords: function () {
    return axios.get("/api/landlords");
  },
  // Gets the landlord with the given id
  getLandlord: function(id) {
    return axios.get("/api/landlords/" + id);
  },
  // Deletes the landlord with the given id
  deleteLandlord: function(id) {
    return axios.delete("/api/landlords/" + id);
  },
  // Saves a landlord to the database
  saveLandlord: function(landlordData) {
    return axios.post("/api/landlords", landlordData);
  },

  // Gets all buildingpermit data
  findAllBuildingPermits: function() {
    return axios.get("/api/buildingpermits");
  },

  // Gets all abanbuildings data
  findAllAbanBuildings: function () {
    return axios.get("/api/abanbuildings");
  },

  // Gets all abanbuildings data
  findAllOrdViolations: function () {
    return axios.get("/api/ordviolations");
  },

  
  fetchUsers: function() {
    return axios
      .get("https://api.github.com/orgs/github/public_members")
      .then(res => {
        const users = res.data;
        return users.map(user => {
          return {
            login: user.login,
            image: user.avatar_url,
            profileUrl: user.html_url
          };
        });
      });
  }
};


