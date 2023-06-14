import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import styled from "@emotion/styled";

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 360px; 
  width: 670px; 
  position: relative;
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
  padding: 10px;
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
