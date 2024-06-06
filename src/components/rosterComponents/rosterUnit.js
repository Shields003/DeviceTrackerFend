// File: DropdownMenu.js
import React from "react";
import styled from "@emotion/styled";

// Define your theme colors
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


// Styling for the Map Filters component
const MenuLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: .6rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  gap: 0.5rem;
`;

const DropdownContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Dropdown = styled.select`
  padding: 0.3em;
  font-style: bold;
  font-size: 1em;
  border: 2px solid ${theme.colors.primary};
  border-radius: 5px;
  background-color: ${theme.colors.complementary2};
  color: ${theme.colors.primary};
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: ${theme.colors.accent};
  }
`;

const DropdownOption = styled.option`
  padding: 0.5em;
  background-color: white;
  color: ${theme.colors.primary};
`;

const RosterUnit = ({ selectedOption, handleOptionChange }) => {
  return (
    <DropdownContainer>
     <MenuLabel>Forecast:</MenuLabel>
      <Dropdown value={selectedOption} onChange={handleOptionChange}>
        <DropdownOption value="97 ISS">30 Days</DropdownOption>
        <DropdownOption value="55 IS">60 Days</DropdownOption>
        <DropdownOption value="38 RS">90 Days</DropdownOption>
        <DropdownOption value="45 RS">180 Days</DropdownOption>
        <DropdownOption value="338 CTS">1 Year</DropdownOption>
      </Dropdown>
    </DropdownContainer>
  );
};

export default RosterUnit;
