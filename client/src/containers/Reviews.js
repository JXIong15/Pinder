import React, { Component } from "react";
import API from "../utils/API";
import { Link } from 'react-router-dom';

class Review extends Component {
    state = {
        reviewsArr: [],
        id: this.props.match.params.id,
        reviewer: "",
        profile: [],
        avgRating: ""
    }


    componentDidMount() {
        API.getReviews(this.state.id)
            .then(res => {
                this.setState({ reviewsArr: res.data.reviews });
                API.getProfile(res.data.profile)
                    .then(res2 => {
                        this.setState({ profile: res2.data });
                        this.getRating();
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }


    getRating = () => {
        let ratings = [];
        this.state.reviewsArr.map(review => {
            ratings.push(review.rating);
        })
        const sum = ratings.reduce((a, b) => a + b, 0);
        const avg = (sum / ratings.length) || 0;
        this.setState({ avgRating: avg });
    }

    getName = (_id) => {
        API.getProfile(_id)
            .then(res => {
                let reviewer = res.data.first + " " + res.data.last;
                this.setState({ reviewer: reviewer });
                console.log("API", this.state.reviewer)
            })
            .catch(err => {
                console.log(err);
            })
    };



    render() {
        return (
            <div>
                <h1>Reviews for
                    <Link to={{
                        pathname: `/profile/${this.state.profile._id}`
                    }}>
                        {this.state.profile.first} {this.state.profile.last}
                    </Link>
                    <span>{this.state.avgRating}</span>
                </h1>

                {this.state.reviewsArr.map(review => {
                    // keeps running. GET HELP ON THIS
                    // this.getName(review.reviewer);
                    // console.log("after", this.state.reviewer)
                    // console.log(review)
                    return (
                        <div>
                            <h3>
                                {/* <Link to={{
                                    pathname: `/profile/${this.state.reviewer._id}`
                                }}> */}
                                {this.state.reviewer}
                                {/* </Link> */}
                            </h3>
                            <h3>{review.title} <span>Rating: {review.rating}</span></h3>
                            <p>{review.body}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Review;
