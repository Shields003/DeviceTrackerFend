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

const StyledChart = styled(Chart)`
  width: 90%;
  height: 90%;
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
  background-color: pink;
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

const StyledChartModal = styled(Chart)`
  display: flex;
  align-items: center;
  justify-content: center;
  zindex: 1000;
  width: 60%;
  height: 90%;
  min-width: 300px; 
  min-height: 300px; 
`;

const ModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "80%", // increased to 80%
    height: "50%", // increased to 80%
    minWidth: "400px", // minimum width
    minHeight: "400px", // minimum height
    maxWidth: "1200px", // maximum width
    maxHeight: "800px", // maximum height
    zIndex: "1000",
    overflow: "auto", // changed to auto to allow scrolling if content overflows
    border: "4px solid #284b63",
    borderRadius: "10px",
  },
};

const ModalTitle = styled.h2`
  margin: 5px;
  padding: 0;
  text-align: center;
  font-size: 36px;
  color: ${theme.colors.primary};
`;

const ModalLineBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: auto;
  height: 500px;
  padding: 0 20px; 
`;

const StyledTable = styled.table`
  margin-top: 8rem;
  border: 2px solid ${theme.colors.primary};
  border-radius: 10px;
  border-collapse: collapse;
  width: 235px;
  height: 235px;
  margin-right: 5em;
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

export default function UnitComplianceLineChart() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chartKey, setChartKey] = useState(0); // key for non-modal chart
  const [modalChartKey, setModalChartKey] = useState(0); // key for modal chart

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalChartKey((prevKey) => prevKey + 1); 
    setModalChartKey((prevKey) => prevKey + 1); // increment the modal chart key to force a re-render
    setChartKey((prevKey) => prevKey + 1); // increment the non-modal chart key to force a re-render
  };

  return (
    <ChartContainer>
      <Title>Unit Compliance</Title>
      <StyledChart
        key={chartKey} // use the non-modal chart key here
        chartType="LineChart"
        data={data}
        options={options}
      />
      <ExpandButton onClick={openModal}>
        <FaExpandAlt />
      </ExpandButton>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={ModalStyles}
        contentLabel="Expanded Line Chart"
      >
        <ModalTitle>Unit Compliance</ModalTitle>
        <ModalLineBox>
          <StyledChartModal
            key={modalChartKey} // use the modal chart key here
            chartType="LineChart"
            data={data}
            options={options}
            width={"1000px"} // adjust as needed
            height={"615px"} // adjust as needed
          />
          <StyledTable>
            <thead>
              <tr>
                <th>Interval</th>
                <th>Value</th>
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
          <CloseButton onClick={closeModal}>Close</CloseButton>
        </ModalLineBox>
      </Modal>
    </ChartContainer>
  );
}
