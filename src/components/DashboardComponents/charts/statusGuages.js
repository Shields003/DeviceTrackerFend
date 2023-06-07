import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import styled from "@emotion/styled";

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 360px; // Adjust as needed
  width: 670px; // Adjust as needed
  position: relative;
`;

const StyledChart = styled(Chart)`
  position: absolute;
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
  width: 600,  // Increase as desired
  height: 200,  // Increase as desired
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
      <StyledChart
        chartType="Gauge"
        width="600px"
     //    height="3000px"  
        data={data}
        options={options}
      />
    </ChartContainer>
  );
}
