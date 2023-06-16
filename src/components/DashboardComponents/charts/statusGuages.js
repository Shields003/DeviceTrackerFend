import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import styled from "@emotion/styled";

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


function getRandomNumber() {
  return Math.random() * 100;
}

function getData() {
  return [
    ["Label", "Value"],
    ["Compliant", getRandomNumber()],
    ["Out-of-Date", getRandomNumber()],
    ["Quarantined", getRandomNumber()],
  ];
}

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
      <StyledChart
        chartType="Gauge"
        width="600px"
        data={data}
        options={options}
      />
    </ChartContainer>
  );
}
