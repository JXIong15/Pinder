// after login
// map through array into card.js
import React, { Component } from "react";
import Card from "./Card";
import API from "../utils/API";

class Messages extends Component {
  state = {
    allProfiles: [],
    matches: [],
    profileMatches: []
  };

  componentDidMount() {
    API.getAllProfiles()
      .then(res => {
        this.setState({ allProfiles: res.data });
        // this.sortProfiles();
      })
      .catch(err => {
        console.log(err);
      })
  }

  // sort through the array of all users and chooses users who fit the desired criteria
  sortProfiles = () => {
    // const userID=
    // get user likes first
    // API.getLikes(userID)
    //   .then(res => {
    //     this.setState({matches: res.data})
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })


    // this.setState({ profileMatches: 
    //   this.state.allProfiles.map((profile) => {
    //     console.log(profile);
    //     // SEE IF ANY USER LIKES MATCH WITH PROFILE LIKES
    //     // IF USERS MATCH WITH EACH OTHER
    //     return {
    //         key: profile._id,
    //         _id: profile._id,
    //         first: profile.first,
    //         last: profile.last,
    //         age: profile.age,
    //         gender: profile.gender,
    //         city: profile.location[0].city,
    //         state: profile.location[0].state,
    //         bio: profile.bio,
    //         pictures: profile.pictures
    //     }
    //   })
    // })
  }

  // MAKE FUNCTIONS FOR BUTTONS TO PASS
  messageBtn = (_id) => {
    console.log("Message", _id);
  }

  dislikeBtn = (_id) => {
    console.log("Dislike", _id);
  }

  render() {
    return (
      <div>
        <h1>Messages</h1>

{/* example (MAP THROUGH ARR) */}
      {/* 

      for each element in this.state.profileMatches
        create a link that will direct to the DM with that user
        display matched Profile's name, and message notification if there are any
      
      */}
{/* example end */}

        {/* {this.state.profileOptions.map((profile) => {
          return <Card
            key={profile._id}
            _id={profile._id}
            name={profile.first + " " + profile.last}
            age={profile.age}
            gender={profile.gender}
            location={profile.city + ", " + profile.state}
            bio={profile.bio}
            pictures={profile.pictures}

            btn1={this.messageBtn}
            btn2={this.dislikeBtn}
          />
        })} */}
      </div>
    );
  }
}

export default Messages;