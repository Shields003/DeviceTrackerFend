import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Modal from "react-modal";
import ReportIcon from "@mui/icons-material/Report";

const StatusBox = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  width: 15vw;
  max-width: 10vw;
  height: 10vh;
  max-height: 10vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #284b63;
  margin-top: -1rem;
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  color: #3c6e71;
`;

const CloseButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #f59311;
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
  background-color: #284b63;
  height: 52px;
  width: 181px;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  .warning-icon {
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.3rem;
    color: #fff;
  }

  &:hover {
    background-color: #f59311;
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

  border: 1px solid red;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: left;
  background-color: #f7f7f7;
  color: #333;
  font-size: 1.5rem;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  font-size: 1.5rem;
  padding-top: 2rem;
`;

const ModalTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    // width: "80%",
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
  closeButton: {
    display: "none",
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

const TotalUsers = () => {
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

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
      <Title>Total Assigned</Title>
      <SubTitle>Assigned: 8411</SubTitle>
      <div onClick={openModal}>
        <ButtonContainer>
          <ButtonStyle onClick={openModal}>
            <ReportIcon className="warning-icon" />
            View Details
          </ButtonStyle>
        </ButtonContainer>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ModalStyles}
        contentLabel="Device Status Modal"
      >
        <ModalTitle>Device Status</ModalTitle>
        <Table>
          <thead>
            <tr>
              <Th>Status</Th>
              <Th>55th Wing</Th>
              <Th>38th RS</Th>
              <Th>45th RS</Th>
              <Th>55th ISS</Th>
              <Th>55th OSS</Th>
              <Th>82nd RS</Th>
              <Th>95th RS</Th>
              <Th>97th IS</Th>
              <Th>390th IS</Th>
              <Th>488th IS</Th>
              <Th>338th CTS</Th>
              <Th>343rd RS</Th>
              <Th>Totals</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>Quarantined</Td>
              <Td>2</Td>
              <Td>27</Td>
              <Td>87</Td>
              <Td>4</Td>
              <Td>2</Td>
              <Td>15</Td>
              <Td>24</Td>
              <Td>77</Td>
              <Td>26</Td>
              <Td>12</Td>
              <Td>11</Td>
              <Td>11</Td>
              <Td>347</Td>
            </tr>
            <tr>
              <Td>Tablets</Td>
              <Td>15</Td>
              <Td>20</Td>
              <Td>9</Td>
              <Td>5</Td>
              <Td>13</Td>
              <Td>47</Td>
              <Td>80</Td>
              <Td>34</Td>
              <Td>26</Td>
              <Td>58</Td>
              <Td>92</Td>
              <Td>24</Td>
              <Td>487</Td>
            </tr>
            <tr>
              <Td>Smartphones</Td>
              <Td>17</Td>
              <Td>40</Td>
              <Td>16</Td>
              <Td>1</Td>
              <Td>45</Td>
              <Td>33</Td>
              <Td>47</Td>
              <Td>21</Td>
              <Td>11</Td>
              <Td>46</Td>
              <Td>41</Td>
              <Td>218</Td>
              <Td>287</Td>
            </tr>
            <tr>
              <Td>Desktops</Td>
              <Td>13</Td>
              <Td>52</Td>
              <Td>68</Td>
              <Td>32</Td>
              <Td>32</Td>
              <Td>20</Td>
              <Td>12</Td>
              <Td>12</Td>
              <Td>49</Td>
              <Td>50</Td>
              <Td>27</Td>
              <Td>23</Td>
              <Td>317</Td>
            </tr>
            <tr>
              <Td>Laptops</Td>
              <Td>3</Td>
              <Td>5</Td>
              <Td>8</Td>
              <Td>3</Td>
              <Td>2</Td>
              <Td>0</Td>
              <Td>2</Td>
              <Td>1</Td>
              <Td>9</Td>
              <Td>5</Td>
              <Td>2</Td>
              <Td>3</Td>
              <Td>47</Td>
            </tr>
            <tr>
              <Td>Other</Td>
              <Td>1</Td>
              <Td>0</Td>
              <Td>9</Td>
              <Td>5</Td>
              <Td>1</Td>
              <Td>4</Td>
              <Td>0</Td>
              <Td>3</Td>
              <Td>2</Td>
              <Td>5</Td>
              <Td>2</Td>
              <Td>2</Td>
              <Td>37</Td>
            </tr>
          </tbody>
        </Table>
        <CloseButton onClick={() => setIsOpen(false)}>Close</CloseButton>
      </Modal>
    </StatusBox>
  );
};

export default TotalUsers;
