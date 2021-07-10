import React from "react";
import Nav from "react-bootstrap/Nav";
import {Link} from 'react-router-dom';


function Navbar(){
    return(
<Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Link to="/forms">Signup</Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
    )
}

export default Navbar;