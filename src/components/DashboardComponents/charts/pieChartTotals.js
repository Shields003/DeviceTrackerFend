// PieChartTotals.js

import React from 'react';
import { Chart } from 'react-google-charts';
import { FaExpandAlt } from 'react-icons/fa';

const data = [
  ["Device", "Totals"],
  ["iPads", 24248],
  ["iPhones", 5715],
  ["iMacs", 1414],
  ["Mac Books", 477],
  ["Other", 152],
];

const options = {
  title: "Device Totals",
  is3D: true,
};

export default function PieChartTotals({ onOpenModal }) { // receive the onOpenModal prop
  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"450px"} // adjust as needed
        height={"310px"} // adjust as needed
      />
      <FaExpandAlt onClick={onOpenModal} style={{ cursor: 'pointer', margin: '1em'}} /> 
    </div>
  );
}