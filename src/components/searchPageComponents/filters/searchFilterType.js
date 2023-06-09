import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 160px;
`;

const Label = styled.label`
  margin-right: 1rem;
  white-space: nowrap;
  font-size: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;

const SearchFilterType = ({ handleFilterChange }) => {
  const [filterOption, setFilterOption] = useState("");

  const handleChange = (event) => {
    setFilterOption(event.target.value);
    handleFilterChange(event.target.value);
  };

  return (
    <Container>
      <Label htmlFor="filter-select">Device Type:</Label>
      <Select
        name="filter-select"
        id="filter-select"
        value={filterOption}
        onChange={handleChange}
      >
        <option value="">All</option>
        <option value="tablets">Tablets</option>
        <option value="smartphones">Smartphones</option>
        <option value="desktops">Desktops</option>
        <option value="laptops">Laptops</option>
        <option value="other">Other</option>
      </Select>
    </Container>
  );
};

export default SearchFilterType;
