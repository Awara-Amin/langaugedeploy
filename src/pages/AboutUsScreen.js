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
  console.log("categories at homeScreen");
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
          src={AboutBackground}
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
              <h2>{t("about-us")}</h2>
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
              {t("about-our-company")}
              {/* ABOUT OUR COMPANY IN ERBIL-KURDISTAN-IRAQ */}
              {/* <span className="title-2">KURDISTAN-IRAQ</span> */}
            </h1>
          </Col>

          <Col sm={7}>
            <p className="textJustify">{t("glossy-code-has-been-growing")}</p>
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
                  <h1 className="colorPart2">{t("glossycode-company-can")}</h1>
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
              {t("the-tools-we")}
              {/* The Tools We Use In Creating & Designing Websites And Web apps */}
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
    </>
  );
}
