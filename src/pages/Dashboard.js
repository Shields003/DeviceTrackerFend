import React, { useState } from "react";
import styled from "@emotion/styled";
import DeviceList from "../components/DeviceList";
import DeviceStatus from "../components/DeviceStatus";
// import { FaMobileAlt } from "react-icons/fa";
// import Pagination from "../components/DashboardComponents/Pagination";
import ModalContent from "../components/DashboardComponents/ModalContent";
import TotalDevices from "../components/TotalDevices";
import DatabaseInfo from "../components/DatabaseInfo";

const ParentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 1rem;
  border: 3px solid ${(props) => props.theme.primaryColor};
  border-radius: 10px;
  max-width: 70vw;
  max-height: 70vh;
`;

const ChildContainer = styled.div`
  display: flex;
  margin: 1rem;
  border: 5px solid black;
  border-radius: 10px;
  background-color: ${(props) => props.theme.secondaryColor};
  align-items: center;
`;

// const MobileIcon = styled(FaMobileAlt)`
//   font-size: 3rem;
//   color: ${(props) => props.theme.primaryColor};
//   cursor: pointer;
// `;

const MainDiv = styled.div`
  margin: 1rem;
  padding-top: 5rem;
`;

const PageStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.primaryColor};
  height: 100%;
`;

// const Filter = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   margin: 1rem;
//   border: 3px solid ${(props) => props.theme.primaryColor};
//   border-radius: 10px;
//   max-width: 100vw;
//   max-height: 20vh;
// `;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContentContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
`;

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <MainDiv>
      <PageStyle>
        <ParentContainer>
          <ChildContainer>wowzers
            <TotalDevices />
          </ChildContainer>
          <ChildContainer>
            <DeviceStatus />
          </ChildContainer>
          <ChildContainer>
            <DeviceList />
          </ChildContainer>
          <ChildContainer>
            <DatabaseInfo />
          </ChildContainer>
        </ParentContainer>
      </PageStyle>
      {isModalOpen && (
        <ModalContainer>
          <ModalContentContainer>
            <ModalContent onClose={toggleModal} />
          </ModalContentContainer>
        </ModalContainer>
      )}
    </MainDiv>
  );
};

export default Dashboard;
