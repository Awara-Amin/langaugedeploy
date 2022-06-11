import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

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
export default function TextAnimationForContact() {
  const reactArray = "Talk To Us".split("");

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
    <Wrapper dir="ltr">
      {reactArray.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </Wrapper>
  );
}

const animation = keyframes`
0% {opacity: 0; 
    transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg);
    filter: blur(10px);}
}
25% {opacity: 1; 
    transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
    filter: blur(0px);}
75% {opacity: 1; 
    transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
    filter: blur(0px);}
100% {opacity:0; 
    transform: translateY(-100px) skewX(10deg) rotateZ(30deg);
    filter: blur(10px);}
`;

const Wrapper = styled.span`
  display: inline-block;

  span {
    display: inline-block;
    // opacity: 0;
    color: yellow;
    font-size: 2rem;
    font-weight: bold;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  span:nth-child(1) {
    animation-delay: 1.5s;
  }

  span:nth-child(2) {
    animation-delay: 0.7s;
  }

  span:nth-child(3) {
    animation-delay: 0.5s;
  }

  span:nth-child(4) {
    animation-delay: 0.5s;
  }

  span:nth-child(5) {
    animation-delay: 0.6s;
  }
`;
