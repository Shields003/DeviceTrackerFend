import React from "react";
import styled from "@emotion/styled";

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Label = styled.label`
  margin-right: 1rem;
  font-size: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;

`;

const SearchFilter = ({ filterOption, handleFilterChange }) => {
  return (
    <Container>
      <Label htmlFor="filter-select">Filter by Org:</Label>
      <Select
        name="filter-select"
        id="filter-select"
        value={filterOption}
        onChange={handleFilterChange}
      >
        <option value="">All</option>
        <option value="55th Wiing">55th Wiing</option>
        <option value="38th Reconnaissance Squadron">
          38th Reconnaissance Squadron
        </option>
        <option value="45th Reconnaissance Squadron">
          45th Reconnaissance Squadron
        </option>
        <option value="55th Intelligence Support Squadron">
          55th Intelligence Support Squadron
        </option>
        <option value="55th Operations Support Squadron">
          55th Operations Support Squadron
        </option>
        <option value="82nd Reconnaissance Squadron">
          82nd Reconnaissance Squadron
        </option>
        <option value="95th Reconnaissance Squadron">
          95th Reconnaissance Squadron
        </option>
        <option value="97th Intelligence Squadron">
          97th Intelligence Squadron
        </option>
        <option value="390th Intelligence Squadron">
          390th Intelligence Squadron
        </option>
        <option value="488th Intelligence Squadron">
          488th Intelligence Squadron
        </option>
        <option value="338th Combat Training Squadron">
          338th Combat Training Squadron
        </option>
        <option value="343rd Reconnaissance Squadron">
          343rd Reconnaissance Squadron
        </option>
      </Select>
    </Container>
  );
};

export default SearchFilter;
