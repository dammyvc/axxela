import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const valueFormatter = (value) => `${value} tCO2e`;

export default function IndirectemssionsLine() {
  const gnl = [32.47, 31.32, 32.1];
  const chgc = [9.98, 3.44, 3.95];
  const hq = [90.43, 55.73, 60.92];
  const tgnl = [6.76, 5.64, 4.02];
  const total = [139.63, 96.13, 100.99];
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
            data: gnl,
            label: 'GNL',
            color: '#0b3356',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: chgc,
            label: 'CHGC',
            color: '#f5d000',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: hq,
            label: 'Head Office',
            color: '#c7d522',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: tgnl,
            label: 'TGNL',
            color: '#76777a',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: total,
            label: 'Total',
            color: '#6cafc7',
            valueFormatter,
          },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        yAxis={[
          {
            tickLabelStyle: { fontSize: 9 },
            label: 'Value in tCO2e',
            labelStyle: { fontSize: 9 },
          },
        ]}
        grid={{ vertical: true, horizontal: true }}
      />
    </div>
  );
}
