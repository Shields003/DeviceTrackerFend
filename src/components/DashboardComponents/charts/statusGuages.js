import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import styled from "@emotion/styled";
import { FaExpandAlt } from "react-icons/fa";

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

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  height: 360px;
  width: 670px;
  position: relative;
  background-color: white;
  border-radius: 8px;
`;

const StyledChart = styled(Chart)`
  margin: 5px;
`;

const Title = styled.h2`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px 8px 0 0;
  padding: 4px;
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

//This is an arrow function that gets a random number between 0 and 100
const getRandomNumber = () => {
  return Math.random() * 100;
};
const getRandomNumber2 = () => {
  return Math.random() * 35;
};
const getRandomNumber3 = () => {
  return Math.random() * 25;
};

//This is a function that returns an array of arrays
const getData = () => {
  return [
    ["Label", "Value"],
    ["Compliant", getRandomNumber()],
    ["Out-of-Date", getRandomNumber2()],
    ["Quarantined", getRandomNumber3()],
  ];
};
const CompliantGauge = () => {
  const data = [
    ["Label", "Value"],
    ["Compliant", getRandomNumber()],
  ];

  return (
    <StyledChart
      chartType="Gauge"
      width="200px"
      data={data}
      options={options}
    />
  );
};

const OutOfDateGauge = () => {
  const data = [
    ["Label", "Value"],
    ["Out-of-Date", getRandomNumber2()],
  ];

  return (
    <StyledChart
      chartType="Gauge"
      width="200px"
      data={data}
      options={options}
    />
  );
};

const QuarantinedGauge = () => {
  const data = [
    ["Label", "Value"],
    ["Quarantined", getRandomNumber3()],
  ];

  return (
    <StyledChart
      chartType="Gauge"
      width="210px"
      data={data}
      options={options}
    />
  );
};

const options = {
  width: 600,
  height: 200,
  redFrom: 90,
  redTo: 100,
  yellowFrom: 75,
  yellowTo: 90,
  minorTicks: 5,
};

export default function Gauges() {
  const [data, setData] = useState(getData);

  useEffect(() => {
    const id = setInterval(() => {
      setData(getData());
    }, 3000);

    return () => {
      clearInterval(id);
    };
  });

  return (
    <ChartContainer>
      <Title>Device Status</Title>
      <ExpandButton>
        <FaExpandAlt />
      </ExpandButton>

      <CompliantGauge />
      <OutOfDateGauge />
      <QuarantinedGauge />
    </ChartContainer>
  );
}