import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeBackground from "../images/home_BackgroundPage.jpeg";
// import data from "../utils/data";
import TextAnimation from "./TextAnimation";
// console.log("kaka lists here");
// console.log(data);
// console.log(data.homePage[0].backgroundImage);

export default function Topcarusel() {
  return (
    <Container fluid className="paddingRemove">
      <img
        className=" w-100 first-background"
        src={HomeBackground}
        // src="https://as2.ftcdn.net/v2/jpg/03/11/59/79/1000_F_311597945_LuOQuFfk5wGWP4r9eUMpSmBdYES58lsK.jpg"
        alt="First slide"
      ></img>

      <Container className="glossyCodeName">
        <Row>
          <Col>
            <h1>
              {/* <span>Glossy</span> Code */}
              <TextAnimation></TextAnimation> Code
            </h1>
          </Col>
        </Row>
      </Container>

      <Container className="glossyCodeTexts">
        <Row>
          <Col className="w 40%">
            <h2 className="brightness">We Are Flexible Web Developers</h2>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
