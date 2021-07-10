import {React} from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";




function Forms() {
    return(
        <Container>
        <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">

    <Form.Label>Gender:</Form.Label>
    <Form.Control as="select">
      <option>Male</option>
      <option>Female</option>
      <option>Non Binary</option>
      <option>Transgender</option>
    </Form.Control>

    <Form.Label>Interested In:</Form.Label>
    <Form.Control as="select">
      <option>Male</option>
      <option>Female</option>
      <option>Both</option>
      <option>Transgender</option>
    </Form.Control>

  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
  
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
</Container>


    );
}


export default Forms;
