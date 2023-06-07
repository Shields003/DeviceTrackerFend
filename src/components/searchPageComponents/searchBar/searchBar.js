import React from "react";
import styled from "@emotion/styled";
import { FaSearch } from "react-icons/fa";

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  font-size: 1.2rem;
  border: none;
  color: #333333;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #003366;
  color: white;
  font-size: 1.2rem;
  padding: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #002244;
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  min-width: 300px;
  max-width: 500px;
  border: 1px solid #003366;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

const SearchBarWrapper = styled.div`
  flex-grow: 1;
`;

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
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
          placeholder="Search for devices..."
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

export default SearchBar;
