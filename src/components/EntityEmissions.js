import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const valueFormatter = (value) => `${value} kg unit`;

export default function EntityEmissions() {
  const gnl = [147701.78, 180247.07];
  const chgc = [36432.63, 35683.69];
  const gnsl = [238560.55, 282679.01];
  const hq = [93535.35, 97157.04];
  const tgnl = [154553.8, 109347.65];
  // const total = [670784.11, 705114.47];
  const xLabels = ['2022', '2023'];

  return (
    <div className="w-full h-full pb-20 origin-[0px_0px] scale-[1.44837] md:scale-[1] sm:!scale-[0.45] justify-center">
      <LineChart
        sx={{
          [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-10px, 0)',
            fill: '#000',
          },
          [`.${axisClasses.root}`]: {
            [`.${axisClasses.tick}, .${axisClasses.line}`]: {
              stroke: '#000',
            },
            strokeWidth: 1,
          },
          [`.${axisClasses.tickLabel}`]: {
            fontSize: 2,
            fill: '#000',
          },
        }}
        slotProps={{
          legend: {
            labelStyle: {
              fontSize: 10,
            },
          },
        }}
        width={711}
        height={300}
        grid={{ vertical: true, horizontal: true }}
        series={[
          {
            curve: 'natural',
            data: gnl,
            label: 'GNL',
            color: '#0b3356',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: chgc,
            label: 'CHGC',
            color: '#f5d000',
            valueFormatter,
          },

          {
            curve: 'natural',
            data: gnsl,
            label: 'GNSL',
            color: '#979799',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: hq,
            label: 'Head Office',
            color: '#c7d522',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: tgnl,
            label: 'TGNL',
            color: '#6cafc7',
            valueFormatter,
          },
          // {
          //   curve: 'natural',
          //   data: total,
          //   label: 'Total',
          //   color: '#6cafc7',
          //   valueFormatter,
          // },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        yAxis={[
          {
            tickLabelStyle: { fontSize: 9 },
          },
        ]}
      />
      <p className="text-base text-center italic dark:text-white scale-[1.5] w-full pt-10 hidden ml-[200px] sm:inline-block">
        The increase in staff strength and operational activities contributed to
        the overall increment.
      </p>
    </div>
  );
}
