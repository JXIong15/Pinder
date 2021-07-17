import React, {useRef, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

// import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Login(props) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
console.log("props:", props);

  let email = useRef()
  let password = useRef()
  let history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault();
        let currentUser = {
          email: email.current.value,
          password: password.current.value,
        }
        console.log(currentUser)
        axios.post("/api/userAuth/login", currentUser)
          .then((data) => {
  console.log(data);


          // props.setLogin(data.value)
          history.push("/matches")

        }).catch((err) => {
          console.log(err)
        })
    }

  return (
    <Container className = "container">
      <Card className = "loginCard"> 
        <Card.Header>
          Login
        </Card.Header>
        <Form
          className="loginForm"
          onSubmit={handleSubmit}>
          <Form.Group
            className="loginGroup"
            size="lg"
            controlId="email">
            <Form.Label
              className="formLabel">
              Email
            </Form.Label>
            <Form.Control
              autoFocus
              type="email"
              ref = {email}
            />
          </Form.Group>
            <Form.Group
              className="loginGroup"
              size="lg"
              controlId="password">
            <Form.Label
              className="formLabel">
              Password
            </Form.Label>
            <Form.Control
              type="password"
              ref = {password}
            />
          </Form.Group>
          <Button
            className="loginBtn"
            block type="submit">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
    
}

export default Login;