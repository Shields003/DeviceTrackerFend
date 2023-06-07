import React from 'react';
import { LineChart as RechartsLineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { month: 'Jan', value: 100 },
  { month: 'Feb', value: 200 },
  { month: 'Mar', value: 300 },
  // Add more sample data as needed
];

const LineChart = () => {
  return (
    <div className="line-chart">
      <h2>Month-to-Month Growth</h2>
      <RechartsLineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </RechartsLineChart>
    </div>
  );
};

export default LineChart;
