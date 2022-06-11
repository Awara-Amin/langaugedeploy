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

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
];

export default function HomeScreen() {
  const [mydata, setdata] = useState(initialProjects);
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <>
      <Topcarusel></Topcarusel>

      <Container fluid className="spaceForOurServeces">
        <Row>
          <Col className="d-flex justify-content-center">
            <strong>
              <h1>{t("our-services-now")}</h1>
            </strong>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="d-flex justify-content-center text-wrap font-weight-bold ">
              {t("in-our-company")}
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
                <h1 className="projects1">{t("some-of-our")}</h1>
              </strong>
            </Col>
          </Row>

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
                  {t("see-more-of-our")}
                </button>
              </Link>
            </Col>
          </Row>
        </Container>

        <Container className="d-flex justify-content-center align-center align-items-center spaceT">
          <Row>
            <Col sm={7} className="agency">
              <h1>Web Development Company</h1>
              <p className="textJustify">{t("we-are-a-promising-web")}</p>
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
          <h1>{t("contact-info")}</h1>
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
                <h1>{t("follow-us-on")}</h1>
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
