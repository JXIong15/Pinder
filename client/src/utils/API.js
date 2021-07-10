import axios from "axios";

export default {
  // Gets all books
  getProfiles: function() {
    // return axios.get(console.log("Hello"))
    return axios.get("/api/profile");
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/profile/" + id);
  },
  // Saves a book to the database
  likeUser: function(user) {
    return axios.post("/api/profile", user);
  },
//   likedUsers: function () {
//     return axios.get("/api/profile");
//   }
};