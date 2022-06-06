import React, { useEffect, useState } from "react";
import data from "../utils/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Service from "../components/Service";
import Topcarusel from "../components/Topcarusel";
import ScrollToTop from "../components/ScrollToTop";
import TextAnimationForContact from "../components/TextAnimationForContact";
import { initialProjects } from "../utils/initialProjects";
import Category from "../components/Category";
import { Link } from "react-router-dom";

// import Rating from "../components/Rating";
// import ScrollToTop from "../components/ScrollToTop";
// import TextAnimationForContact from "../components/TextAnimationForContact";

export default function HomeScreen() {
  const [mydata, setdata] = useState(initialProjects);

  return (
    <>
      <Topcarusel></Topcarusel>

      <Container fluid className="spaceForOurServeces">
        <Row>
          <Col className="d-flex justify-content-center">
            <strong>
              <h1>Our Services</h1>
            </strong>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="d-flex justify-content-center text-wrap font-weight-bold ">
              In our company quality, professionalism, and reliability comes
              first. Hit the Project Button to see yourself and approve what we
              are doing to help our customers.
            </p>
          </Col>
        </Row>

        <Row>
          {data.services.map((service) => (
            <Col
              key={service._id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-3"
            >
              <Service service={service}></Service>
            </Col>
          ))}
        </Row>
      </Container>

      <section id="background">
        {/*                       we need this class for our work background */}
        <Container fluid className="containerOurWork">
          <Row>
            <Col className="d-flex justify-content-center marginTandB">
              <strong>
                <h1 className="projects1">Some of Our Recent Projects</h1>
              </strong>
            </Col>
          </Row>
          {/* <div className="titleOurAmazinWork">
          <h2 className="titleOurAmazinWork1">Our Amazing Works</h2>
        </div> */}

          <Row>
            {mydata.length === 0 && console.log("No Categories found kaka")}

            {mydata.oldProjects.slice(0, 6).map((category) => (
              <Col
                key={category._id}
                xs={12}
                sm={6}
                md={4}
                lg={4}
                className="mb-3"
              >
                <Category category={category}></Category>
              </Col>
            ))}
          </Row>
          <Row className="d-flex justify-content-center marginTandB">
            <Col xs={12} sm={6} md={4} lg={4}>
              <Link to="/projectscreen" className="item">
                <button class="btn btn-primary" type="submit">
                  See more of our projects
                </button>
              </Link>
              {/* <a href="/projectscreen" className="item ">
                <button class="btn btn-primary" type="submit">
                  See more of our projects
                </button>
              </a> */}
            </Col>
          </Row>
        </Container>

        <Container className="d-flex justify-content-center align-center align-items-center spaceT">
          <Row>
            <Col sm={7} className="agency">
              <h1>Web Development Company</h1>
              <p className="textJustify">
                We are a promising web development company in Erbil, serving
                glossy, modern designed, and functional websites and web-apps
                that create massive impression on your clients when they
                interact with your brand. Our help in creating and designing a
                website or app for your brand guarantee your business and
                increase your customers, in this way your company/brand can last
                forever.
              </p>
              {/* <p className="textJustify">
                Our websites and web-apps don't just look good, they perform,
                they convert. If you are looking to generate enquiries, increase
                sales or maximise awareness we have the in-house web design and
                development teams in place to achieve this.
              </p> */}
            </Col>
            <Col
              sm={5}
              className="d-flex justify-content-center align-center align-items-center"
            >
              {/* <span className="contactsUs">Contact us</span> */}
              <TextAnimationForContact></TextAnimationForContact>
              <span>
                <Link to="/contactscreen">
                  <i className="fa fa-envelope coloredIcon-1"></i>
                </Link>
              </span>
            </Col>
          </Row>
        </Container>
      </section>

      <Container fluid className="colorback">
        <div>
          <h1>Contact Info</h1>
        </div>
        <Row>
          <Col xs={12} md={8}>
            <div>
              <ul>
                <li>
                  <i class="fa fa-location-arrow colorInfo"></i>
                  523C+68M, College of Science, Kerkuk St, Erbil, Iraqi
                  Kurdistan
                </li>

                <li>
                  <i class="fa fa-phone colorInfo"></i>+964 750 4410 1010
                </li>
                <li>
                  <i class="fa fa-envelope colorInfo"></i>glossyCode.com
                </li>
                <li>
                  <i class="fa fa-envelope colorInfo"></i>www.glossycode.com
                </li>
              </ul>
            </div>
          </Col>

          <Col xs={6} md={4}>
            <Row>
              <Col>
                <h1>Follow us on</h1>
              </Col>
            </Row>

            <Row>
              <Col>
                <a href="/contactscreen" className="item ">
                  <i className="fa fa-facebook-f coloredIcon"></i>
                </a>
                Facebook
              </Col>
            </Row>

            <Row>
              <Col>
                <a href="/aboutusscreen" class="item">
                  <i
                    className="fa fa-instagram coloredIcon"
                    aria-hidden="true"
                  ></i>
                </a>
                Instagram
              </Col>
            </Row>

            <Row>
              <Col>
                <a href="/websites/colorful/" className="item">
                  <i className="fa fa-twitter coloredIcon" aria-hidden="true">
                    {" "}
                  </i>
                </a>
                <span>Twitar</span>
              </Col>
            </Row>

            <Row>
              <Col>
                <a href="/websites/colorful/" className="item">
                  <i
                    className="fa fa-linkedin coloredIcon"
                    aria-hidden="true"
                  ></i>
                </a>
                LinkedIn
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <ScrollToTop></ScrollToTop>
    </>
  );
}
