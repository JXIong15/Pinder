import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import samantha from "../images/samantha.jpg";
import clarisse from "../images/clarisse.jpg";
import Card from "react-bootstrap/Card";
import "./style.css";
// import axios from "axios";

function PinderCards() {
  // useEffect(() => {
  //   if (token) {
  //     fetchData(token);
  //   }
  // }, [token]);
  // const fetchData = async (token) => {
  //   const res = await axios.get("/api/profile", {
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //   });
  //   console.log(res.data);
  // };

  return (
    <div className="pinder">
      <div className="container">
        <Card>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 image"
                src={samantha}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Samantha</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 image"
                src={clarisse}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Clarisse</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 image"
                src={clarisse}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Card>
      </div>
    </div>
  );
}

export default PinderCards;
