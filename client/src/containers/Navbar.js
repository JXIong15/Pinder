import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


const Navbar = () => {

  let history = useHistory();
  // const { user } = props;
  // const logOut = () => {
  //   console.log("logging out");
  //   axios.get("/logout").then((res) => {
  //     props.setLogin(null);
  //     history.push("/");
  //   });
  // };

  const user = null;

  return (
    <Nav variant="tabs" defaultActiveKey="/">
      {user ? (
        <Nav.Item>
          <Nav.Link onClick={() => { history.push("/logout") }}>Logout</Nav.Link>
        </Nav.Item>
      ) : (
        <div>
          <Nav.Item>
            <Nav.Link onClick={() => { history.push("/login") }}>Login</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link onClick={() => { history.push("/signup") }}>Signup</Nav.Link>
          </Nav.Item>
        </div>
      )}


      <Nav.Item>
        <Nav.Link onClick={() => { history.push("/") }}>Home</Nav.Link>
      </Nav.Item>


      <Nav.Item>
        <Nav.Link onClick={() => { history.push("/matches") }}>Matches</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/VideoChat">Video Chat</Nav.Link>
      </Nav.Item>

      {/* <Nav.Item>

        <Nav.Link eventKey="disabled" disabled>
          Logout
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Contacts
        </Nav.Link>
      </Nav.Item> */}
    </Nav>
  )
}

export default Navbar;