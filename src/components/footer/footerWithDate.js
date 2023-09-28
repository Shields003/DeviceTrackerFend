// Footer.js
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

//Styled components
const theme = {
  colors: {
    primary: "#284b63", // primary color (blue)
    complementary1: "#3c6e71", // complementary color 1 (dark blue/green)
    complementary2: "#d9d9d9", // complementary color 2 (gray)
    accent: "#1985a1", // accent color (blue/green)
    accent2: "#fca311", // accent color 2 (orange)
    dark: "#353535", // dark color (dark gray)
    text: "#ffffff", // text color (white)
    alert: "#eb5e28", // alert color (orange/red)
  },
};

const FooterContainer = styled.footer`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: optima, sans-serif;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  height: 60px;
  border-top: 1px solid white;

`;

const FooterText = styled.div`
  margin: 5px;
  text-align: center;
`;

const FooterTextCenter = styled.div`
  margin-left: 55px;
  text-align: center;
`;

const FooterWithDate = () => {
  const [date, setDate] = useState(new Date());
  // const [lastRefresh, setLastRefresh] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  

  const getOS = () => {
    const platform = window.navigator.platform;

    // iPad
    if (platform.indexOf("iPad") !== -1) return "iPad";

    return "OS Info N/A";
  };

  return (
    <FooterContainer>
      <FooterText>Date: {date.toLocaleDateString()}</FooterText>
      <FooterTextCenter>Time: {date.toLocaleTimeString()}</FooterTextCenter>
      {/* <FooterText>Last Refresh: {lastRefresh.toLocaleTimeString()}</FooterText> */}
      <FooterText>Current OS: {getOS()}</FooterText>
    </FooterContainer>
  );
};

export default FooterWithDate;
