import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { FaExpandAlt } from "react-icons/fa";
import styled from "@emotion/styled";
import Modal from "react-modal";

Modal.setAppElement("#root"); // This line is needed for accessibility reasons

const theme = {
  colors: {
    primary: "#284b63", // primary color (blue)
    complementary1: "#3c6e71", // complementary color 1 (dark blue/green)
    complementary2: "#d9d9d9", // complementary color 2 (gray)
    accent: "#1985a1", // accent color (blue/green)
    accent2: "#f59311", // accent color 2 (orange)
    dark: "#353535", // dark color (dark gray)
    text: "#ffffff", // text color (white)
    alert: "#eb5e28", // alert color (orange/red)
  },
};

//Styled components for the tile/small chart
const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 360px;
  width: 400px;
  position: relative; children
  zindex: 1000;
  background-color: #fff;
  border-radius: 8px;
`;

const StyledChart = styled(Chart)`
  background-color: #f7f7f7;
`;

const Title = styled.h2`
  margin-top: -20px;
  padding: 0;
  margin-bottom: -3rem;
  text-align: center;
  font-size: 30px;
  color: ${theme.colors.primary};
`;

const ExpandButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${theme.colors.primary}; 
  font-size: 1.5rem;
  zIndex: 5;
  &:hover {
    color: ${theme.colors.accent2};
  }
  &:active {
    color: ${theme.colors.alert};
`;

const CloseButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
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

const data = [
  ["Device", "Totals"],
  ["Tablets", 24248],
  ["Smartphones", 5715],
  ["Desktops", 1414],
  ["Laptops", 477],
  ["Other", 152],
];

const options = {
  title: "",
  is3D: false,
  chartArea: {
    left: "10%",
    top: "5%",
    width: "90%",
    height: "90%",
    zIndex: "1000",
  },
};

// Modal declarations and styles
const ModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "20%",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "55%",
    padding: "0",
    margin: "0",
    zIndex: "1000",
    overflow: "hidden",
    border: "4px solid #284b63",
    borderRadius: "8px",
  },
};

const modalOptions = {
  title: "",
  is3D: true,
  chartArea: {
    left: "5%",
    top: "5%",
    width: "95%",
    height: "95%",
    zIndex: "1000",
  },
};

const ModalTitle = styled.h2`
  margin-top: 10px;
  padding: 0;
  text-align: center;
  font-size: 36px;
  color: ${theme.colors.primary};
`;

const ModalPieBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 1600px;
  height: 600px;
`;

const StyledChartModal = styled(Chart)`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  zindex: 1000;
  width: 60%;
  height: 90%;
`;

const StyledTable = styled.table`
  margin-top: 8rem;
  border: 2px solid ${theme.colors.primary};
  border-radius: 10px;
  border-collapse: collapse;
  width: 235px;
  height: 235px;
  margin-right: 25em;
  th,
  td {
    border: 1px solid ${theme.colors.primary};
    padding: 0.5rem;
    text-align: left;
  }
  th {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};
  }
  td {
    background-color: ${theme.colors.complementary2};
    color: ${theme.colors.dark};
  }
`;

export default function PieChartTotals() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ChartContainer>
      <Title>Device Totals</Title>
      <StyledChart chartType="PieChart" data={data} options={options} />
      <ExpandButton onClick={openModal}>
        <FaExpandAlt />
      </ExpandButton>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={ModalStyles}
        contentLabel="Expanded Pie Chart"
      >
        <ModalTitle>Device Totals</ModalTitle>
        <ModalPieBox>
          <StyledChartModal
            chartType="PieChart"
            data={data}
            options={modalOptions}
            width={"90%"} // adjust as needed
            height={"90%"} // adjust as needed
          />
          <StyledTable>
            <thead>
              <tr>
                <th>Device</th>
                <th>Totals</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(1).map((row, i) => (
                <tr key={i}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
          <ButtonContainer>
            <CloseButton onClick={() => setIsModalOpen(false)}>
              Close
            </CloseButton>
          </ButtonContainer>
        </ModalPieBox>
      </Modal>
    </ChartContainer>
  );
}
