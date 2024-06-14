import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const dataset = [
  {
    turnover: 167.64,
    retained: 22.88,
    year: '2023',
  },
  {
    turnover: 120.45,
    retained: 9.67,
    year: '2022',
  },
];

const chartSetting = {
  yAxis: [
    {
      label: "Value (₦'000 in billions)",
    },
  ],
  width: 711,
  height: 288,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
      fill: '#fff',
    },
    [`.${axisClasses.root}`]: {
      [`.${axisClasses.tick}, .${axisClasses.line}`]: {
        stroke: '#fff',
      },
      strokeWidth: 1,
    },
    [`.${axisClasses.tickLabel}`]: {
      fontSize: 10,
      fill: '#ffffff',
    },
  },
};

const valueFormatter = (value) => `₦${value}B`;

const EconomicImpactBar = () => {
  return (
    <div className="w-full h-full pb-20 origin-[0px_0px] scale-[1.44837] md:scale-[1] sm:!scale-[0.45]">
      <BarChart
        dataset={dataset}
        slotProps={{
          legend: {
            labelStyle: {
              fontSize: 10,
              fill: '#fff',
            },
          },
        }}
        xAxis={[
          {
            scaleType: 'band',
            dataKey: 'year',
          },
        ]}
        series={[
          {
            dataKey: 'turnover',
            label: 'Turnover',
            color: '#c7d522',
            valueFormatter,
          },
          {
            dataKey: 'retained',
            label: 'Retained in business',
            color: '#0b3356',
            valueFormatter,
          },
        ]}
        {...chartSetting}
      />
    </div>
  );
};

export default EconomicImpactBar;
