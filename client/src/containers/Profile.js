import React, { Component } from "react";
import API from "../utils/API";
import { Link } from 'react-router-dom';

class Profile extends Component {
    state = {
        profile: [],
        id: this.props.match.params.id
    }

    componentDidMount() {
        API.getProfile(this.state.id)
            .then(res => {
                console.log(res.data)
                this.setState({ profile: res.data });

            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
        let location;
        console.log(this.state.profile.reviews)
        if (this.state.profile.location) {
            location = Object.values(this.state.profile.location[0]);
        }
        
        return (
            <div className="card">
                <div className="head">
                    <h1>{this.state.profile.first} {this.state.profile.last}</h1>
                    <h2>Rating: 5</h2>
                    {/* <Link to={{ pathname: `/reviews/${this.state.profile.reviews._id}` }}>Review(s)</Link> */}
                </div>
                {/* CAN MAKE A SEPARATE FILE FOR DIEGO'S CAROUSEL */}
                {/* {this.state.profile.pictures.map(pic => {
                    return <img alt="picture(s)" src={pic}></img>
                })} */}
                <div className="demo">
                    <p>{this.state.profile.age}</p>
                    <p>{this.state.profile.gender}</p>
                    {/* <p>{location.city}, {location.state}</p> */}
                </div>
                <p className="bio">
                    <span>Bio: </span>
                    {this.state.profile.bio}
                </p>
                {/* <div className="likes">
                    <button onClick={() => props.btn1(props._id)}>{props.label1}</button>
                    <button onClick={() => props.btn2(props._id)}>{props.label2}</button>
                </div>  */}
            </div>
        );

    }
}

export default Profile;