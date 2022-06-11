import React, { useState, useEffect } from "react";
import spinner from "../images/spinner.gif";
import SingleCard from "../components/SingleCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/Container";
import ScrollToTop from "../components/ScrollToTop";

// import OtherSkills from "../components/OtherSkills";
import { initialProjects } from "../utils/initialProjects";
// import data from "../utils/data";
import OtherSkills from "../components/OtherSkills";
import ProjectBackground from "../images/project_backgroundPage.jpeg";
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

export default function ProjectScreen() {
  const [mydata, setdata] = useState(initialProjects);
  const [loading, setLoading] = useState(false);

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
          className=" w-100 first-background-For-Project"
          src={ProjectBackground}
          // src="https://as2.ftcdn.net/v2/jpg/03/11/59/79/1000_F_311597945_LuOQuFfk5wGWP4r9eUMpSmBdYES58lsK.jpg"
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
              <h2>{t("our-projects")}</h2>
            </Col>
          </Row>
        </Container>
      </Container>

      <div className="md:text-xl  bg-gradient-to-b from-green-500 to-green-100 p-2 text-blue-700 font-bold text-center  rounded-b-full">
        {/* <!-- this section is about me --> */}
        <p className="md:text-3xl ">
          <i className="fa fa-project-diagram text-gray-700 px-2"></i>
          {t("all-current-projects")}
        </p>

        <hr className="w-48 m-auto" />
        <p className="md:text-lg  text-center text-gray-700 pt-2">
          <i className="fa fa-angle-double-left"></i> Other Projects{" "}
          <i className="fa fa-angle-double-right"></i>
        </p>
      </div>
      <OtherSkills />

      <Row className="flex flex-wrap justify-content-center bg-color-gray">
        {loading ? (
          <div>
            <img src={spinner} alt="" />
          </div>
        ) : (
          mydata.oldProjects.map((project) => {
            return <SingleCard data={project} key={project.projectName} />;
          })
        )}
      </Row>
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
    </>
  );
}
