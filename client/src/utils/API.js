import axios from "axios";

export default {
  // Gets all landlord
  getLandlords: function() {
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
  findAll: function() {
    return axios.get("/api/buildingpermits");
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


