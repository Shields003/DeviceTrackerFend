//Library imports
import React, { useState } from "react";
import styled from "@emotion/styled";
import Footer from "../components/footer/footer";

// Local imports
import DeviceStatus from "../components/dashboardComponents/deviceStatus/deviceStatus";
import DeviceTotals from "../components/dashboardComponents/deviceTotals/deviceTotals";
import DatabaseInfo from "../components/dashboardComponents/databaseInfo/databaseInfo";
import DeviceQuarantined from "../components/dashboardComponents/quarantinedDevices/deviceQuarantined";
import PieChartTotals from "../components/dashboardComponents/charts/pieChartTotals";
import PieChartBig from "../components/dashboardComponents/charts/pieChartBig";
import LineChartUnitCompliance from "../components/dashboardComponents/charts/lineChartUnitCompliance";
import Gauges from "../components/dashboardComponents/charts/statusGuages";
import PieModal from "../components/dashboardComponents/modals/pieModal";
import LineModal from "../components/dashboardComponents/modals/lineModal";

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

//Styled components
const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  max-width: 80vw;
  max-height: 70vh;
`;

const ChildContainer = styled.div`
  display: flex;
  margin: 1rem;
  border: 5px solid black;
  border-radius: 10px;
  background-color: ${(props) => props.theme.secondaryColor};
  align-items: center;
  box-shadow: 10px 10px 5px grey;
`;

const MainDiv = styled.div`
  margin: 1rem;
  padding-top: 8rem;
`;

const PageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.primaryColor};
  height: 100%;
`;

const Divider = styled.hr`
  border: 0;
  border-top: 3px solid black;
  width: 67%;
  margin: 0 auto;
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
            <LineChartUnitCompliance />
          </ChildContainer>
        </ParentContainer>
      </PageStyle>
      <Footer />
    </MainDiv>
  );
};

export default Dashboard;
