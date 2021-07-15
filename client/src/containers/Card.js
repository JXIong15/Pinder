import React from "react";
import { Link } from 'react-router-dom';

// TO-DO: ADD RATING, AND REVIEWS
function Card(props) {
    return (
        <div className="card">
            <div className="head">
                <h1>{props.name}</h1>
                <h2>Rating: 5</h2>
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
                <button onClick={() => props.btn1(props._id)}>{props.label1}</button>
                <button onClick={() => props.btn2(props._id)}>{props.label2}</button>
            </div>
        </div>
    );
}

export default Card;