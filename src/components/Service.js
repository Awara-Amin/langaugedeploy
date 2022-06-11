import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export default function Service(props) {
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

  const { service } = props;
  console.log("awaaaaaaaa thya");
  console.log(service);
  console.log(service.image);
  console.log(service.name);

  return (
    <Card className="card" key={service._id}>
      <img
        src={service.image}
        className="justyfyingImages"
        alt={service.name}
      />

      <Card.Body className="wholeBody">
        <div className="textOnBody">
          <FontAwesomeIcon icon="fa fa-globe" />
          <div className="textOnBodyII">
            <i class="fa fa-globe textOnBodyI"></i>
          </div>

          <div className="textOnBodyII">
            <Link className="textOnBodyI " to={`/service/${service._id}`}>
              <h8 className="fontLink1">{service.name}</h8>
            </Link>
          </div>

          <Card.Text className="texts">{t("we-are-using-the")}</Card.Text>
          <Card.Text className="explorCenter">Explore More</Card.Text>
        </div>
      </Card.Body>
      <div className="iconsOverProducts"></div>
    </Card>
  );
}
