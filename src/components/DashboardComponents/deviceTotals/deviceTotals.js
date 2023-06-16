import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { fetchMaaS360Data } from "../../../backendInterface/maas360Data";
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
// import AppleIcon from "@mui/icons-material/Apple";
import Modal from "react-modal";

// Mock data
// Mock data
const tablets = [
  3127, 2391, 1987, 1613, 1017, 823, 712, 611, 509, 403, 307, 190,
]; // Total: 11481
const smartphones = [
  2037, 1523, 1217, 911, 813, 709, 611, 517, 409, 307, 211, 135,
]; // Total: 6491
const desktops = [1523, 1217, 987, 813, 709, 611, 517, 409, 307, 211, 135, 82]; // Total: 4712
const laptops = [1591, 1273, 1017, 823, 709, 611, 517, 409, 307, 211, 135, 82]; // Total: 3918
const other = [223, 187, 153, 127, 109, 91, 77, 65, 53, 41, 29, 16]; // Total: 543
const totalOther = 543;
const users = [
  13481, 8491, 6712, 5918, 5543, 5172, 4801, 4430, 4059, 3688, 3317, 2946,
];

const StatusBox = styled.div`
  background-color: #fff;
  padding: 2rem;
  text-align: center;
  min-width: 13vw;
  max-width: 15vw;
  min-height: 17vh;
  max-height: 18vh;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #284b63;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #3c6e71;
`;

const ModalTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
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

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  height: 52px; 
  width: 181px;
  background-color:  #284b63;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  .devices-icon {
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.3rem;
    color: #fff;
  }

  &:hover {
    background-color: #fca311;
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
  border: 1px solid;
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

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 100px;
`;

const DeviceTotals = () => {
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
    return <Loading>Loading...</Loading>;
  }

  return (
    <StatusBox>
      <Title>Device Totals</Title>
      <SubTitle>Total Devices: {totalDevices}</SubTitle>
      <ButtonContainer>
        <ButtonStyle onClick={openModal}>
          <DevicesOtherIcon className="devices-icon" />
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
          <ModalTitle>Device Totals</ModalTitle>
          <Table>
            <thead>
              <tr>
                <Th>Device Type</Th>
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
                <Td>Tablets</Td>
                <Td>{tablets[0]}</Td>
                <Td>{tablets[1]}</Td>
                <Td>{tablets[2]}</Td>
                <Td>{tablets[3]}</Td>
                <Td>{tablets[4]}</Td>
                <Td>{tablets[5]}</Td>
                <Td>{tablets[6]}</Td>
                <Td>{tablets[7]}</Td>
                <Td>{tablets[8]}</Td>
                <Td>{tablets[9]}</Td>
                <Td>{tablets[10]}</Td>
                <Td>{tablets[11]}</Td>
                <Td>11481</Td>
                {/* <Td>{totalIPads}</Td> */}
              </tr>
              <tr>
                <Td>Smartphones</Td>
                <Td>{smartphones[0]}</Td>
                <Td>{smartphones[1]}</Td>
                <Td>{smartphones[2]}</Td>
                <Td>{smartphones[3]}</Td>
                <Td>{smartphones[4]}</Td>
                <Td>{smartphones[5]}</Td>
                <Td>{smartphones[6]}</Td>
                <Td>{smartphones[7]}</Td>
                <Td>{smartphones[8]}</Td>
                <Td>{smartphones[9]}</Td>
                <Td>{smartphones[10]}</Td>
                <Td>{smartphones[11]}</Td>
                <Td>6491</Td>
                {/* <Td>{totalIPhones}</Td> */}
              </tr>
              <tr>
                <Td>Desktops</Td>
                <Td>{desktops[0]}</Td>
                <Td>{desktops[1]}</Td>
                <Td>{desktops[2]}</Td>
                <Td>{desktops[3]}</Td>
                <Td>{desktops[4]}</Td>
                <Td>{desktops[5]}</Td>
                <Td>{desktops[6]}</Td>
                <Td>{desktops[7]}</Td>
                <Td>{desktops[8]}</Td>
                <Td>{desktops[9]}</Td>
                <Td>{desktops[10]}</Td>
                <Td>{desktops[11]}</Td>
                <Td>4712</Td>
                {/* <Td>{totalIMacs}</Td> */}
              </tr>
              <tr>
                <Td>Laptops</Td>
                <Td>{laptops[0]}</Td>
                <Td>{laptops[1]}</Td>
                <Td>{laptops[2]}</Td>
                <Td>{laptops[3]}</Td>
                <Td>{laptops[4]}</Td>
                <Td>{laptops[5]}</Td>
                <Td>{laptops[6]}</Td>
                <Td>{laptops[7]}</Td>
                <Td>{laptops[8]}</Td>
                <Td>{laptops[9]}</Td>
                <Td>{laptops[10]}</Td>
                <Td>{laptops[11]}</Td>
                <Td>3918</Td>
                {/* <Td>{totalMacBooks}</Td> */}
              </tr>
              <tr>
                <Td>Other</Td>
                <Td>{other[0]}</Td>
                <Td>{other[1]}</Td>
                <Td>{other[2]}</Td>
                <Td>{other[3]}</Td>
                <Td>{other[4]}</Td>
                <Td>{other[5]}</Td>
                <Td>{other[6]}</Td>
                <Td>{other[7]}</Td>
                <Td>{other[8]}</Td>
                <Td>{other[9]}</Td>
                <Td>{other[10]}</Td>
                <Td>{other[11]}</Td>
                <Td>{totalOther}</Td>
              </tr>
            </tbody>
          </Table>
          <CloseButton onClick={() => setIsOpen(false)}>Close</CloseButton>
        </div>
      </Modal>
      {error && <div>Error: {error}</div>}
    </StatusBox>
  );
};

export default DeviceTotals;
