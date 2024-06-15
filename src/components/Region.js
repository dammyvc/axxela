import React from 'react';

import { BarChart } from '@mui/x-charts/BarChart';

const lag = [85, 15, 20, 18];
const ph = [3, 2, 1, 0];
const abj = [1, 1, 0, 0];
const xLabels = ['Perm. employees', 'Temp. employees', 'New hires', 'Turnover'];

const Region = () => {
  return (
    <div className="w-full h-full pb-20 sm:pb-0 origin-[0px_0px] scale-[1.44837] md:scale-[1] sm:!scale-[0.45] justify-center">
      <BarChart
        width={711}
        height={300}
        series={[
          {
            data: lag,
            label: 'Lagos',
            id: 'lagId',
            stack: 'total',
            color: '#6cafc7',
          },
          {
            data: ph,
            label: 'Port Harcourt',
            id: 'phId',
            stack: 'total',
            color: '#f5d000',
          },
          {
            data: abj,
            label: 'Abuja',
            id: 'abjId',
            stack: 'total',
            color: '#76777a',
          },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
      />
    </div>
  );
};

export default Region;
