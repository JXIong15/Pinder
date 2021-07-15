import React, { Component } from "react";
import API from "../utils/API";


class Review extends Component {
    state = {
        reviewsArr: [],
        id: this.props.match.params.id,
        ratingArr: []
    }

    componentDidMount() {
        console.log(this.state.id)
        API.getReviews(this.state.id)
            .then(res => {
                this.setState({reviewsArr: res.data.reviews});
                console.log("review",res)
            })
            .catch(err => {
                console.log(err);
            })
    }


    getName = _id => {
        

    };


    render() {
    return (
        <div>
            <h1>Reviews for NAME</h1>

            {this.state.reviewsArr.map(review => {
                // this.setState({ratingArr: this.state.ratingArr.concat(review.rating)});
                // console.log(this.state.ratingArr);
                // console.log(review.rating)
                let reviewer = this.getName(review.reviewer)


                return (
                    <div>
                        <h3>{reviewer}</h3>
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