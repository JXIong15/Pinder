import axios from "axios";

export default {
  getAllUsers: function() {
    return axios.get("/api/user"); 
  },
  createUser: function(user) {
    return axios.post("/api/user", user);
  },
  getUser: function(id) {
    return axios.get("/api/user/" + id)
  },
  updateUser: function(id) {
    return axios.put("/api/user/" + id)
  },
  // Deletes the profile with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id); // SHOULD CASCADE ON DELETE BUT DOESN'T
  },


  // Gets all profiles
  getAllProfiles: function() {
    return axios.get("/api/profile"); 
  },
  // Saves a profile to the database
  createProfile: function(profile) {
    return axios.post("/api/profile", profile);
  },
  getProfile: function(id) {
    return axios.get("/api/profile/" + id)
  },
  updateProfile: function(id) {
    return axios.put("/api/profile/" + id)
  },
  // Deletes the profile with the given id
  deleteProfile: function(id) {
    return axios.delete("/api/profile/" + id); // IF USER CASCADES, CAN DELETE THIS FUNC
  },


  getLikes: function(id) {
    return axios.get("/api/likes/" + id); 
  },
  updateLikes: function(id, likes) {
    return axios.put("/api/likes/" + id, {likes})
  },
  deleteLikes: function(id) {
    return axios.delete("/api/likes/" + id); // IF USER CASCADES, CAN DELETE THIS FUNC
  },


  getReviews: function(id) {
    return axios.get("/api/reviews/" + id); 
  },
  updateReviews: function(id) {
    return axios.put("/api/reviews/" + id)
  },
  deleteReviews: function(id) {
    return axios.delete("/api/reviews/" + id); // IF USER CASCADES, CAN DELETE THIS FUNC
  }
};