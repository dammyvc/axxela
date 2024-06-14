import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const valueFormatter = (value) => `${value}(GJ)`;

export default function RenewableChart() {
  const solar = [0.668, 355.963];
  const xLabels = ['2022', '2023'];

  return (
    <div className="w-full h-full pb-20 origin-[0px_0px] scale-[1.44837] md:scale-[1] sm:!scale-[0.45] justify-center">
      <LineChart
        sx={{
          [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-10px, 0)',
            fill: '#000',
          },
          [`.${axisClasses.root}`]: {
            [`.${axisClasses.tick}, .${axisClasses.line}`]: {
              stroke: '#000',
            },
            strokeWidth: 1,
          },
          [`.${axisClasses.tickLabel}`]: {
            fontSize: 2,
            fill: '#000',
          },
        }}
        slotProps={{
          legend: {
            labelStyle: {
              fontSize: 10,
              fill: '#000',
            },
          },
        }}
        width={711}
        height={300}
        grid={{ vertical: true, horizontal: true }}
        series={[
          {
            curve: 'natural',
            data: solar,
            label: 'Solar',
            color: '#6cafc7',
            valueFormatter,
          },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        yAxis={[
          {
            tickLabelStyle: { fontSize: 9 },
            label: 'Value in Gigajoules (GJ)',
            labelStyle: { fontSize: 9 },
          },
        ]}
      />
    </div>
  );
}
