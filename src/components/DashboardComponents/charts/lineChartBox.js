import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', growth: 10 },
  { month: 'Feb', growth: 20 },
  { month: 'Mar', growth: 30 },
  { month: 'Apr', growth: 25 },
  { month: 'May', growth: 35 },
  { month: 'Jun', growth: 45 },
];

function LineChartBox() {
  return (
    <div>
      <h3>Month-to-Month Growth</h3>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="growth" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
}

export default LineChartBox;
