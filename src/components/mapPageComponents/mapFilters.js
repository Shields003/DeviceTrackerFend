import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";

// Styling for the Map Filters component
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 110px;
  margin-bottom: 32px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  gap: 0.5rem;
`;

const Checkbox = styled.input`
  transform: scale(1.4);
  cursor: pointer;
`;

const MapFilters = () => {
  const [filters, setFilters] = useState({
    all: true,
    tablets: false,
    smartphones: false,
    desktops: false,
    laptops: false,
    other: false,
  });

  const handleFilterChange = (filter) => {
    if (filter === "all") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        all: true,
        tablets: false,
        smartphones: false,
        desktops: false,
        laptops: false,
        other: false,
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        all: false,
        [filter]: !prevFilters[filter],
      }));
    }
  };

  return (
    <FilterContainer>
      <CheckboxLabel>
        <Checkbox
          type="checkbox"
          checked={filters.all}
          onChange={() => handleFilterChange("all")}
        />
        All
      </CheckboxLabel>
      <CheckboxLabel>
        <Checkbox
          type="checkbox"
          checked={filters.tablets}
          onChange={() => handleFilterChange("tablets")}
        />
        Tablets
      </CheckboxLabel>
      <CheckboxLabel>
        <Checkbox
          type="checkbox"
          checked={filters.smartphones}
          onChange={() => handleFilterChange("smartphones")}
        />
        Smartphones
      </CheckboxLabel>
      <CheckboxLabel>
        <Checkbox
          type="checkbox"
          checked={filters.desktops}
          onChange={() => handleFilterChange("desktops")}
        />
        Desktops
      </CheckboxLabel>
      <CheckboxLabel>
        <Checkbox
          type="checkbox"
          checked={filters.laptops}
          onChange={() => handleFilterChange("laptops")}
        />
        Laptops
      </CheckboxLabel>
      <CheckboxLabel>
        <Checkbox
          type="checkbox"
          checked={filters.other}
          onChange={() => handleFilterChange("other")}
        />
        Other
      </CheckboxLabel>
    </FilterContainer>
  );
};

export default MapFilters;
