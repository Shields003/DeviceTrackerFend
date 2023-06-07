import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { FaMobileAlt } from "react-icons/fa";
import styled from "@emotion/styled";
import { fetchMaaS360Data } from "../../../backendInterface/maas360Data";
import Modal from "react-modal";
import AppleIcon from "@mui/icons-material/Apple";
import CloseIcon from "@mui/icons-material/Close";

const DeviceContainer = styled.li`
  margin: 1rem 0;
  padding: 1rem;
  background-color: cadetblue;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
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
  background-color: #42f5d4;
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
`;

const ButtonStyle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background-color: ${props => props.theme.primaryColor};
  border: none;
  border-radius: 8px;
  padding: 0.5rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* add styles specifically for the FaApple icon */
  .apple-icon {
    width: 1em;
    height: 1em;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: #0061a8;
  }

  &:active {
    background-color: #00508f;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 3px rgba(0, 113, 197, 0.4);
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.primaryColor};
  font-size: 1.2rem;
  cursor: pointer;
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
    background: props => props.theme.secondaryColor,
    padding: "20px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
};


Modal.setAppElement("#root");

function DeviceModel() {
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchDevices() {
      try {
        const data = await fetchMaaS360Data();
        if (data) {
          setDevices(data);
        } else {
          setDevices([]);
        }
      } catch (error) {
        setError(error.message);
        setDevices([]);
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

  const totalDevices = devices ? devices.length : 0;

  return (
    <StatusBox>
      <h1>Device Model</h1>
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
        contentLabel="Device Status Modal"
      >
        <CloseButton onClick={closeModal}>
          <CloseIcon />
        </CloseButton>
        <DeviceName>Device Status</DeviceName>
        <ul>
          {devices.map((device) => (
            <DeviceContainer key={device.ID}>
              <DeviceName>{device.device_name}</DeviceName>
              <StatusText>ID: {device.ID}</StatusText>
              <StatusText>Model: {device.model}</StatusText>
            </DeviceContainer>
          ))}
        </ul>
      </Modal>
    </StatusBox>
  );
}

export default DeviceModel;
