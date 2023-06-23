import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import Footer from "../components/footer/footer";
import pulseLogoLarge from "../images/pulseLogoLarge.jpeg";

const theme = {
  colors: {
    primary: "#284b63",
    complementary1: "#3c6e71",
    complementary2: "#d9d9d9",
    accent: "#1985a1",
    accent2: "#fca311",
    dark: "#353535",
    text: "#ffffff",
    alert: "#eb5e28",
  },
};

// const Title = styled.h1`
//   font-size: 2rem;
//   margin-bottom: 1rem;
//   color: ${theme.colors.accent};
//   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
// `;

const Info = styled.p`
  font-size: 1.5rem;
  max-width: 900px;
  line-height: 1.5;
  font-style: italic;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

const pulse = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  10% {
    opacity: .97;
    transform: scale(.98);
  }
  20% {
    opacity: 1;
    transform: scale(1);
  }
  30% {
    opacity: .97;
    transform: scale(.98);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  60% {
    opacity: .97;
    transform: scale(.98);
  }
  70% {
    opacity: 1;
    transform: scale(1);
  }
  80% {
    opacity: .97;
    transform: scale(.98);
  }
  100% {
    opacity: 1;
    transform: scale(1);
`;

const Logo = styled.img`
  border: 4px double ${theme.colors.accent2};
  border-radius: 8px;
  object-fit: contain;
  margin-right: 1rem;
  height: 400px;
  width: 570px;
  animation: ${pulse} 1.7s ease-in-out;
`;

const TopContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin-top: -5rem;
  margin-left: -8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.complementary2};
`;

const Container = styled.div`
  margin-top: 6em;
  height: 80vh;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  font-family: Arial, sans-serif;
  text-align: center;
  border: 4px groove ${theme.colors.accent2};
  border-radius: 8px;
`;

const HomePage = () => {
  return (
    <TopContainer>
      <Container>
        <Logo src={pulseLogoLarge} alt="Logo" />
        <Info>
          Welcome to Pulse by Bockscar. This application allows you to track and
          manage mobile devices, get real-time information, search device
          history, and more.
        </Info>
        <FeatureList>
          <FeatureItem>📱 Track and manage mobile devices</FeatureItem>
          <FeatureItem>📡 Get real-time information</FeatureItem>
          <FeatureItem>🔍 Search device history</FeatureItem>
          <FeatureItem>⚙️ Manage device settings</FeatureItem>
          <FeatureItem>🔔 Get alerts for important events</FeatureItem>
        </FeatureList>
      </Container>
      <Footer />
    </TopContainer>
  );
};

export default HomePage;
