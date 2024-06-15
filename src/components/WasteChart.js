import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
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
      <BarChart
        slotProps={{
          legend: {
            labelStyle: {
              fontSize: 10,
            },
          },
        }}
        width={711}
        height={300}
        series={[
          {
            curve: 'natural',
            data: ewaste,
            label: 'E-waste',
            id: 'ewasteId',
            color: '#76777a',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: plastic,
            label: 'Plastic',
            id: 'plasticId',
            color: '#979799',
            valueFormatter,
          },

          {
            curve: 'natural',
            data: paper,
            label: 'Paper',
            id: 'paperId',
            color: '#f5d000',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: solid,
            label: 'Solid',
            id: 'solidId',
            color: '#0b3356',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: others,
            label: 'Others',
            id: 'othersId',
            color: '#c7d522',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: total,
            label: 'Total',
            id: 'totalId',
            color: '#6cafc7',
            valueFormatter,
          },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
        yAxis={[
          {
            tickLabelStyle: { fontSize: 9 },
            label: 'Weight in tons',
            labelStyle: { fontSize: 9 },
          },
        ]}
      />
    </div>
  );
}
