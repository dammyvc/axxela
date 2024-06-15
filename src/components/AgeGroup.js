import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const under30 = [6, 5];
const between30and50 = [14, 12];
const over50 = [1, 1];
const xLabels = ['New hires', 'Turnover'];

const AgeGroup = () => {
  return (
    <div className="w-full h-full pb-20 sm:pb-0 origin-[0px_0px] scale-[1.44837] md:scale-[1] sm:!scale-[0.45] justify-center">
      <BarChart
        width={711}
        height={300}
        series={[
          {
            data: under30,
            label: 'Under 30 years',
            id: 'under30Id',
            stack: 'total',
            color: '#6cafc7',
          },
          {
            data: between30and50,
            label: '30-50 years',
            id: 'between30and50Id',
            stack: 'total',
            color: '#f5d000',
          },
          {
            data: over50,
            label: 'Over 50 years',
            id: 'over50Id',
            stack: 'total',
            color: '#76777a',
          },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
      />
    </div>
  );
};

export default AgeGroup;
