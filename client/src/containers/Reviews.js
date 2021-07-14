import React from "react";



// ADD THIS AFTER CONNECTING TO MONGODB ATLAS
// function Review(props) {
// console.log(props)
// class Review extends Component {
function Review() {
    // state = {
    //     reviews: []
    // };
    console.log("reviews")
    // // console.log(props);
    // const {id} = props.match.params
    // console.log(id)

    let reviewsArr = [];
    // componentDidMount() {
        // API.getReviews(props._id)
        //     .then(res => {
        //         reviewsArr = res.data;
        //         console.log(reviewsArr);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    // }

    // render() {
    return (
        <div>
            <h1>REVIEWS</h1>
            <p>nkjfkjds df cskfjsdkfhsfhsu wueh kajaslfjdsf dsfhdsjf sdhfeijbdhsf</p>
            <p></p>
        </div>
    );
    // }
}

export default Review;