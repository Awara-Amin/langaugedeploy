import React, { useEffect } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet-async";
// import Mailer from "../components/Mailer";
import Container from "react-bootstrap/Container";
import ScrollToTop from "../components/ScrollToTop";
import data from "../utils/data";
import ContactBackground from "../images/contact_BackgroundPage.jpeg";
import Mailer from "../components/Mailer";
import TextAnimation from "../components/TextAnimation";

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
export default function ContactScreen() {
  console.log(data);
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  console.log("what is this t mama");
  console.log(t);

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <>
      <Helmet>
        <title>Glossy Code</title>
      </Helmet>
      <Container fluid className="paddingRemove">
        <img
          className=" w-100 first-background-For-Contact"
          src={ContactBackground}
          alt="First slide"
        ></img>

        <Container className="glossyCodeName">
          <Row dir="ltr">
            <Col>
              {/* <h1>Glossy Code</h1> */}
              <TextAnimation></TextAnimation> Code
            </Col>
          </Row>
        </Container>

        <Container className="glossyCodeTexts-Contact">
          <Row>
            <Col className="w 40%">
              <h2>{t("contact-us")}</h2>
            </Col>
          </Row>
        </Container>
      </Container>
      {/*    the message part */}
      <section id="background">
        <Container className="d-flex justify-content-center align-center align-items-center spaceT">
          <Row>
            <Col sm={8}>
              <Mailer></Mailer>
            </Col>
            <Col
              sm={4}
              className="d-flex justify-content-center align-center align-items-center agency "
            >
              <h2 className="text-color1">
                {/* Contact us 24/7, our service department reply you right back */}
                {t("contact-us-24")}
              </h2>
            </Col>
          </Row>
        </Container>
      </section>

      {/*  */}
      <div className="box-second hightkaka">
        <>
          <div>
            <div>
              <h1 className="makeitCenter">
                {t("remember-glossycode")}
                {/* Rememeber Glossy Code can provide the best services in: */}
              </h1>
            </div>
            {/* <div>
              <h7>We are specialist at:</h7>
            </div> */}

            <Container>
              <Row>
                <Col md={4}>Website Design and Development</Col>
                <Col md={{ span: 4, offset: 4 }}>Graphic Web Design</Col>
              </Row>
              <Row>
                <Col md={{ span: 3, offset: 3 }}>
                  E-business Site Development
                </Col>
                <Col md={{ span: 3, offset: 3 }}>IT Solutions</Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  Web-Apps and Responsive Mobile Apps
                </Col>
              </Row>
            </Container>
            {/* <div>
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
            </div> */}
          </div>
        </>
      </div>

      {/*  */}

      <Container fluid className="paddingRemove">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.553046130268!2d44.018601115259735!3d36.15309448008689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400724a92e583837%3A0x791a5405f8679d0c!2sSalahaddin%20University%20-%20College%20of%20Science!5e0!3m2!1sen!2siq!4v1652640413635!5m2!1sen!2siq"
          style={{
            width: "100vw",
            height: "50vh",
            style: "border:0;",
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
          }}
        ></iframe>
      </Container>

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

      {/* </div> */}

      {/* </div> */}
    </>
  );
}
