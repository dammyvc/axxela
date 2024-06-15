import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  {
    label: 'Male',
    value: 87,
    color: '#6cafc7',
  },
  { label: 'Female', value: 13, color: '#f5d000' },
];

const BoardGender = () => {
  return (
    <div className="w-full h-full pb-20 sm:pb-0 origin-[0px_0px] scale-[1.44837] md:scale-[1] sm:!scale-[0.45] justify-center ">
      <PieChart
        width={711}
        height={300}
        series={[
          {
            data: data,
            innerRadius: 40,
            outerRadius: 80,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -180,
            endAngle: 180,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        slotProps={{
          legend: { hidden: false },
        }}
      />
    </div>
  );
};

export default BoardGender;
