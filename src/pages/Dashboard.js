//Library imports
import React, { useState } from "react";
import styled from "@emotion/styled";
import Footer from "../components/footer/footer";

// Local imports
import DeviceStatus from "../components/dashboardComponents/deviceStatus/deviceStatus";
import TotalDevices from "../components/dashboardComponents/deviceTotals/totalDevices";
import DatabaseInfo from "../components/dashboardComponents/databaseInfo/databaseInfo";
import DeviceQuarantined from "../components/dashboardComponents/quarantinedDevices/deviceQuarantined";
import PieChartTotals from "../components/dashboardComponents/charts/pieChartTotals";
import LineChartUnitCompliance from "../components/dashboardComponents/charts/lineChartUnitCompliance";
import Gauges from "../components/dashboardComponents/charts/statusGuages";
import PieModal from "../components/dashboardComponents/modals/pieModal";
import LineModal from "../components/dashboardComponents/modals/lineModal";

const theme = {
  colors: {
    primary: "#284b63",
    complementary1: "#3c6e71",
    complementary2: "#d9d9d9",
    accent: "#1985a1",
    dark: "#353535",
    text: "#ffffff",
    alert: "#eb5e28",
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

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5); // semi-transparent black
`;

const ModalContentContainer = styled.div`
  background-color: ${theme.colors.complementary1};
  padding: 20px;
  border-radius: 10px;
  width: 70%; // larger modal
  max-width: 900px; // limit the width
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.text};
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: ${theme.colors.accent};
  }
`;

// Style your modal
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${theme.colors.complementary2};
  padding: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChartContainer = styled.div`
  width: 500px;
  height: 500px;
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
            <TotalDevices />
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
      <Divider />
      <Footer />
    </MainDiv>
  );
};

export default Dashboard;
