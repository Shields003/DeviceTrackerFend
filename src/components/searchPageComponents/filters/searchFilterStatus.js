import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1.2rem;
  border: 1px solid #284b63;
  border-radius: 4px;
  color: #284b63
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

const SearchFilterStatus = ({ handleFilterChange }) => {
  const [filterOption, setFilterOption] = useState("");

  const handleChange = (event) => {
    setFilterOption(event.target.value);
    handleFilterChange(event.target.value);
  };

  return (
    <Container>
      <Label htmlFor="filter-select">Status:</Label>
      <Select
        name="filter-select"
        id="filter-select"
        value={filterOption}
        onChange={handleChange}
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