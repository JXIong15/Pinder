// import React, {useState} from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button"
// import Card from "react-bootstrap/Card"
// import Container from "react-bootstrap/Container"
import React, { Component } from "react";
import API from "../utils/API";
import { Link } from 'react-router-dom';

class Review extends Component {
    state = {
        reviewsArr: [],
        id: this.props.match.params.id,
        ratingArr: [],
        reviewer: "",
        profile: []
    }

    componentDidMount() {
        API.getReviews(this.state.id)
            .then(res => {
                this.setState({ reviewsArr: res.data.reviews });
                API.getProfile(res.data.profile)
                    .then(res2 => {
                        this.setState({ profile: res2.data })
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })

// // ADD THIS AFTER CONNECTING TO MONGODB ATLAS
// // function Review(props) {
// // console.log(props)
// // function Review() {
    
// //     return (
// //         <div>
// //             <h1>REVIEWS</h1>
// //             <p>nkjfkjds df cskfjsdkfhsfhsu wueh kajaslfjdsf dsfhdsjf sdhfeijbdhsf</p>
        
// //         </div>
// //     );
// // }




// function Review(){
//   return(

// <Container className = "formContainer">
//   <Card className = "formsCard"> 

//   <Form>
//     <br></br>
//   <Form.Group controlId="exampleForm.ControlInput1">
//     <Form.Label>Your email:</Form.Label>
//     <Form.Control type="email" placeholder="name@example.com" />
//   </Form.Group>
//   <Form.Group controlId="exampleForm.ControlSelect1">

//     <br></br>

//     <Form.Group controlId="exampleForm.ControlInput1">
//     <Form.Label>Reviewee:</Form.Label>
//     <Form.Control type="email"  />
//   </Form.Group>
//   <Form.Group controlId="exampleForm.ControlSelect1"></Form.Group>

//     <br></br>

//     <Form.Label>Star Rating:</Form.Label>
//     <Form.Control as="select">
//       <option>1 Star</option>
//       <option>2 Stars</option>
//       <option>3 Stars</option>
//       <option>4 Stars</option>
//       <option>5 Stars</option>

//     </Form.Control>

//     <br></br>  

//   </Form.Group>
//   <Form.Group controlId="exampleForm.ControlTextarea1">
//     <Form.Label>Comments:</Form.Label>
//     <Form.Control as="textarea" rows={3} />
//   </Form.Group>
// </Form>
// </Card>
// </Container>


//     );
// }


// export default Review;




// import { BrowserRouter, Route, Switch } from 'react-router-dom';


        // API.getProfile()
    }


    getName = (_id) => {
        API.getProfile(_id)
            .then(res => {
                let reviewer = res.data.first + " " + res.data.last;
                this.setState({ reviewer: reviewer });
                console.log("API", this.state.reviewer)
            })
            .catch(err => {
                console.log(err);
            })
    };


    render() {
        return (
            <div>
                <h1>Reviews for
                    <Link to={{
                        pathname: `/profile/${this.state.profile._id}`
                    }}>
                        {this.state.profile.first} {this.state.profile.last}
                    </Link>
                </h1>

                {this.state.reviewsArr.map(review => {
// keeps running. GET HELP ON THIS
// this.getName(review.reviewer);
    console.log("after", this.state.reviewer)
                    return (
                        <div>
                            <h3>
                                {/* <Link to={{
                                    pathname: `/profile/${this.state.reviewer._id}`
                                }}> */}
                                    {this.state.reviewer}
                                {/* </Link> */}
                            </h3>
                            <h3>{review.title}</h3>
                            <p>{review.body}</p>
                        </div>
                    );
                })}
            </div>
        );
    }


// import React, {useRef, useState} from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button"
// import Card from "react-bootstrap/Card"
// import Container from "react-bootstrap/Container"
// import { useHistory, Link } from "react-router-dom";
// import axios from "axios";



// // ADD THIS AFTER CONNECTING TO MONGODB ATLAS
// // function Review(props) {
// // console.log(props)
// function Review() {
    
//     return (
//         <div>
//             <h1>REVIEWS</h1>
//             <p>nkjfkjds df cskfjsdkfhsfhsu wueh kajaslfjdsf dsfhdsjf sdhfeijbdhsf</p>
        
//         </div>
//     );

}

export default Review;




// // import { BrowserRouter, Route, Switch } from 'react-router-dom';

// function Login(props){

//   let email = useRef()
//   let password = useRef()
//   let history = useHistory()

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         let currentUser = {
//           email: email.current.value,
//           password: password.current.value,
//         }
//         console.log(currentUser)
//         axios
//         .post("/login", currentUser)
//         .then((data) => {
//           props.setLogin(data.data)
//           history.push("/matches")

//         }).catch((err) => {
//           console.log(err)
//         })
//     }

//     return (
//         <Container className = "container">
//         <Card className = "loginCard"> 
//           <Card.Header>Login</Card.Header>
//       <Form className = "loginForm" onSubmit={handleSubmit}>
//         <Form.Group className = "loginGroup" size="lg" controlId="email">
//           <Form.Label className = "formLabel">Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             ref = {email}
//           />
//         </Form.Group>
//         <Form.Group className = "loginGroup" size="lg" controlId="password">
//           <Form.Label className = "formLabel">Password</Form.Label>
//           <Form.Control
//             type="password"
//             ref = {password}
//           />
//         </Form.Group>
//         <Button className = "loginBtn" block type="submit">
//           Login
//         </Button>
//       </Form>
//       </Card>
//       </Container>
//         );
    
// }

// export default Login;
