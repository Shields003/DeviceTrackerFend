// PieChartTotals.js

import React from 'react';
import { Chart } from 'react-google-charts';
import { FaExpandAlt } from 'react-icons/fa';
import styled from "@emotion/styled";

const theme = {
  colors: {
    primary: "#284b63",
    complementary1: "#3c6e71",
    complementary2: "#d9d9d9",
    accent: "#1985a1",
    dark: "#353535",
    text: "#ffffff",
    alert: "#eb5e28",
  },
};

//Styled components

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 360px; 
  width: 500px; 
  position: relative;
`;

const StyledChart = styled(Chart)`
  position: absolute;
`;

const Title = styled.h2`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px 8px 0 0;
  padding: 10px;
  z-index: 2;
`;

const data = [
  ["Device", "Totals"],
  ["iPads", 24248],
  ["iPhones", 5715],
  ["iMacs", 1414],
  ["Mac Books", 477],
  ["Other", 152],
];

const options = {
  title: "",
  is3D: true,
};

export default function PieChartTotals({ onOpenModal }) { // receive the onOpenModal prop
  return (
    <ChartContainer>
      <Title>Device Totals</Title>
      <StyledChart
        chartType="PieChart"
        data={data}
        options={options}
        width={"450px"} // adjust as needed
        height={"308px"} // adjust as needed
      />
      <FaExpandAlt onClick={onOpenModal} style={{ cursor: 'pointer', margin: '1em'}} /> 
    </ChartContainer>
  );
}