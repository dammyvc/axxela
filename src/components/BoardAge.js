import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  {
    label: 'Under 30 Years',
    value: 0,
    color: '#76777a',
  },
  { label: '30-50 years', value: 25, color: '#6cafc7' },
  { label: 'Over 50 years', value: 75, color: '#f5d000' },
];

const BoardAge = () => {
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

export default BoardAge;
