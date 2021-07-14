import React, { Component } from "react";
import API from "../utils/API";


// ADD THIS AFTER CONNECTING TO MONGODB ATLAS
// function Review(props) {
// console.log(props)
class Review extends Component {
// function Review(props) {
    // const {id} = props.match.params;
    // let reviewsArr = [];

    state = {
        reviewsArr: [],
        id: this.props.match.params.id
    }



    componentDidMount() {
        console.log( this.state.id)
        API.getReviews(this.state.id)
            .then(res => {
                this.setState({reviewsArr: res.data.reviews});
                // console.log(this.state.reviewsArr);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
    return (
        <div>
            <h1>REVIEWS</h1>
            <p>nkjfkjds df cskfjsdkfhsfhsu wueh kajaslfjdsf dsfhdsjf sdhfeijbdhsf</p>

            {this.state.reviewsArr.map(review => {
                return (
                    <div>
                        <h3>{review.reviewer}</h3>
                        <h3>{review.title}</h3>
                        <p>{review.body}</p>
                    </div>
                );
            })}
        </div>
    );
    }
}

export default Review;