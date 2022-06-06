import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/Container";
import ScrollToTop from "../components/ScrollToTop";
import AboutBackground from "../images/about_backgroundPage.webp";
import TextAnimation from "../components/TextAnimation";
import ChartReact from "../components/ChartReact";
import ChartBackend from "../components/ChartBackend";

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
              Glossy Code has been growing fast and becoming one of the best
              websites designing & website development company in Erbil. Our
              moto is to deliver high quality services to our client. Glossy
              Code Company provides affordable and fully functional websites and
              mobile website (responsive website), E-commerce and website
              development solution.
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
                  <h1 className="colorPart2">
                    Glossy Code Company can be your partener and do all below to
                    you :
                  </h1>
                </div>

                <div className="about-2">
                  <ul>
                    <li>
                      <i class="fa fa-star colorPart2Stars"></i>Website Design
                      and Development
                    </li>
                    <li>
                      <i class="fa fa-star colorPart2Stars"></i>Graphic Web
                      Design
                    </li>
                    <li>
                      <i class="fa fa-star colorPart2Stars"></i>E-business Site
                      Development
                    </li>
                    <li>
                      <i class="fa fa-star colorPart2Stars"></i>Mobile Website
                      (Responsive Website)
                    </li>
                    <li>
                      <i class="fa fa-star colorPart2Stars"></i>We manage the
                      entire life cycle of a website from design (frondend) to
                      copywriting to search engine optimization to development
                      to ongoing maintenance and support.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*  */}
      <Container className="hightkaka">
        <Row>
          <Col className="hightkaka1">
            <h1 className="toMakeBold">
              The Tools We Use In Creating & Designing Websites And Web apps
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center text-wrap">
            <ChartReact></ChartReact>
            <ChartBackend></ChartBackend>
          </Col>
        </Row>
      </Container>
      {/* <div className="box-second">
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
      </div> */}

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
                  523C+68M, College of Science, Kerkuk St, Erbil, Iraqi
                  Kurdistan{" "}
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
