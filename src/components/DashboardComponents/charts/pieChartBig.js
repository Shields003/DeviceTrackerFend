// PieChartTotals.js

import React from "react";
import { Chart } from "react-google-charts";
import { FaExpandAlt } from "react-icons/fa";
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
  align-items: center;
  height: 100%; // adjust as needed
  width: 100%; // adjust as needed
  position: relative;
  background-color: transparent;
`;

const StyledChart = styled(Chart)`
  height: 100%; // adjust as needed
  width: 100%; // adjust as needed
`;

const Title = styled.h2`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px 8px 0 0;
  padding-top: 10px;
  padding-bottom: 100px;
  z-index: 2;
`;

const ExpandButton = styled(FaExpandAlt)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2em; // adjust as needed
  cursor: pointer;
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
};

export default function PieChartTotals({ onOpenModal }) {
  // receive the onOpenModal prop
  return (
    <ChartContainer>
      <Title>Device Totals</Title>
      <StyledChart
        chartType="PieChart"
        data={data}
        options={options}
      />
      <ExpandButton onClick={onOpenModal} />
    </ChartContainer>
  );
}
