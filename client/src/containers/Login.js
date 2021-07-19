import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import API from "../utils/API";
import decode from 'jwt-decode';

// import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Login(props) {
  // const [email, setEmail] = useState("");
  const [user, setUser] = useState({});

  let email = useRef()
  let password = useRef()
  // let history = useHistory()

  
  const [loginStatus, setLoginStatus] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let currentUser = {
      email: email.current.value,
      password: password.current.value,
    }
    axios.post("/api/login", currentUser)
      .then((res) => {
        if (!res.data.auth) {
          setLoginStatus(false);
        } else {
          localStorage.setItem("token", res.data.token);
          setLoginStatus(true);
          nextPage();
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const nextPage = () => {
    const token = localStorage.getItem("token");
    const current_user = decode(token);

    API.getUser(current_user.id)
      .then(res => {
        if (res.data.profile === undefined) {
          props.history.push(`/profileform/${current_user.id}`);
        } else {
          props.history.push("/")
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <Container className="container">
      <Card className="loginCard">
        <Card.Header>
          Login
        </Card.Header>
        <Form
          className="loginForm">
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
              ref={email}
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
              ref={password}
            />
          </Form.Group>
          <Button
            className="loginBtn"
            block type="submit"
            onClick={handleSubmit}>
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );

}

export default Login;