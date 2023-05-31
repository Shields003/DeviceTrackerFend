import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import SearchBar from "../components/SearchPageComponents/SearchBar";
import SearchFilter from "../components/SearchPageComponents/SearchFilter";
import FilterCheckbox from "../components/SearchPageComponents/FilterCheckbox";

const MainDiv = styled.div`
  margin: 1rem;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SearchResultsDiv = styled.div`
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

const CheckboxRow = styled.div`
  display: flex;
  align-items: baseline;
  margin: 0.5rem 0;
  font-size: 1.2rem;
  white-space: nowrap;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // TODO: Implement search logic here
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  return (
    <MainDiv>
      <h1
        css={css`
          font-size: 3rem;
          color: white;
          margin-bottom: 2rem;
        `}
      >
        Device Database Search
      </h1>
      <SearchRow>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
        <CheckboxRow>
          <FilterCheckbox label="User Name" />
          <FilterCheckbox label="Quarantined Devices" />
          <FilterCheckbox label="OS Version" />
          <FilterCheckbox label="Archived" />
        </CheckboxRow>
        <SearchFilter
          filterOption={filterOption}
          handleFilterChange={handleFilterChange}
        />
      </SearchRow>
      {/* Render search results here */}
      {searchTerm && (
        <SearchResultsDiv>
          {/* Render search results based on searchTerm and filterOption */}
        </SearchResultsDiv>
      )}
      {!searchTerm && <p>Enter a search to see results below!</p>}
    </MainDiv>
  );
};

export default SearchPage;
