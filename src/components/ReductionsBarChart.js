import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const gasConsumed = [561.6, 74.47, 125.03, 8.13, 62.83];
const naturalGas = [1083.89, 143.73, 241.31, 15.69, 121.26];
const displacedFuel = [1553.83, 206.02, 352.81, 22.52, 174.03];
const displacedEmission = [469.94, 62.29, 111.5, 6.83, 52.77];
const xLabels = ['GNL', 'CHGC', 'CEET', 'GNSL', 'TGNL'];

const valueFormatter = (value) => `${value} CO2 Gg`;
const ReductionsBarChart = () => {
  return (
    <div className="w-full h-full pb-20 origin-[0px_0px] scale-[1.44837] md:scale-[1] sm:!scale-[0.45]">
      <BarChart
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
            fontSize: 10,
            fill: '#000',
          },
        }}
        slotProps={{
          legend: {
            labelStyle: {
              fontSize: 10,
              fill: '#000',
            },
          },
        }}
        width={711}
        height={288}
        series={[
          {
            data: gasConsumed,
            label: 'Gas Consumed',
            id: 'gasConsumedId',
            color: '#6cafc7',
            valueFormatter,
          },
          {
            data: naturalGas,
            label: 'Natural Gas',
            id: 'naturalGasId',
            color: '#0b3356',
            valueFormatter,
          },
          {
            data: displacedFuel,
            label: 'Displaced Fuels',
            id: 'displacedFuelId',
            color: '#c7d522',
            valueFormatter,
          },
          {
            data: displacedEmission,
            label: 'Displaced CO2 Emissions',
            id: 'displacedEmissionId',
            color: '#76777a',
            valueFormatter,
          },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
        yAxis={[
          {
            label: 'Value in CO2e Gigagrams (Gg)',
            tickLabelStyle: { fontSize: 9 },
            labelStyle: { fontSize: 9 },
          },
        ]}
      />
    </div>
  );
};

export default ReductionsBarChart;
