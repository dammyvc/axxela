import { Card } from '@material-tailwind/react';

const RENEWABLE_HEAD = ['Element', 'Joules', ''];

const RENEWABLE_ROWS = [
  {
    name: '',
    year: '',
    number: '',
  },
  {
    name: 'Turnover',
    year: '2023',
    number: '167,644,988',
  },
  {
    year: '2022',
    name: 'Turnover',
    number: '167,644,988',
  },
];

const TABLE_DATA = [
  {
    name: 'Revenues from third-party sales',
    job: '120,448,699,979.00',
  },
  {
    name: 'Profit/loss before tax',
    job: '13,262,802,576.00',
  },
  {
    name: 'Tangible assets other than cash and cash equivalents',
    job: '83,628,201,557.00',
  },
  {
    name: 'Corporate income tax paid on a cash basis',
    job: '3,744,376,820.62',
  },
];

export function RenewableConsumptionTable() {
  return (
    <Card className="h-full w-full overflow-scroll shadow dark:shadow-white dark:bg-dark">
      <table className="w-full min-w-max table-auto text-left border-solid border-0 border-black text-partnership dark:text-light">
        <thead className="bg-vision">
          <tr>
            <th className="border-b border-gray-100 bg-blue-gray-50 p-4">
              Element
            </th>
            <th
              className="border-b border-gray-100 bg-blue-gray-50 p-4 text-center"
              colSpan="2"
            >
              Joules
            </th>
          </tr>
          <tr className="text-center">
            <th className="border-b border-gray-100 bg-grey1 p-4"></th>
            <th className="border-b border-gray-100 bg-blue-gray-50 p-4 bg-sustainable">
              2023
            </th>
            <th className="border-b border-gray-100 bg-blue-gray-50 p-4 bg-sustainable border-l-2">
              2022
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b border-gray-100 bg-blue-gray-50 p-4">
              Solar
            </td>
            <td className="border-b border-gray-100 bg-blue-gray-50 p-4 text-center border-l-2">
              355,962,600,000
            </td>
            <td className="border-b border-gray-100 bg-blue-gray-50 p-4 text-center border-l-2">
              667,807,200
            </td>
          </tr>

          <tr className="font-bold">
            <td className="border-b border-gray-100 bg-slate-100 dark:bg-dark p-4">
              Total
            </td>
            <td className="border-b border-gray-100 bg-slate-100 dark:bg-dark p-4 text-center border-l-2">
              355,962,600,000
            </td>
            <td className="border-b border-gray-100 bg-slate-100 dark:bg-dark p-4 text-center border-l-2">
              667,807,200
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-xs text-center italic dark:text-white">
        The increase in energy consumption is attributed to our implementation
        of full accounting for renewable energy sources in 2023, considering
        that the recorded energy usage for 2022 was not for the full year.
      </p>
    </Card>
  );
}

export function TaxTransparencyTable() {
  return (
    <Card className="h-full w-full overflow-scroll shadow dark:shadow-white dark:bg-dark">
      <table className="w-full min-w-max table-auto text-left border-solid border-0 border-black">
        <thead className="bg-growth">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-gray-100 bg-blue-gray-50 p-4"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_DATA.map(({ name, job }, index) => (
            <tr
              key={name}
              className="even:bg-[rgba(245,208,0,0.5)] text-partnership dark:text-light"
            >
              <td className="p-4">{name}</td>
              <td className="p-4">{job}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
