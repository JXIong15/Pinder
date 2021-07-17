import { React, Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import API from "../utils/API";


class ReviewForm extends Component {
  state = {
    review: {
      reviewer: "test", //SET REVIEWER WHEN WE GET LOGIN WORKING; NEED TO CHECK IF REVIEWER HAS ALREADY REVIEWED REVIEWEE. ONLY CAN REVIEW ONCE
      title: "",
      body: "",
      rating: 5,
    },
    id: this.props.match.params.id,
    reviewsArr: []
  }

  componentDidMount() {
    API.getReviews(this.state.id)
      .then(res => {
        this.setState({ reviewsArr: res.data.reviews });
      })
      .catch(err => {
        console.log(err);
      })
  }



  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    if (name === "rating") {
      value = parseInt(value);
    }

    this.setState({
      review: {
        [name]: value
      }
    })
  };


  handleFormSubmit = event => {
    event.preventDefault();
console.log("state",this.state.review)
    API.getReviews(this.state.id)
    .then(res => {
      this.setState({ reviewsArr: res.data.reviews });
      // CREATE AN ARRAY FOR ALL USER IDS AND CHECK TO MAKE SURE LOGGED IN USER HASN'T REVIEWED THIS USER YET
      // ELSE
  console.log(this.state.review)
      this.setState({ reviewsArr: this.state.reviewsArr.concat(this.state.review) });
  console.log(this.state.reviewsArr)
      API.updateReviews(this.state.id, this.state.reviewsArr)
        .then(res2 => { console.log("in",this.state.reviewsArr)}).catch(err => { console.log(err) })
    })
    .catch(err => {
      console.log(err);
    })

    this.setState({
      review: {
        title: "",
        body: ""
      }
    });
  };

  render() {
    return (

      <Container className="formContainer">
        <Card className="formsCard">

          <Form>
            <br></br>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={this.handleInputChange}
                value={this.state.title}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">

              <br></br>

              <Form.Label>Star Rating:</Form.Label>
              {/* <Form.Control as="dropdown"> */}
              <select id="rating" onChange={this.handleInputChange} name="rating">
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
              {/* </Form.Control> */}

              <br></br>

            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Review:</Form.Label>
              <Form.Control
                as="textarea" rows={3}
                name="body"
                onChange={this.handleInputChange}
                value={this.state.body}
              />
            </Form.Group>
            <button onClick={this.handleFormSubmit}>Leave Review</button>
          </Form>
        </Card>
      </Container>

      /* <Button className = "submitBtn" block type="submit" disabled={!validateForm()}>
      Login
      </Button> */

    );
  }
}


export default ReviewForm;

