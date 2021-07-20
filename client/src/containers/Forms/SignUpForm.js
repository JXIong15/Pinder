import { React, Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import API from "../../utils/API";
import crypto from "crypto";

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    confirm: "",
    profile: ""
  };

  componentDidMount() {
    let profileID = crypto.randomBytes(12).toString('hex');
    this.setState({profile: profileID});
  }

  saveUser = () => {
    API.createUser({
      email: this.state.email,
      password: this.state.password,
      profile: this.state.profile
    })
      .then(res => { 
        console.log(res)
        alert(`You're signed up!`);
        window.location = "/login";
      })
      .catch(err => { 
        if (err.message === "Request failed with status code 500") {
          alert(`User already exists with email. Login instead!`);
          window.location = "/login";
        }
        else {
          // NEED VALIDATORS TO SHOW
        alert(err); // CAN DIRECT TO LOGIN PAGE USING LINK
        console.log(err);
        }
      });
  }


  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // WONT NEED IF I CAN GET VALIDATORS TO SHOW
    // if (name === "password") {
    //   value = value.substring(0, 15);
    // }
    // Updating the input's state

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      alert("Fill out your email and password please!");
    } else if (this.state.password !== this.state.confirm) {
      alert("Passwords to not match");
    } else {
      this.saveUser();
    }

    this.setState({
      email: "",
      password: "",
      confirm: ""
    });
  };


  render() {
    console.log("Profile null", this.state.profile)
    return (
      <Container className="formContainer">
        <Card className="formsCard">

          <Form>
            <br></br>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                onChange={this.handleInputChange}
                value={this.state.email}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">

              <br></br>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  onChange={this.handleInputChange}
                  name="password"
                  value={this.state.password}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1"></Form.Group>

              <br></br>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  onChange={this.handleInputChange}
                  name="confirm"
                  value={this.state.confirm}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1"></Form.Group>

            </Form.Group>
            <button onClick={this.handleFormSubmit}>Sign Me Up!</button>
          </Form>
        </Card>
      </Container>
    );
  }
}


export default SignUpForm;
