import React, { Component } from "react";
import API from "../utils/API";
import { Link } from 'react-router-dom';
import ReviewForm from './Forms/Reviewform';

class Profile extends Component {
    state = {
        profile: [],
        id: this.props.match.params.id,
        avgRating: "",
        reviewID: ""
    }

    componentDidMount() {
        API.getProfile(this.state.id)
            .then(res => { this.setState({ profile: res.data }) })
            .then(res2 => {
                this.getRating();
                this.setState({ reviewID: this.state.profile.reviews._id });
            })
            .catch(err => {
                console.log(err);
            })
    }

    getRating = () => {
        let ratings = [];
        this.state.profile.reviews.reviews.map(review => {
            ratings.push(review.rating);
        })
        const sum = ratings.reduce((a, b) => a + b, 0);
        const avg = (sum / ratings.length) || 0;
        this.setState({ avgRating: avg });
    }

    render() {
        // console.log("pics in prof:", this.state.profile.pictures)


        return (
            <div className="card">
                <div className="head">
                    <h1>{this.state.profile.first} {this.state.profile.last}</h1>
                    <h2>Rating: {this.state.avgRating}</h2>
                    {/* <Link to={{ pathname: `/reviews/${this.state.profile.reviews._id}` }}>Review(s)</Link> */}
                </div>
                {/* CAN MAKE A SEPARATE FILE FOR DIEGO'S CAROUSEL */}
                {/* {this.state.profile.pictures.map(pic => {
                    return <img alt="picture(s)" src={pic}></img>
                })} */}

                <div className="demo">
                    <p>{this.state.profile.age}</p>
                    <p>{this.state.profile.gender}</p>
                    <p>{this.state.profile.city}, {this.state.profile.state}</p>
                </div>
                <p className="bio">
                    <span>Bio: </span>
                    {this.state.profile.bio}
                </p>
                {/* <div className="likes">
                    <button onClick={() => props.btn1(props._id)}>{props.label1}</button>
                    <button onClick={() => props.btn2(props._id)}>{props.label2}</button>
                </div>  */}

                <Link to={`/reviewform/${this.state.reviewID}`}>
                    Leave a Review for {this.state.profile.first} {this.state.profile.last}
                </Link>
            </div>
        );

    }
}

export default Profile;