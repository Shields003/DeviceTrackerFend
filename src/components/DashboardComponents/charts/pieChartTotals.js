import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { FaExpandAlt } from "react-icons/fa";
import styled from "@emotion/styled";
import Modal from "react-modal";
import { left } from "@popperjs/core";

Modal.setAppElement("#root"); // This line is needed for accessibility reasons

const theme = {
  colors: {
    primary: "#284b63", // primary color (blue)
    complementary1: "#3c6e71", // complementary color 1 (dark blue/green)
    complementary2: "#d9d9d9", // complementary color 2 (gray)
    accent: "#1985a1", // accent color (blue/green)
    accent2: "#fca311", // accent color 2 (orange)
    dark: "#353535", // dark color (dark gray)
    text: "#ffffff", // text color (white)
    alert: "#eb5e28", // alert color (orange/red)
  },
};

//Styled components
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
const StyledChartModal = styled(Chart)`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  zindex: 1000;
`;

const Title = styled.h2`
  margin-top: -20px;
  padding: 0;
  text-align: center;
  margin-bottom: -3rem;
`;
const ModalTitle = styled.h2`
  margin-top: 10px;
  padding: 0;
  text-align: center;
  font-size: 36px;
`;

const ExpandButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${theme.colors.accent2}; 
  font-size: 1.5rem;
  zIndex: 5;
  &:hover {
    color: ${theme.colors.alert};
`;

const CloseButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
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

const ModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "20%",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "60%", // adjust as needed
    height: "60%", // adjust as needed
    padding: "0", // add this line
    margin: "0", // add this line
    zIndex: "1000",
    overflow: "hidden",
    border: "4px solid #284b63",
    borderRadius: "8px",
  },
};

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
    left: "10%", // adjust as needed
    top: "10%", // adjust as needed
    width: "80%", // adjust as needed
    height: "80%", // adjust as needed
    zIndex: "1000",
  },
};

const modalOptions = {
  title: "",
  is3D: true,
  chartArea: {
    left: "35%", // adjust as needed
    top: "10%", // adjust as needed
    width: "90%", // adjust as needed
    height: "90%", // adjust as needed
    zIndex: "1000",
  },
};

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

        <StyledChartModal
          chartType="PieChart"
          data={data}
          options={modalOptions}
          width={"90%"} // adjust as needed
          height={"90%"} // adjust as needed
        />
        <ButtonContainer>
          <CloseButton onClick={() => setIsModalOpen(false)}>Close</CloseButton>
        </ButtonContainer>
      </Modal>
    </ChartContainer>
  );
}
