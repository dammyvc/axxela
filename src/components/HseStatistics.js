import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const valueFormatter = (value) => `${value} dBA`;

const HseStatistics = () => {
  const gnl = [56, 57, 56, 60];
  const gnsl = [56, 53, 55, 54];
  const chgc = [53, 57, 56, 50];
  const tgnl = [0, 0, 0, 52];
  const xLabels = ['2020', '2021', '2022', '2023'];

  return (
    <div className="w-full h-full pb-20 sm:pb-0 origin-[0px_0px] scale-[1.44837] md:scale-[1] sm:!scale-[0.45] justify-center">
      <BarChart
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
        series={[
          {
            data: gnl,
            label: 'GNL',
            id: 'gnlId',
            color: '#6cafc7',
            valueFormatter,
          },
          {
            data: gnsl,
            label: 'GNSL',
            id: 'gnslId',
            color: '#0b3356',
            valueFormatter,
          },
          {
            data: chgc,
            label: 'CHGC',
            id: 'chgcId',
            color: '#f5d000',
            valueFormatter,
          },
          {
            data: tgnl,
            label: 'TGNL',
            id: 'tgnlId',
            color: '#76777a',
            valueFormatter,
          },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
        yAxis={[
          {
            tickLabelStyle: { fontSize: 9 },
            label: 'Average Noise Levels (dBA)',
            labelStyle: { fontSize: 9 },
          },
        ]}
      />
    </div>
  );
};

export default HseStatistics;
