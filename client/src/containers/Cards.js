// after connection to MongoDB Atlas, put data in an array.
// map through array into card.js
import React, { Component } from "react";
import Card from "./Card";
import API from "../utils/API";

class Cards extends Component {
  state = {
    allProfiles: [],
    profileOptions: [], // PROFILES MEETING CRITERIA
    likesArr:[],
    dislikeArr: []
  };

  // TO-DO: FIX WHEN NEW PROFILE/USER IS ADDED
  componentDidMount() {
    API.getAllProfiles()
      .then(res => {
        this.setState({ allProfiles: res.data });
        this.sortProfiles();
        // console.log("HE")
      })
      // .then (res2 => {console.log(this.state.profileOptions)})
      .catch(err => {
        console.log(err);
      })
  }

  // sort through the array of all users and chooses users who fit the desired criteria
  sortProfiles = () => {
    this.setState({ profileOptions: this.state.allProfiles
      // this.state.allProfiles.map((profile) => {
      //   console.log(profile.likes._id)
      //   // IF INTENT AND LOCATION ARE THE SAME
      //   // SEXUATLITY
      //   return {
      //       key: profile._id,
      //       _id: profile._id,
      //       first: profile.first,
      //       last: profile.last,
      //       age: profile.age,
      //       gender: profile.gender,
      //       city: profile.city,
      //       state: profile.state,
      //       bio: profile.bio,
      //       pictures: profile.pictures,
      //       reviews: profile.reviews,
      //       likesID: profile.likes._id
      //   }
      // })
    })
    console.log(this.state.profileOptions)
  }

  likeBtn = (likesID, _id) => {
    API.getLikes(likesID)
      .then(res => {
        if(res.data.likes.includes(_id)) {
          alert("User is already liked")
        }
        else {
          this.setState({likesArr: res.data.likes.concat(_id)});
          alert("User liked");
          // updates user's likes
          API.updateLikes(likesID, this.state.likesArr)
            .then(res2 => {}).catch(err => {console.log(err)})
        }
      })
      .catch(err => {
        this.setState({likesArr: [_id]});
        console.log(err);
      })
  }

  dislikeBtn = (likesID, _id) => {
    console.log("Dislike", likesID);
    API.getLikes(likesID)
      .then(res => {
        if(res.data.likes.includes(_id)) {
          alert("User is already liked");
          let arr = [];
          for (let i = 0; i < res.data.likes.length; i++) {
            if(res.data.likes[i] !== _id) {
              arr.push(res.data.likes[i]);
            }
          }
          this.setState({dislikeArr: arr});
          // updates user's likes
          API.updateLikes(likesID, this.state.dislikeArr)
            .then(res2 => {}).catch(err => {console.log(err)})
          alert("Dislike user");
        }
        else {
          // skips user
          // carousel moves
          console.log("User not in likes")
        }
      })
      .catch(err => {
        console.log(err);
      })
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
            reviews={profile.reviews}
            likesID={profile.likesID}

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