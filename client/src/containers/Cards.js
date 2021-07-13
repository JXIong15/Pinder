// after connection to MongoDB Atlas, put data in an array.
// map through array into card.js
import React, { Component } from "react";
import Card from "./Card";
import API from "../utils/API";

class Cards extends Component {
  state = {
    allProfiles: [],
    profileOptions: [] // PROFILES MEETING CRITERIA
  };

  componentDidMount() {
    API.getAllProfiles()
      .then(res => {
        this.setState({ allProfiles: res.data })
      })
      .catch(err => {
        console.log(err);
      })
  }

  // MAKE FUNCTIONS FOR BUTTONS TO PASS

  render() {
    return (
      <div>
        {this.state.allProfiles.map((profile) => {
          return <Card
            key={profile._id}
            name={profile.first + " " + profile.last}
            age={profile.age}
            gender={profile.gender}
            location={profile.location[0].city + ", " + profile.location[0].state}
            bio={profile.bio}
          />
        })}
      </div>
    );
  }
}

export default Cards;