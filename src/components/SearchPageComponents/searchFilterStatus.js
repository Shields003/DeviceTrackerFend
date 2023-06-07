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
  font-size: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;

const SearchFilterStatus = ({ filterOption, handleFilterChange }) => {
  return (
    <Container>
      <Label htmlFor="filter-select">Status:</Label>
      <Select
        name="filter-select"
        id="filter-select"
        value={filterOption}
        onChange={handleFilterChange}
      >
        <option value="">All</option>
        <option value="compliant">Compliant Devices</option>
        <option value="outdated">Out-of-Date Devices</option>
        <option value="quarantined">Quarantined Devices</option>
        <option value="">...</option>
      </Select>
    </Container>
  );
};

export default SearchFilterStatus;
