import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"

// import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(email, password)
    }

    return (
        <Container className = "container">
        <Card className = "loginCard"> 
          <Card.Header>Login</Card.Header>
      <Form className = "loginForm" onSubmit={handleSubmit}>
        <Form.Group className = "loginGroup" size="lg" controlId="email">
          <Form.Label className = "formLabel">Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className = "loginGroup" size="lg" controlId="password">
          <Form.Label className = "formLabel">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className = "loginBtn" block type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      </Card>
      </Container>
        );
    
}

export default Login;