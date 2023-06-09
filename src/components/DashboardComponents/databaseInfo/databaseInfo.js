import React, { useState, useEffect } from "react";
// import { FaMobileAlt } from "react-icons/fa";
import styled from "@emotion/styled";
import Modal from "react-modal";
import AppleIcon from "@mui/icons-material/Apple";
import StorageIcon from '@mui/icons-material/Storage';
import { fetchMaaS360Data } from "../../../backendInterface/maas360Data";
import axios from "axios";

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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #fca311;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

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
  height: 52px; 
  width: 181px;
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
    margin-right: 0.3rem;
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #f7f7f7;
  color: #333;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  font-size: 1.5rem;
  padding-top: 2rem;
`;

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

const ModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "50vw",
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

Modal.setAppElement("#root");

function DatabaseInfo() {
  const [data, setData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/database-info"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const totalDevices = data.length;

  return (
    <StatusBox>
      <Title>Database Info</Title>
      <h2>Total Devices: {totalDevices}</h2>
      <div onClick={openModal}>
        <ButtonContainer>
          <ButtonStyle onClick={openModal}>
            <StorageIcon className="apple-icon" />
            View Details
          </ButtonStyle>
        </ButtonContainer>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ModalStyles}
        contentLabel="Database Info Modal"
      >
        <Title>Database Info</Title>
        <Table>
          <thead>
            <tr>
              <Th>Device ID</Th>
              <Th>Username</Th>
              <Th>Email</Th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <Td>{item.device_id}</Td>
                <Td>{item.username}</Td>
                <Td>{item.email}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
        <CloseButton onClick={() => setIsOpen(false)}>Close</CloseButton>
      </Modal>
    </StatusBox>
  );
}

export default DatabaseInfo;
