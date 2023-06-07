import React from "react";
import { Chart } from "react-google-charts";

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
  title: "Compliance by Unit",
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
};

export default function LineChartUnitCompliance() {
  return (
    <Chart
      chartType="LineChart"
      width={"450px"}
      height={"360px"}
      data={data}
      options={options}
    />
  );
}
