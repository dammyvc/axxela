import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function SimpleLineChart() {
  const gas = [0.68, 0.092, 0.208];
  const diesel = [3.783, 3.202, 2.645];
  const petrol = [0.911, 0.641, 0.731];
  const total = [5.379, 3.936, 3.584];
  const xLabels = ['2021', '2022', '2023'];

  return (
    <LineChart
      width={500}
      height={300}
      grid={{ vertical: true, horizontal: true }}
      series={[
        { data: gas, label: 'Gas (TJ)' },
        { data: diesel, label: 'Diesel (TJ)' },
        { data: petrol, label: 'Petrol (TJ)' },
        { data: total, label: 'Total (TJ)' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}
