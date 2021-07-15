import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"



function Forms() {

  const [formData, setformData]= useState({
    email: "",
    password:""
  })
  function register(event){

    event.preventDefault()
    console.log("hi")
  }

  

  function update(event){
    console.log(event.target.value)
    console.log(event.target.id)
    setformData({
      ...formData,
      [event.target.id]:event.target.value 
    })
  }
    return(
  <Container className = "formContainer">
  <Card className = "formsCard"> 

  <form onSubmit={register}>
   
  <Form.Group controlId="email">
    <Form.Label>Email:</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" onChange={update} />
    
    
  </Form.Group>
  

  

    <Form.Group controlId="username">
    <Form.Label>Username:</Form.Label>
    <Form.Control type="text" />
  </Form.Group>
  

   <Form.Group controlId="gender">
    <Form.Label>Gender:</Form.Label>
    <Form.Control as="select">
      <option>Male</option>
      <option>Female</option>
      <option>Non Binary</option>
      <option>Transgender</option>
    </Form.Control>
    </Form.Group>

    <Form.Group controlId="interest">
    <Form.Label>Interested In:</Form.Label>
    <Form.Control as="select">
      <option>Male</option>
      <option>Female</option>
      <option>Both</option>
      <option>Transgender</option>
    </Form.Control>
    </Form.Group>

    

 
  <Form.Group controlId="bio">
    <Form.Label>Bio:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

  

  

  

    <Button variant="primary" type="submit">
      Submit
    </Button>
    </form>
    

</Card>




</Container>


    );
}


export default Forms;
