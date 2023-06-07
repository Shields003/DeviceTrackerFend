import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 150px
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

const SearchFilterType = ({ filterOption, handleFilterChange }) => {
  return (
    <Container>
      <Label htmlFor="filter-select">Device Type:</Label>
      <Select
        name="filter-select"
        id="filter-select"
        value={filterOption}
        onChange={handleFilterChange}
      >
        <option value="">All</option>
        <option value="ipad">iPads Only</option>
        <option value="iphone">iPhones Only</option>
        <option value="imac">iMacs Only</option>
        <option value="">...</option>
      </Select>
    </Container>
  );
};

export default SearchFilterType;
