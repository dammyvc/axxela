import React from 'react';

import { LineChart } from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const GasLeaks = () => {
  const gas = [3, 4, 3, 2];
  const xLabels = ['2020', '2021', '2022', '2023'];

  return (
    <div className="w-full h-full pb-20 sm:pb-0 origin-[0px_0px] scale-[1.44837] md:scale-[1] sm:!scale-[0.45] justify-center">
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
            data: gas,
            label: 'Gas Leaks',
            color: '#6cafc7',
          },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        yAxis={[
          {
            tickLabelStyle: { fontSize: 9 },
            label: 'Number of Gas Leaks',
            labelStyle: { fontSize: 9 },
          },
        ]}
      />
    </div>
  );
};

export default GasLeaks;
