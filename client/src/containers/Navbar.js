import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Link, useHistory } from 'react-router-dom';
import auth from '../utils/auth';
import decode from 'jwt-decode';
import API from "../utils/API";

const Navbar = () => {
  let history = useHistory();
  const [userID, setUserID] = useState("");
  const [profileID, setProfileID] = useState("");

  const Logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem("token");
      const current_user = decode(token);
      setUserID(current_user.id);
    }

    // API.getUser(userID)
    //   .then(res => {
    //     if (res.data.profile === null) {
    //       history.push(`/profileform/${userID}`);
    //     } else {
    //       setProfileID(res.data.profile);
    //     }
    //   })
    //   .catch(err => {console.log(err)})
  })
    
  


  return (
    <Nav variant="tabs" defaultActiveKey="/">

      <Nav.Item>
        <Nav.Link onClick={() => { history.push("/") }}>Home</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link onClick={() => { history.push("/matchme") }}>Match Me!</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link onClick={() => { history.push("/matches") }}>My Matches</Nav.Link>
      </Nav.Item>


      {/* // AUTH NAV DOESN'T WORK RIGHT AWAY. HAVE TO REFRESH PAGE */}
      {auth ? (
        <Nav.Item>
        <Nav.Link onClick={() => console.log("Go to your profile")}>Profile</Nav.Link>
          {/* <Nav.Link onClick={() => { history.push("/profile/" + profileID) }}>Profile</Nav.Link> */}
        </Nav.Item>
      ) : (
          <Nav.Item>
            <Nav.Link onClick={() => { history.push("/signup") }}>Signup</Nav.Link>
          </Nav.Item>
      )}

      {auth ? (
        <Nav.Item>
          <Nav.Link onClick={Logout}>Logout</Nav.Link>
        </Nav.Item>
      ) : (
        <Nav.Item>
          <Nav.Link onClick={() => { history.push("/login") }}>Login</Nav.Link>
        </Nav.Item>
      )}
    </Nav>
  )
}

export default Navbar;