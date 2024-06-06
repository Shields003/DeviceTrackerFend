import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";

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
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const RosterFilters = () => {
  const [filters, setFilters] = useState({
    users: true,
    loses: false,
    gains: false,
  });

  const handleFilterChange = (filter) => {
    if (filter === "all") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        users: true,
        loses: false,
        gains: false,

      }));
    } else if (filter === "gains" || filter === "loses") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        users: false,
 
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
          onChange={() => handleFilterChange("users")}
        />
        All Users
      </CheckboxLabel>
      <CheckboxLabel>
        <Checkbox
          type="checkbox"
          checked={filters.loses}
          onChange={() => handleFilterChange("loses")}
        />
        Loses
      </CheckboxLabel>
      <CheckboxLabel>
        <Checkbox
          type="checkbox"
          checked={filters.gains}
          onChange={() => handleFilterChange("gains")}
        />
        Gains
      </CheckboxLabel>
    </FilterContainer>
  );
};

export default RosterFilters;
