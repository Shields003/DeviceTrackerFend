import React, { useState } from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

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

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 150px;
  color: ${theme.colors.primary});
`;

const Label = styled.label`
  margin-right: 1rem;
  font-size: 1.5rem;
  color: ${theme.colors.primary};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  color: ${theme.colors.primary};
`;

const SearchFilterUnit = ({ handleFilterChange }) => {
  const [filterOption, setFilterOption] = useState("");

  const handleChange = (event) => {
    setFilterOption(event.target.value);
    handleFilterChange(event.target.value);
  };

  return (
    <Container>
      <Label htmlFor="unit-filter-select">Units:</Label>
      <Select
        name="unit-filter-select"
        id="unit-filter-select"
        value={filterOption}
        onChange={handleChange}
      >
        <option value="">All</option>
        <option value="55thWing">55th Wing</option>
        <option value="38thRS">38th RS</option>
        <option value="45thRS">45th RS</option>
        <option value="55thISS">55th ISS</option>
        <option value="55thOSS">55th OSS</option>
        <option value="82ndRS">82nd RS</option>
        <option value="95thRS">95th RS</option>
        <option value="97thIS">97th IS</option>
        <option value="390thIS">390th IS</option>
        <option value="488thIS">488th IS</option>
        <option value="338thCTS">338th CTS</option>
        <option value="343rdRS">343rd RS</option>
      </Select>
    </Container>
  );
};

export default SearchFilterUnit;