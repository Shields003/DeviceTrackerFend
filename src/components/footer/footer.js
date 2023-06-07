// Footer.js
import React from "react";
import styled from "@emotion/styled";

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
`;

const FooterText = styled.div`
  text-align: center;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  font-size: 1.2rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        <p>© 2023 Bockscar. All rights reserved.</p>
        <p>Contact Us: Christopher.A.Shields@Leidos.com</p>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
