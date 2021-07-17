import React from "react";
import { Link } from 'react-router-dom';

// TO-DO: ADD RATING, AND REVIEWS
function Card(props) {
    // gets ratings to average
    const reviewsArr = props.reviews.reviews;
    let ratings = [];
    reviewsArr.map(review => {
        ratings.push(review.rating);
    })
    const sum = ratings.reduce((a, b) => a + b, 0);
    const avg = (sum / ratings.length) || 0;

    return (
        <div className="card">
            <div className="head">
                <h1>{props.name}</h1>
                <h2>Rating: {avg}</h2>
                <Link to={{ pathname: `/reviews/${props.reviews._id}` }}>Review(s)</Link>
            </div>
            {/* CAN MAKE A SEPARATE FILE FOR DIEGO'S CAROUSEL */}
            {props.pictures.map(pic => {
                return <img alt="picture(s)" src={pic}></img>
            })}
            <div className="demo">
                <p>{props.age}</p>
                <p>{props.gender}</p>
                <p>{props.location}</p>
            </div>
            <p className="bio">
                <span>Bio: </span>
                {props.bio}
            </p>
            <div className="likes">
                <button onClick={() => props.btn1(props.likesID, props._id)}>{props.label1}</button>
                <button onClick={() => props.btn2(props.likesID, props._id)}>{props.label2}</button>
            </div>
        </div>
    );
}

export default Card;