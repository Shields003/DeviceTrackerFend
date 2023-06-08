import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import SearchBar from "../components/searchPageComponents/searchBar/searchBar";
import SearchFilterUnit from "../components/searchPageComponents/filters/searchFilterUnit";
import SearchFilterStatus from "../components/searchPageComponents/filters/searchFilterStatus";
import SearchFilterType from "../components/searchPageComponents/filters/searchFilterType";
import Footer from "../components/footer/footer";

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


const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // TODO: Implement search logic here
    console.log("Searching for: (searchPage, line 42)", searchTerm);
  };

  const handleFilterChange = (value) => {
    setFilterOption(value);
  };

  return (
    <MainDiv>
      <h1
        css={css`
          font-size: 2rem;
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
        <SearchFilterStatus
          filterOption={filterOption}
          handleFilterChange={handleFilterChange}
        />
        <SearchFilterType
          filterOption={filterOption}
          handleFilterChange={handleFilterChange}
        />
        <SearchFilterUnit
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
      <Footer />
    </MainDiv>
  );
};

export default SearchPage;
