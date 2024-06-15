import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const male = [78, 61, 17, 15, 12];
const female = [29, 28, 1, 6, 6];
const xLabels = [
  'Total employees',
  'Perm. employees',
  'Temp. employees',
  'New hires',
  'Turnover',
];

const GenderDemograph = () => {
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
            stack: 'total',
            color: '#6cafc7',
          },
          {
            data: female,
            label: 'Female',
            id: 'femaleId',
            stack: 'total',
            color: '#f5d000',
          },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
      />
    </div>
  );
};

export default GenderDemograph;
