import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const valueFormatter = (value) => `${value} tCO2e`;

export default function DirectemssionsLine() {
  const gas = [513.78, 106.74, 118.21];
  const diesel = [422.25, 420.93, 431.66];
  const petrol = [67.65, 47.61, 54.25];
  const total = [1003.69, 574.65, 604.13];
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
            data: gas,
            label: 'Gas',
            color: '#0b3356',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: diesel,
            label: 'Diesel',
            color: '#f5d000',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: petrol,
            label: 'Petrol',
            color: '#c7d522',
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
