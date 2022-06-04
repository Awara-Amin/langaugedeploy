import React, { useEffect } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Helmet } from "react-helmet-async";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

// import SpringAnimation from "../components/SpringAnimation.js";
import data from "../utils/data";
import ScrollToTop from "../components/ScrollToTop";
import AboutBackground from "../images/about_backgroundPage.webp";
import TextAnimation from "../components/TextAnimation";

export default function ContactScreen() {
  console.log("categories at homeScreen");

  return (
    <>
      <Helmet>
        <title>Glossy Code</title>
      </Helmet>
      <Container fluid className="paddingRemove">
        <img
          className=" w-100 first-background-For-Contact"
          src={AboutBackground}
          alt="First slide"
        ></img>

        <Container className="glossyCodeName">
          <Row>
            <Col>
              {/* <h1>Glossy Code</h1> */}
              <TextAnimation></TextAnimation> Code
            </Col>
          </Row>
        </Container>

        <Container className="glossyCodeTexts-Contact">
          <Row>
            <Col className="w 40%">
              <h2>About Us</h2>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* <SpringAnimation></SpringAnimation> */}
      <Container className="marginForTop">
        <Row>
          <Col
            sm={5}
            className="d-flex justify-content-center align-center align-items-center w-20"
          >
            <h1 className="toMakeBold">
              ABOUT OUR COMPANY IN ERBIL-
              <span className="title-2">KURDISTAN-IRAQ</span>
            </h1>
          </Col>

          <Col sm={7}>
            <p className="textJustify">
              Glossy Code is one of the leading website designing & website
              Development Company in Erbil. We believe to deliver quality
              services to our client. We provide a media through you can
              interact with latest industry trends. You can assure yourself for
              a world class web solutions and 24x7 support & quality based
              designing. Glossy Code is an Erbil based web designing and web
              development company, this company is a rapidly growing and trusted
              name in today's web design Industry in Kurdistan and whole Iraq.
              Glossy Code is a top Website designing company in Erbil. We
              provide affordable website designing,Best SEO, Mobile
              website(Responsive Website), E-commerce and website development
              solution. Glossy Code is a fast-growing company providing
              full-service web products and project development, including
              website management products,e-business site development; re-design
              development; creative services, graphic web design, project
              management and complete custom development.
            </p>
          </Col>
        </Row>
      </Container>

      {/*    the message part */}
      <section id="background">
        <Container className="d-flex justify-content-center align-center align-items-center spaceT">
          <Row>
            <Col sm={6}></Col>
            <Col
              sm={6}
              className="d-flex justify-content-center align-center align-items-center  "
            >
              <div className="agency-About">
                <div className="about-2">
                  <h1 className="colorPart2">WEBSITE DESIGN AGENCY IN ERBIL</h1>
                </div>
                <div className="about-2">
                  <h7>We are specialist at:</h7>
                </div>
                <div className="about-2">
                  <ul>
                    <li>
                      <i class="fa fa-star colorPart2Stars"></i>Website Design
                      and Development
                    </li>
                    <li>
                      <i class="fa fa-star colorPart2Stars"></i>Website Design
                      and Development
                    </li>
                    <li>
                      <i class="fa fa-star colorPart2Stars"></i>Website Design
                      and Development
                    </li>
                    <li>
                      <i class="fa fa-star colorPart2Stars"></i>Website Design
                      and Development
                    </li>
                    <li>
                      <i class="fa fa-star colorPart2Stars"></i>Website Design
                      and Development
                    </li>
                    <li>
                      <i class="fa fa-star colorPart2Stars"></i>Website Design
                      and Development
                    </li>
                    <li>
                      <i class="fa fa-star colorPart2Stars"></i>Website Design
                      and Development
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*  */}
      <div className="box-second">
        <>
          <div>
            <div>
              <h1 className="colorPart2">WEBSITE DESIGN AGENCY IN ERBIL</h1>
            </div>
            <div>
              <h7>We are specialist at:</h7>
            </div>
            <div>
              <ul>
                <li>
                  <i class="fa fa-star colorPart2Stars"></i>Website Design and
                  Development
                </li>
                <li>
                  <i class="fa fa-star colorPart2Stars"></i>Website Design and
                  Development
                </li>
                <li>
                  <i class="fa fa-star colorPart2Stars"></i>Website Design and
                  Development
                </li>
                <li>
                  <i class="fa fa-star colorPart2Stars"></i>Website Design and
                  Development
                </li>
                <li>
                  <i class="fa fa-star colorPart2Stars"></i>Website Design and
                  Development
                </li>
              </ul>
            </div>
          </div>
        </>
      </div>

      {/*  */}

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
                  No 100, College of Science, Kerkuk St., Erbil, Iraqi Kurdistan
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

      {/* </div> */}
    </>
  );
}
