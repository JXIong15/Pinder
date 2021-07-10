import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Review from "./Reviews";

// ADD THIS AFTER CONNECTING TO MONGODB ATLAS
// function Card(props) {
// console.log(props)
function Card() {
    return (
        <div className="card">
            <div className="head">
                <h1>Name</h1>
                <h2>Rating: 5</h2>
                <Link to="/reviews" role="link">Review(s)</Link>

            </div>
            <img alt="picture(s)"></img>
            <div className="demo">
                <p>Age</p>
                <p>Gender</p>
                <p>Location</p>
            </div>
            <p className="bio">
                <span>Bio: </span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                {/* dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum", */}
            </p>
            <div className="likes">
                <button>Like</button>
                <button>Nah</button>
            </div>
        </div>
    );
}

export default Card;