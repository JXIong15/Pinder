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
        this.setState({ allProfiles: res.data });
        this.sortProfiles();
      })
      .catch(err => {
        console.log(err);
      })
  }

  // sort through the array of all users and chooses users who fit the desired criteria
  sortProfiles = () => {
    this.setState({ profileOptions: 
      this.state.allProfiles.map((profile) => {
        // IF INTENT AND LOCATION ARE THE SAME
        // SEXUATLITY
        return {
            key: profile._id,
            _id: profile._id,
            first: profile.first,
            last: profile.last,
            age: profile.age,
            gender: profile.gender,
            city: profile.location[0].city,
            state: profile.location[0].state,
            bio: profile.bio,
            pictures: profile.pictures
        }
      })
    })
  }

  // MAKE FUNCTIONS FOR BUTTONS TO PASS
  likeBtn = (_id) => {
    console.log("Liked", _id);
  }

  dislikeBtn = (_id) => {
    console.log("Dislike", _id);
  }

  render() {
    return (
      <div>
        {this.state.profileOptions.map((profile) => {
          return <Card
            key={profile._id}
            _id={profile._id}
            name={profile.first + " " + profile.last}
            age={profile.age}
            gender={profile.gender}
            location={profile.city + ", " + profile.state}
            bio={profile.bio}
            pictures={profile.pictures}

            btn1={this.likeBtn}
            btn2={this.dislikeBtn}
            label1="Like"
            label2="Dislike"
          />
        })}
      </div>
    );
  }
}

export default Cards;