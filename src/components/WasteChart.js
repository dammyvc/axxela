import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const valueFormatter = (value) => `${value} tons`;

export default function WasteChart() {
  const ewaste = [0.551, 0, 0];
  const plastic = [0, 0.501, 1.003];
  const paper = [0.085, 0.104, 0.186];
  const solid = [0.212, 1.002, 1.053];
  const others = [0.116, 0.158, 0.099];
  const total = [0.965, 1.765, 2.341];
  const xLabels = ['2021', '2022', '2023'];

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
            },
          },
        }}
        width={711}
        height={300}
        grid={{ vertical: true, horizontal: true }}
        series={[
          {
            curve: 'natural',
            data: ewaste,
            label: 'E-waste',
            color: '#0b3356',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: plastic,
            label: 'Plastic',
            color: '#979799',
            valueFormatter,
          },

          {
            curve: 'natural',
            data: paper,
            label: 'Paper',
            color: '#f5d000',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: solid,
            label: 'Solid',
            color: '#76777a',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: others,
            label: 'Others',
            color: '#6cafc7',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: total,
            label: 'Total',
            color: '#c7d522',
            valueFormatter,
          },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        yAxis={[
          {
            tickLabelStyle: { fontSize: 9 },
          },
        ]}
      />
    </div>
  );
}
