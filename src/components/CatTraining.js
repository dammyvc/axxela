import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const perm = [45];
const temp = [16];
const xLabels = ['Employee Category'];

const valueFormatter = (value) => `${value} hours`;

const CatTraining = () => {
  return (
    <div className="w-full h-full pb-20 sm:pb-0 origin-[0px_0px] scale-[1.44837] md:scale-[1] sm:!scale-[0.45] justify-center">
      <BarChart
        width={711}
        height={300}
        series={[
          {
            data: perm,
            label: 'Permanent employees',
            id: 'permId',
            color: '#6cafc7',
            valueFormatter,
          },
          {
            data: temp,
            label: 'Third-Party contractors',
            id: 'tempId',
            color: '#f5d000',
            valueFormatter,
          },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
        yAxis={[
          {
            label: 'Hours per employee',
            tickLabelStyle: { fontSize: 9 },
            labelStyle: { fontSize: 9 },
          },
        ]}
      />
    </div>
  );
};

export default CatTraining;
