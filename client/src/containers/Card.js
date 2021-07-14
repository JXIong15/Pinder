import React from "react";
import { Link } from 'react-router-dom';
import Reviews from "./Reviews";

// TO-DO: ADD RATING, AND REVIEWS
function Card(props) {
    return (
        <div className="card">
            <div className="head">
                <h1>{props.name}</h1>
                <h2>Rating: 5</h2>

                {/* <Route path="/reviews/:id" component={Reviews} /> */}
                {/* <Link to={{pathname: "reviews/" + props._id, state: {id: props._id}}} >Review(s)</Link> */}
                {/* <Link to={"reviews/" + props._id} role="link" params={ id=props._id }>Review(s)</Link> */}
                <Link to={{ pathname: "reviews/:id", id: props._id }}>Create Idea</Link>




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