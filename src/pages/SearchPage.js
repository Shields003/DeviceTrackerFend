import React, { useState } from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import { keyframes } from "@emotion/react";

// Local Imports
import SearchBar from "../components/searchPageComponents/searchBar/searchBar";
import SearchFilterUnit from "../components/searchPageComponents/filters/searchFilterUnit";
import SearchFilterStatus from "../components/searchPageComponents/filters/searchFilterStatus";
import SearchFilterType from "../components/searchPageComponents/filters/searchFilterType";
import FooterWithDate from "../components/footer/footerWithDate";
import SearchResults from "../components/searchPageComponents/results/searchResults";
import GetTotalArray from "../components/searchPageComponents/results/getTotalArray";

//Styled components
const theme = {
  colors: {
    primary: "#284b63", // primary color (blue)
    complementary1: "#3c6e71", // complementary color 1 (dark blue/green)
    complementary2: "#d9d9d9", // complementary color 2 (gray)
    accent: "#1985a1", // accent color (blue/green)
    accent2: "#f59311", // accent color 2 (orange)
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
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
`;

const SearchBarDiv = styled.div`
  margin-bottom: -10px;
  padding-right: 20px;
`;

const SearchRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0rem;
  color: ${theme.colors.primary};
`;

const SearchResultsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const glow = keyframes`
  0%, 70% {
    border-color: ${theme.colors.primary};
    box-shadow: none;
  }
  80% {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 5px #f59311, 0 0 2px #f59311, 0 0 5px #f59311, 0 0 5px ${theme.colors.primary};
  }
`;

const Divider = styled.hr`
  margin-top: 20px;
  border: 0;
  border-top: 3px solid ${theme.colors.primary};
  border-radius: 8px;
  width: 52%;

  animation: ${glow} 5s infinite;
`;

const searchResults = [
  { id: 1, name: "Device 1", type: "Type A", status: "Active", unit: "Unit 1" },
  {
    id: 2,
    name: "Device 2",
    type: "Type B",
    status: "Inactive",
    unit: "Unit 2",
  },
  // ... other results
];

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
        <PageTitle>Device Database</PageTitle>
        <SearchRow>
          <SearchBarDiv>
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleSearch={handleSearch}
            />
          </SearchBarDiv>
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
        <Divider />
        <GetTotalArray />
        {/* Render search results here */}
        {!searchTerm && <p></p>}
        <SearchResultsDiv>
          <SearchResults />
        </SearchResultsDiv>
        <FooterWithDate />
      </MainDiv>
    </TopDiv>
  );
};

export default SearchPage;
