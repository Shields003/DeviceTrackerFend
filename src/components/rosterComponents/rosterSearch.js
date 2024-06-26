import React from "react";
import styled from "@emotion/styled";
import { FaSearch } from "react-icons/fa";

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
   

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  font-size: 1.2rem;
  border: none;
  color: #284b63;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  font-size: 1.2rem;
  padding: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${theme.colors.accent2};
  }

  &:active {
    background-color: #e76f51;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 3px rgba(252, 163, 17, 0.4);
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: baseline;
  min-width: 300px;
  height: 35px;
  border: 1px solid #003366;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 2rem;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  min-width: 255px;
  flex-grow: 1;
`;

const RosterSearch = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.slice(0, 30));
  };

  return (
    <SearchForm onSubmit={handleSearch}>
      <SearchBarWrapper>
        <Input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          maxLength={30}
        />
      </SearchBarWrapper>
      <Button type="submit">
        <FaSearch />
      </Button>
    </SearchForm>
  );
};

export default RosterSearch;
