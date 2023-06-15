import React, { useState } from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
// Local Imports
import SearchBar from "../components/searchPageComponents/searchBar/searchBar";
import SearchFilterUnit from "../components/searchPageComponents/filters/searchFilterUnit";
import SearchFilterStatus from "../components/searchPageComponents/filters/searchFilterStatus";
import SearchFilterType from "../components/searchPageComponents/filters/searchFilterType";
import FooterWithDate from "../components/footer/footerWithDate";

//Styled components
const theme = {
  colors: {
    primary: "#284b63", // primary color (blue)
    complementary1: "#3c6e71", // complementary color 1 (dark blue/green)
    complementary2: "#d9d9d9", // complementary color 2 (gray)
    accent: "#1985a1", // accent color (blue/green)
    accent2: "#fca311", // accent color 2 (orange)
    dark: "#353535", // dark color (dark gray)
    text: "#ffffff", // text color (white)
    alert: "#eb5e28", // alert color (orange/red)
  },
};

const TopDiv = styled.div`
  background-color: ${(props) => props.theme.colors.complementary2};
  width: 100vw;
  height: 95vh;
  overflow: hidden;
  margin-right: -200px;
  padding: 0;
`;

const MainDiv = styled.div`
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
    <TopDiv>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            background-color: ${theme.colors.complementary2};
          }
          #root {
            height: 100%;
          }
        `}
      />
      <MainDiv>
        <h1>Device Database Search</h1>
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
        <FooterWithDate />
      </MainDiv>
    </TopDiv>
  );
};

export default SearchPage;
