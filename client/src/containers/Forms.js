import {React} from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"



function Forms() {
    return(
  <Container className = "formContainer">
  <Card className = "formsCard"> 

  <Form>
    <br></br>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email:</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">

    <br></br>

    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Username:</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1"></Form.Group>

    <br></br>

    <Form.Label>Gender:</Form.Label>
    <Form.Control as="select">
      <option>Male</option>
      <option>Female</option>
      <option>Non Binary</option>
      <option>Transgender</option>
    </Form.Control>

    <br></br>

    <Form.Label>Interested In:</Form.Label>
    <Form.Control as="select">
      <option>Male</option>
      <option>Female</option>
      <option>Both</option>
      <option>Transgender</option>
    </Form.Control>

    <br></br>  

  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Bio:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
</Card>
</Container>


    );
}


export default Forms;
