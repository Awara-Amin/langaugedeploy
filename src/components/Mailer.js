import React, { useEffect } from "react";
import emailjs from "emailjs-com";

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

const Mailer = () => {
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

  function sendEmail(e) {
    alert("You message has been send successfully");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lvztg42",
        "template_l8g0ln8",
        e.target,
        "Ps0owUJKhtm6NmLsl"
      )
      .then(
        (res) => {
          console.log(res.text);
        },
        (err) => {
          console.log(err.text);
        }
      );
    e.target.reset();
  }
  return (
    <div
      className="container border mailerBackground"
      style={{
        marginTop: "50px",
        width: "100%",
        backgroundImage: `url("https://thumbs.dreamstime.com/z/beautiful-autumn-foliage-background-brunches-falling-tree-leaves-sky-bokeh-98280795.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 style={{ marginTop: "30px" }}>{t("contact-us")}</h1>
      <form
        className="row formContact"
        // style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label>{t("name")}</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your name"
        ></input>

        <label>{t("email")}</label>
        <input
          type="email"
          name="user_email"
          className="form-control"
          placeholder="Your email"
        ></input>

        <label>{t("message")}</label>
        <textarea
          name="message"
          rows="6"
          className="form-control"
          placeholder="Your message"
        ></textarea>

        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        ></input>
      </form>
    </div>
  );
};

export default Mailer;
