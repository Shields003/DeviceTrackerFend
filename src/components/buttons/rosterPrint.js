import React from "react";
import styled from "@emotion/styled";

// Define theme colors
const theme = {
  colors: {
    primary: "#284b63",
    complementary1: "#3c6e71",
    complementary2: "#d9d9d9",
    accent: "#1985a1",
    accent2: "#f59311",
    dark: "#353535",
    text: "#ffffff",
    alert: "#eb5e28",
  },
};

const Button = styled.button`
  height: 35px;
  margin-left: 2rem;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  font-family: serif;
  gap: 0.5rem;
  &:hover {
    background-color: #f59311;
    border: 2px solid #f59311;
    color: white;
`;

const RosterPrint = ({ color, children, ...props }) => {
  return (
    <Button color={color} {...props}>
      {children}
      Print
    </Button>
  );
};

export default RosterPrint;
