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
    accent2: "#fca311", // accent color 2 (orange)
    dark: "#353535", // dark color (dark gray)
    text: "#ffffff", // text color (white)
    alert: "#eb5e28", // alert color (orange/red)
  },
};

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 360px;
  width: 670px;
  position: relative;
  background-color: #fff;
  border-radius: 8px;
`;

const StyledChart = styled(Chart)`
  position: absolute;
  margin-top: 1.2em;
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

//This is a function that returns an array of arrays
const getData = () => {
  return [
    ["Label", "Value"],
    ["Compliant", getRandomNumber()],
    ["Out-of-Date", getRandomNumber()],
    ["Quarantined", getRandomNumber()],
  ];
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
      <StyledChart
        chartType="Gauge"
        width="600px"
        data={data}
        options={options}
      />
      {/* <ButtonContainer>
        <CloseButton>Close</CloseButton>
      </ButtonContainer> */}
    </ChartContainer>
  );
}
