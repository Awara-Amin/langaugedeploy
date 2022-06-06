import React from "react";
import { useParams } from "react-router-dom";
import data from "../utils/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";
import ListGroup from "react-bootstrap/ListGroup";
import ScrollToTop from "../components/ScrollToTop";
import ServiceBackground from "../images/web_design.jpeg";
import ChartReact from "../components/ChartReact";
import ChartBackend from "../components/ChartBackend";

export default function ServiceScreen(props) {
  const productId = props.match.params.id;
  const params = useParams();
  const { serviceId } = params;
  console.log("bra");
  console.log(productId);
  console.log("bra");

  return (
    <>
      <Container fluid className="paddingRemove">
        <img
          className=" w-100 first-background-For-Contact"
          // src="https://as2.ftcdn.net/v2/jpg/03/11/59/79/1000_F_311597945_LuOQuFfk5wGWP4r9eUMpSmBdYES58lsK.jpg"
          src={ServiceBackground}
          alt="First slide"
        ></img>

        <Container className="glossyCodeName">
          <Row>
            <Col>
              <h1>Glossy Code</h1>
            </Col>
          </Row>
        </Container>

        <Container className="glossyCodeTexts-Contact">
          <Row>
            <Col className="w 40%">
              <h2>Services</h2>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="spaceForOurServeces">
        {data.services
          .filter((service) => service._id === productId)
          .map((item, index) => (
            <Row key={index}>
              {/* {console.log("wwwwwwwwwwwwww")}
              {console.log(item.image)} */}

              <Col
                md={6}
                className="d-flex justify-content-center align-center align-items-center"
              >
                <img
                  className="img-large"
                  // src={"." + item.image}
                  src={item.image}
                  alt={item.name}
                ></img>
              </Col>

              <Col md={6}>
                <ListGroup variant="flush" className="align-items-center">
                  <ListGroup.Item>
                    <Helmet>
                      <title>{item.name}</title>
                    </Helmet>
                    <h1>{item.name}</h1>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <p className="textJustify">{item.description}</p>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {/* <ListGroup.Item>
                    Description:
                    <p>{item.description}</p>
                  </ListGroup.Item> */}
                </ListGroup>
              </Col>
            </Row>
          ))}
      </Container>

      <Container className="d-flex justify-content-center flex-wrap hightkaka">
        <ChartReact></ChartReact>
        <ChartBackend></ChartBackend>
      </Container>

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
    </>
  );
}
