import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const valueFormatter = (value) => `${value}(GJ)`;
export default function ConsumptionChart() {
  const electricity = [685, 92, 208];
  const energyIn = [3783, 3202, 2645];
  const energyOut = [911, 641, 731];
  const xLabels = ['2021', '2022', '2023'];

  return (
    <div className="w-full h-full pb-20 origin-[0px_0px] scale-[1.44837] md:scale-[1] sm:!scale-[0.45] justify-center">
      <LineChart
        sx={{
          [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-13px, 0)',
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
            data: electricity,
            label: 'Electricity Consumption',
            color: '#0b3356',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: energyIn,
            label: 'Energy Consumption within Organisation',
            color: '#f5d000',
            valueFormatter,
          },
          {
            curve: 'natural',
            data: energyOut,
            label: '*Energy Consumption outside Organisation',
            color: '#c7d522',
            valueFormatter,
          },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        yAxis={[
          {
            tickLabelStyle: { fontSize: 9 },
            label: 'Value in Gigajoules (GJ)',
            labelStyle: { fontSize: 9 },
          },
        ]}
        grid={{ vertical: true, horizontal: true }}
      />
    </div>
  );
}
