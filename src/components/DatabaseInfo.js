import React, { useState, useEffect } from "react";
// import { FaMobileAlt } from "react-icons/fa";
import styled from "@emotion/styled";
import Modal from "react-modal";
import AppleIcon from "@mui/icons-material/Apple";
import { fetchMaaS360Data } from "./Maas360Data";

const DeviceContainer = styled.li`
  margin: 1rem 0;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  color: ${(props) => props.theme.colors.text};
`;

const DeviceName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: white;
  text-align: center;
`;

const StatusText = styled.div`
  font-size: 1.2rem;
  text-align: center;
  background-color: ${(props) => props.theme.secondaryColor};
  border: 1px solid black;
  border-radius: 8px;
  padding: 0.5rem;
  margin: 0.5rem;
`;

const StatusBox = styled.div`
  font-size: 1.2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
`;

const ButtonStyle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.colors.accent};
  border: none;
  border-radius: 8px;
  padding: 0.5rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* add styles specifically for the AppleIcon */
  .apple-icon {
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.5rem;
    color: ${(props) => props.theme.colors.complementary1};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.complementary2};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.complementary1};
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 3px rgba(255, 87, 34, 0.4);
  }
`;

const modalStyles = {
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
    background: "gray",
    padding: "20px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
};

Modal.setAppElement("#root");

const DatabaseInfo = () => {
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

  const totalDevices = devices.length;
  try {
    return (
      <StatusBox>
        <h1>Database</h1>
        <h2>Total Devices: {totalDevices}</h2>
        <div onClick={openModal}>
          <ButtonStyle>
            <AppleIcon className="mobile-icon" />
          </ButtonStyle>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel="Device List Modal"
        >
          <DeviceName>Device List</DeviceName>
          <ul>
            {Array.isArray(devices) &&
              devices.map((device) => (
                <DeviceContainer key={device.id}>
                  <DeviceName>{device.name}</DeviceName>
                  <StatusText>ID: {device.id}</StatusText>
                  <StatusText>OS: {device.os}</StatusText>
                </DeviceContainer>
              ))}
          </ul>
          <button onClick={closeModal}>Close</button>
        </Modal>
      </StatusBox>
    );
  } catch (error) {}
};

export default DatabaseInfo;
