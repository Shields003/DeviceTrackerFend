import React, { useState } from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import { keyframes } from "@emotion/react";

// Local Imports
import RosterFilters from "./rosterFilters";
import SearchResults from "../searchPageComponents/results/searchResults";
import RosterResults from "./rosterResults";

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
  overflow: hidden;
`;

const Table = styled.div`
  max-height: 50vh;
  height: 100%;
  overflow-y: none; /* Scrollbar
`;

const SubTable = styled.div`
  max-height: 50vh;
  overflow: auto;
  height: 100%;
  margin-right: -50px; /* Maximum width of scrollbar */
  padding-right: 50px; /* Maximum width of scrollbar */
  overflow-y: scroll;
  border-bottom: 3px solid ${theme.colors.accent};
`;

const RosterTable = () => {
  return (
    <TopDiv>
      <Table>
        <SubTable>
          <RosterResults />
        </SubTable>
      </Table>
    </TopDiv>
  );
};

export default RosterTable;
