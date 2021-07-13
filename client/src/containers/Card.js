import React from "react";
import { Link } from 'react-router-dom';

import Review from "./Reviews";

// TO-DO: ADD RATING, AND REVIEWS
function Card(props) {
    return (
        <div className="card">
            <div className="head">
                <h1>{props.name}</h1>
                <h2>Rating: 5</h2>
                <Link to="/reviews" role="link">Review(s)</Link>

            </div>
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
                <button onClick={() => props.likeBtn(props._id)}>Like</button>
                <button onClick={() => props.dislikeBtn(props._id)}>Nah</button>
            </div>
        </div>
    );
}

export default Card;