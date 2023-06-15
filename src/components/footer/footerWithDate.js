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
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 60px;
  box-sizing: border-box;
  left: 0;
`;

const FooterText = styled.div`
  text-align: center;
  font-size: 1.2rem;
`;

const RefreshButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.accent2};
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.alert};
    color: ${({ theme }) => theme.colors.text};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.alert};
    color: ${({ theme }) => theme.colors.text};
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 3px rgba(252, 163, 17, 0.4);
  }
`;

const FooterWithDate = () => {
  const [date, setDate] = useState(new Date());
  const [lastRefresh, setLastRefresh] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const refreshPage = () => {
    setLastRefresh(new Date());
    window.location.reload(false);
  };

  const getOS = () => {
    const platform = window.navigator.platform;

    // iPad
    if (platform.indexOf("iPad") !== -1) return "iPad";

    return "OS Info N/A";
  };

  return (
    <FooterContainer>
      <FooterText>Date: {date.toLocaleDateString()}</FooterText>
      <FooterText>Time: {date.toLocaleTimeString()}</FooterText>
      <RefreshButton onClick={refreshPage}>Refresh</RefreshButton>
      <FooterText>Last Refresh: {lastRefresh.toLocaleTimeString()}</FooterText>
      <FooterText>Current OS: {getOS()}</FooterText>
    </FooterContainer>
  );
};

export default FooterWithDate;
