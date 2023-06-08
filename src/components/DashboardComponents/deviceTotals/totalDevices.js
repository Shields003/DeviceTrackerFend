import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { fetchMaaS360Data } from "../../../backendInterface/maas360Data";
import AppleIcon from "@mui/icons-material/Apple";
import Modal from "react-modal";

const StatusBox = styled.div`
  background-color: #f7f7f7;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  min-width: 13vw;
  max-width: 15vw;
  min-height: 17vh;
  max-height: 18vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background-color: #fca311;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  .apple-icon {
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.5rem;
    color: #fff;
  }

  &:hover {
    background-color: #e76f51;
  }

  &:active {
    background-color: #e76f51;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 3px rgba(252, 163, 17, 0.4);
  }
`;

const ModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    maxHeight: "83vh",
    overflowY: "auto",
    background: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: "1000",
  },
};

const DeviceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Label = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const Value = styled.span`
  font-size: 1.2rem;
  color: #333;
`;

const TotalDevices = () => {
  const [totalDevices, setTotalDevices] = useState(0);
  const [totalIPads, setTotalIPads] = useState(0);
  const [totalIPhones, setTotalIPhones] = useState(0);
  const [totalMacBooks, setTotalMacBooks] = useState(0);
  const [totalIMacs, setTotalIMacs] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchMaaS360Data();
        setTotalDevices(data.total_devices);
        setTotalIPads(data.total_ipads);
        setTotalIPhones(data.total_iphones);
        setTotalMacBooks(data.total_macbooks);
        setTotalIMacs(data.total_imacs);
        setTotalUsers(data.total_users);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <StatusBox>
      <Title>Device Totals</Title>
      <h2>Total Devices: {totalDevices}</h2>
      <ButtonContainer>
        <ButtonStyle onClick={openModal}>
          <AppleIcon className="apple-icon" />
          View Details
        </ButtonStyle>
      </ButtonContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ModalStyles}
        contentLabel="Device Status Modal"
      >
        <div>
          <DeviceContainer>
            <Label>Total Devices:</Label>
            <Value>{totalDevices}</Value>
          </DeviceContainer>
          <DeviceContainer>
            <Label>Total iPads:</Label>
            <Value>{totalIPads}</Value>
          </DeviceContainer>
          <DeviceContainer>
            <Label>Total iPhones:</Label>
            <Value>{totalIPhones}</Value>
          </DeviceContainer>
          <DeviceContainer>
            <Label>Total MacBooks:</Label>
            <Value>{totalMacBooks}</Value>
          </DeviceContainer>
          <DeviceContainer>
            <Label>Total iMacs:</Label>
            <Value>{totalIMacs}</Value>
          </DeviceContainer>
          <DeviceContainer>
            <Label>Total Users:</Label>
            <Value>{totalUsers}</Value>
          </DeviceContainer>
        </div>
        <button onClick={closeModal}>Close</button>
      </Modal>
      {error && <div>Error: {error}</div>}
    </StatusBox>
  );
};

export default TotalDevices;
