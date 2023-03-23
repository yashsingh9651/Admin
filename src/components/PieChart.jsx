import React from 'react';
import { AreaChart, Area, XAxis,CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
export const PieChart = () => {
    const data = [
      { name: "January", Total: 1200 },
      { name: "February", Total: 2100 },
      { name: "March", Total: 800 },
      { name: "April", Total: 1600 },
      { name: "May", Total: 900 },
      { name: "June", Total: 1700 },
    ];
  return (
    <div className='md:w-4/6 p-3 hidden md:block dark:bg-slate-800 rounded-lg customShadow text-purple-600'>
        <ResponsiveContainer width="100%" height="100%" >
      <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top:10
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"/>
          <Tooltip />
          <Area type="monotone" dataKey="Total" stackId="1" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
  )
};
