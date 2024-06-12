import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const dataset = [
  {
    revenue: 120.45,
    profit: 13.26,
    assets: 83.63,
    incomeTax: 3.74,
    year: '2023',
  },
  {
    revenue: 106.58,
    profit: 13.08,
    assets: 66.96,
    incomeTax: 3.74,
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

const TaxBar = () => {
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
            dataKey: 'revenue',
            label: 'Revenues from third-party sales',
            color: '#f5d000',
            valueFormatter,
          },
          {
            dataKey: 'profit',
            label: 'Profit/loss before tax',
            color: '#0b3356',
            valueFormatter,
          },
          {
            dataKey: 'assets',
            label: 'Tangible assets other than cash and cash equivalents',
            color: '#c7d522',
            valueFormatter,
          },
          {
            dataKey: 'incomeTax',
            label: 'Corporate income tax paid on a cash basis',
            color: '#6cafc7',
            valueFormatter,
          },
        ]}
        {...chartSetting}
      />
    </div>
  );
};

export default TaxBar;
