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
  justify-content: center;
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  width: 400px;
  height: 360px;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const StyledChart = styled(Chart)`
  width: 90%;
  height: 90%;
  margin-left: -14px;
`;

const Title = styled.h2`
  text-align: center;
  position: relative;
  margin-top: -14px;
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
  color: ${theme.colors.primary}; // change the color to make the button visible
  font-size: 1.5rem;
  zIndex: 5;
  &:hover {
    color: ${theme.colors.accent2};
  }
  &:active {
    color: ${theme.colors.alert};
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  zindex: 1000;
`;

const StyledChartModal = styled(Chart)`
  display: flex;
  align-items: center;
  justify-content: center;
  zindex: 1000;
`;

const ModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "50%", // adjust as needed
    height: "50%", // adjust as needed
    zIndex: "1000",
    overflow: "hidden",
    border: "4px solid #284b63",
    borderRadius: "10px",
  },
};

const ModalTitle = styled.h2`
  margin: 5px;
  padding: 0;
  text-align: center;
  font-size: 36px;
`;

const data = [
  [
    { type: "number", label: "x" },
    { type: "number", label: "values" },
    { id: "i55Wing", type: "number", role: "interval" },
    { id: "i38RS", type: "number", role: "interval" },
    { id: "i45RS", type: "number", role: "interval" },
    { id: "55 ISS", type: "number", role: "interval" },
    { id: "55 OSS", type: "number", role: "interval" },
    { id: "97 IS", type: "number", role: "interval" },
  ],
  [1, 100, 90, 110, 85, 96, 104, 120],
  [2, 120, 95, 130, 90, 113, 124, 140],
  [3, 130, 105, 140, 100, 117, 133, 139],
  [4, 90, 85, 95, 85, 88, 92, 95],
  [5, 70, 74, 63, 67, 69, 70, 72],
  [6, 30, 39, 22, 21, 28, 34, 40],
];

const options = {
  title: "",
  curveType: "function",
  lineWidth: 4,
  intervals: { style: "line" },
  legend: "none",
  // Difference here only with line intervals
  interval: {
    i55Wing: { style: "line", color: "#D3362D", lineWidth: 2 },
    i38RS: { style: "line", color: "#F1CA3A", lineWidth: 2 },
    i45RS: { style: "line", color: "#5F9654", lineWidth: 2 },
    i55ISS: { style: "line", color: "#c847d6", lineWidth: 2 },
    i55OSS: { style: "line", color: "#eb8d09", lineWidth: 2 },
    i97IS: { style: "line", color: "#0342ff", lineWidth: 2 },
  },
  vAxis: { viewWindow: { min: 0, max: 160 } },
};

export default function LineChartUnitCompliance() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chartKey, setChartKey] = useState(0); // new state for the chart key

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setChartKey((prevKey) => prevKey + 1); // increment the chart key to force a re-render
  };

  return (
    <ChartContainer>
      <Container>
        <Title>Unit Compliance</Title>
        <ChartWrapper>
          <StyledChart
            key={chartKey} // add the key here
            chartType="LineChart"
            width={"90%"}
            height={"90%"}
            data={data}
            options={options}
          />
        </ChartWrapper>
        <ExpandButton onClick={openModal}>
          <FaExpandAlt />
        </ExpandButton>
      </Container>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={ModalStyles}
        contentLabel="Expanded Line Chart"
      >
        <ModalTitle>Unit Compliance</ModalTitle>
        <StyledChartModal
          chartType="LineChart"
          data={data}
          options={options}
          width={"100%"}
          height={"100%"}
        />
        <CloseButton onClick={closeModal}>Close</CloseButton>
      </Modal>
    </ChartContainer>
  );
}
