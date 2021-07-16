import React from "react";
import Nav from "react-bootstrap/Nav";
import {Link} from 'react-router-dom';


function Navbar(){
    return(
<Nav variant="tabs" defaultActiveKey="/home">

<Nav.Item>
    <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>


  <Nav.Item>
    <Nav.Link href="/login">Login</Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link href="/forms">Signup</Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link href="/matches">Matches</Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link href="/VideoChat">Video Chat</Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link href="/ReviewForm">Review Form</Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Contacts
    </Nav.Link>
  </Nav.Item>
</Nav>
    )
}

export default Navbar;