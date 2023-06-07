import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Modal from "react-modal";
import AppleIcon from "@mui/icons-material/Apple";
import { fetchMaaS360Data } from "../../../backendInterface/maas360Data";

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
  },
};

Modal.setAppElement("#root");

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

const totalQuarantined = 1412;

const DeviceQuarantined = () => {
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchDevices() {
      try {
        const data = await fetchMaaS360Data();
        setDevices(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchDevices();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (error) {
    return (
      <StatusBox>
        <div>Error: {error}</div>
      </StatusBox>
    );
  }

  return (
    <StatusBox>
      <Title>Quarantined Devices</Title>
      <h2>Quarantined: {totalQuarantined}</h2>
      <div onClick={openModal}>
        <ButtonContainer>
          <ButtonStyle onClick={openModal}>
            <AppleIcon className="apple-icon" />
            View Details
          </ButtonStyle>
        </ButtonContainer>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ModalStyles}
        contentLabel="Device List Modal"
      >
        <DeviceContainer>Device List</DeviceContainer>
        <ul>
          {Array.isArray(devices) && devices.length > 0 ? (
            devices.map((device) => (
              <DeviceContainer key={device.id}>
                <Label>Device Name</Label>
                <Value>{device.value}</Value>
                <Label>Status: </Label>
                <Value>{device.status}</Value>
                <Label>ID: </Label>
                <Value>{device.id}</Value>
                <Label>OS: </Label>
                <Value>{device.os}</Value>
              </DeviceContainer>
            ))
          ) : (
            <h1>No devices found.</h1>
          )}
        </ul>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </StatusBox>
  );
};

export default DeviceQuarantined;
