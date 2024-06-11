import { Card } from '@material-tailwind/react';

const TABLE_HEAD = ['Description', "₦'000"];

const TABLE_ROWS = [
  {
    name: 'Turnover',
    job: '167,644,988',
  },
  {
    name: 'Providers of capital',
    job: '5,458,644',
  },
  {
    name: 'Interest received',
    job: '1,670,674',
  },
  {
    name: 'Government',
    job: '7,109,276',
  },
  {
    name: 'Other income',
    job: '34,955,333',
  },
  {
    name: 'Non-controlling interest',
    job: '2,241,197',
  },
  {
    name: 'Local purchases',
    job: '157,127,655',
  },
  {
    name: 'Maintenance & expansion of assets',
    job: '1,901,284',
  },
  {
    name: 'Employees',
    job: '7,557,060',
  },
  {
    name: 'Retained in business',
    job: '22,875,878',
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

export function EconomicImpactsTable() {
  return (
    <Card className="h-full w-full overflow-scroll shadow dark:shadow-white dark:bg-dark">
      <table className="w-full min-w-max table-auto text-left border-solid border-0 border-black">
        <thead className="bg-vision">
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
          {TABLE_ROWS.map(({ name, job }, index) => (
            <tr
              key={name}
              className="even:bg-[rgba(108,175,199,0.5)] text-partnership dark:text-light"
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
