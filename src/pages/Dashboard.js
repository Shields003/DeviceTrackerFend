//Library imports
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import { keyframes } from "@emotion/react";

// Local imports
import DeviceStatus from "../components/dashboardComponents/deviceStatus/deviceStatus";
import DeviceTotals from "../components/dashboardComponents/deviceTotals/deviceTotals";
import DatabaseInfo from "../components/dashboardComponents/databaseInfo/databaseInfo";
import DeviceQuarantined from "../components/dashboardComponents/quarantinedDevices/deviceQuarantined";
import PieChartTotals from "../components/dashboardComponents/charts/pieChartTotals";
import UnitComplianceLineChart from "../components/dashboardComponents/charts/unitComplianceLineChart";
import Gauges from "../components/dashboardComponents/charts/statusGuages";
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
  overflow: hidden;
`;

const MainDiv = styled.div`
  margin: 1rem;
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
    border-color: #fca311;
  }

  &:active {
    border-color: #e76f51;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 3px rgba(252, 163, 17, 0.4);
  }
`;

const glow = keyframes`
  0%, 70% {
    border-color: ${theme.colors.primary};
    box-shadow: none;
  }
  80% {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 5px #fca311, 0 0 2px #fca311, 0 0 5px #fca311, 0 0 5px ${theme.colors.primary};
  }
`;

const Divider = styled.hr`
  border: 0;
  border-top: 3px solid ${theme.colors.primary};
  border-radius: 8px;
  width: 60%;
  margin: 0 auto;
  z-index: 1000;
  animation: ${glow} 5s infinite;
`;

//Main component
const Dashboard = () => {
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
              <DeviceTotals />
            </ChildContainer>
            <ChildContainer>
              <DeviceStatus />
            </ChildContainer>
            <ChildContainer>
              <DeviceQuarantined />
            </ChildContainer>
            <ChildContainer>
              <DatabaseInfo />
            </ChildContainer>
          </ParentContainer>
        </PageStyle>
        <Divider />
        <PageStyle>
          <ParentContainer>
            <ChildContainer>
              <PieChartTotals />
            </ChildContainer>
            <ChildContainer>
              <Gauges />
            </ChildContainer>
            <ChildContainer>
              <UnitComplianceLineChart />
            </ChildContainer>
          </ParentContainer>
        </PageStyle>
        <FooterWithDate />
      </MainDiv>
    </TopDiv>
  );
};

export default Dashboard;
