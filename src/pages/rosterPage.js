//Library imports
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import { keyframes } from "@emotion/react";

//New local imports here
import TotalUsers from "../components/rosterComponents/totalUsers";
import TotalLoses from "../components/rosterComponents/totalLoses";
import TotalGains from "../components/rosterComponents/totalGains";
import RosterTable from "../components/rosterComponents/rosterTable";
import FooterWithDate from "../components/footer/footerWithDate";
import RosterFilters from "../components/rosterComponents/rosterFilters";
import RosterHeader from "../components/rosterComponents/rosterHeader";
import RosterMenu from "../components/rosterComponents/rosterMenu";
import RosterPrint from "../components/buttons/rosterPrint";
import RosterSearch from "../components/rosterComponents/rosterSearch";

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

const MainDiv = styled.div`
  padding-top: 8rem;
  background-color: ${theme.colors.complementary2};
`;

const PageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 100%;
`;

const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
`;

const ChildContainer = styled.div`
  display: flex;
  margin: 1rem;
  border: 3px solid ${theme.colors.primary};
  border-radius: 8px;
  align-items: center;
  box-shadow: 10px 10px 5px grey;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: #f59311;
  }

  &:active {
    border-color: #e76f51;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 3px rgba(252, 163, 17, 0.4);
  }
`;

const RosterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

`;

//Main component
const RosterPage = () => {
  const [isPieModalOpen, setIsPieModalOpen] = useState(false);
  const [isLineModalOpen, setIsLineModalOpen] = useState(false);

  const openPieModal = () => {
    setIsPieModalOpen(true);
  };

  const closePieModal = () => {
    setIsPieModalOpen(false);
  };

  const openLineModal = () => {
    setIsLineModalOpen(true);
  };

  const closeLineModal = () => {
    setIsLineModalOpen(false);
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
        <PageStyle>
          <ParentContainer>
            <ChildContainer>
              <TotalUsers />
            </ChildContainer>
            <ChildContainer>
              <TotalLoses />
            </ChildContainer>
            <ChildContainer>
              <TotalGains />
            </ChildContainer>
          </ParentContainer>
        </PageStyle>
        <FilterContainer>
          <RosterSearch />
          <RosterFilters />
          <RosterMenu />
          <RosterPrint />
        </FilterContainer>
        <RosterContainer>
          <RosterTable />
        </RosterContainer>
        <FooterWithDate />
      </MainDiv>
    </TopDiv>
  );
};

export default RosterPage;
