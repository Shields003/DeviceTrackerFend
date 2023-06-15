// Footer.js
import React from "react";
import styled from "@emotion/styled";
import bockscarLogo from "../../images/bockscarLogo.png";

const theme = {
  colors: {
    primary: "#284b63",
    text: "#ffffff",
  },
};

const FooterContainer = styled.footer`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  left: 0;
  height: 75px;
`;

const FooterText = styled.div`
  text-align: center;
  width: 90%;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
`;

const Logo = styled.img`
  height: 60px;
  width: 60px;
  object-fit: contain;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10rem;
  margin-left: 10rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        <Content>© 2023 Bockscar - All rights reserved.</Content>
        <Logo src={bockscarLogo} alt="Bockscar Logo" />
        <Content>Contact Us: Christopher.A.Shields@Leidos.com</Content>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
