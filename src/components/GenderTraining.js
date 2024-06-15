import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const male = [33];
const female = [59];
const xLabels = ['Gender'];

const valueFormatter = (value) => `${value} hours`;

const GenderTraining = () => {
  return (
    <div className="w-full h-full pb-20 sm:pb-0 origin-[0px_0px] scale-[1.44837] md:scale-[1] sm:!scale-[0.45] justify-center">
      <BarChart
        width={711}
        height={300}
        series={[
          {
            data: male,
            label: 'Male',
            id: 'maleId',
            color: '#6cafc7',
            valueFormatter,
          },
          {
            data: female,
            label: 'Female',
            id: 'femaleId',
            color: '#f5d000',
            valueFormatter,
          },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
        yAxis={[
          {
            label: 'Hours',
            tickLabelStyle: { fontSize: 9 },
            labelStyle: { fontSize: 9 },
          },
        ]}
      />
    </div>
  );
};

export default GenderTraining;
