import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

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
export default function Category(props) {
  const { category } = props;
  console.log("first props in Product.js");
  console.log(category._id);
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
    <Card className="card-2 exampleOurWrk">
      <img
        className="medium workImage"
        src={category.project_img}
        alt={category.projectName}
      />

      <Card.Body className="contentOurWork">
        <Link to="/projectscreen" className="item">
          <i class="fa fa-expand sizeOfIt"></i>
        </Link>
        <Card.Text className="textName">{category.projectName}</Card.Text>
        <Link to="/projectscreen">{t("go-to-the-projects")}</Link>
      </Card.Body>
    </Card>
  );
}
