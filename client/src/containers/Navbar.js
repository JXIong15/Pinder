import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link, useHistory } from 'react-router-dom';
import auth from '../utils/auth';


const Navbar = () => {
  let history = useHistory();

  const Logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
}


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

      <Nav.Item>
        <Nav.Link href="/VideoChat">Video Chat</Nav.Link>
      </Nav.Item>


      {/* // AUTH NAV DOESN'T WORK RIGHT AWAY. HAVE TO REFRESH PAGE */}
      {auth ? (
        <Nav.Item>
          <Nav.Link onClick={ Logout }>Logout</Nav.Link>
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
    </Nav>
  )
}

export default Navbar;