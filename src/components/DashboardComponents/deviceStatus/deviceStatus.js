import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Modal from "react-modal";
import { fetchMaaS360Data } from "../../../backendInterface/maas360Data";
import AssessmentIcon from '@mui/icons-material/Assessment';
import AppleIcon from "@mui/icons-material/Apple";

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

const ModalTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
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

// const DeviceContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 1rem;
// `;

// const Label = styled.span`
//   font-weight: bold;
//   margin-right: 1rem;
// `;

const Value = styled.span``;
const totalCompliant = 22371;
const totalOutdated = 1745;
const totalNonCompliant = 1246;
const totalUnknown = 348;
// const compliant = [52, 257, 887, 74, 20, 415, 284, 977, 296, 152, 311, 112];
// const outdated = [415, 240, 9, 5, 813, 47, 880, 634, 826, 858, 992, 248];
// const quarantined = [717, 450, 516, 11, 945, 533, 487, 721, 611, 746, 451, 198];
// const unknown = [13, 52, 68, 32, 32, 20, 12, 12, 49, 50, 27, 37];

Modal.setAppElement("#root");

const DeviceStatus = () => {
  const [devices, setDevices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchMaaS360Data();
        setDevices(data.devices);
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
      <Title>Device Status</Title>
      <h2>Compliant Devices: 22741</h2>
      <ButtonContainer>
        <ButtonStyle onClick={openModal}>
          <AssessmentIcon className="apple-icon" />
          View Details
        </ButtonStyle>
      </ButtonContainer>
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
              <Td>Compliant</Td>
              <Td>52</Td>
              <Td>257</Td>
              <Td>887</Td>
              <Td>74</Td>
              <Td>20</Td>
              <Td>415</Td>
              <Td>284</Td>
              <Td>977</Td>
              <Td>296</Td>
              <Td>152</Td>
              <Td>311</Td>
              <Td>112</Td>
              <Td>{totalCompliant}</Td>
            </tr>
            <tr>
              <Td>Outdated</Td>
              <Td>415</Td>
              <Td>240</Td>
              <Td>9</Td>
              <Td>5</Td>
              <Td>813</Td>
              <Td>47</Td>
              <Td>880</Td>
              <Td>634</Td>
              <Td>826</Td>
              <Td>858</Td>
              <Td>992</Td>
              <Td>248</Td>
              <Td>{totalOutdated}</Td>
            </tr>
            <tr>
              <Td>Quarantined</Td>
              <Td>717</Td>
              <Td>450</Td>
              <Td>516</Td>
              <Td>11</Td>
              <Td>945</Td>
              <Td>533</Td>
              <Td>487</Td>
              <Td>721</Td>
              <Td>611</Td>
              <Td>746</Td>
              <Td>451</Td>
              <Td>198</Td>
              <Td>{totalNonCompliant}</Td>
            </tr>
            <tr>
              <Td>Unknown</Td>
              <Td>213</Td>
              <Td>652</Td>
              <Td>868</Td>
              <Td>382</Td>
              <Td>352</Td>
              <Td>720</Td>
              <Td>142</Td>
              <Td>129</Td>
              <Td>549</Td>
              <Td>950</Td>
              <Td>627</Td>
              <Td>377</Td>
              <Td>{totalUnknown}</Td>
            </tr>
          </tbody>
        </Table>
        <CloseButton onClick={() => setIsOpen(false)}>Close</CloseButton>
      </Modal>
      {error && <div>Error: {error}</div>}
    </StatusBox>
  );
};

export default DeviceStatus;
