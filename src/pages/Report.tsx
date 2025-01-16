import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Select,
  Option,
  Input,
} from "@material-tailwind/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const FinancialReport = () => {
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });

  // Sample data - replace with real data
  const data = [
    { name: "Jan", income: 4000, expense: 2400, balance: 1600 },
    { name: "Feb", income: 3000, expense: 1398, balance: 1602 },
    { name: "Mar", income: 2000, expense: 9800, balance: -7800 },
    { name: "Apr", income: 2780, expense: 3908, balance: -1128 },
    { name: "May", income: 1890, expense: 4800, balance: -2910 },
    { name: "Jun", income: 2390, expense: 3800, balance: -1410 },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header and Filters */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8 bg-white p-4 rounded-lg shadow-md">
        <Typography variant="h3" className="text-2xl font-bold md:w-1/4">
          Financial Report
        </Typography>

        <div className="flex flex-wrap gap-4 md:w-3/4">
          <Select
            containerProps={{ className: "w-full md:w-48" }}
            label="Select Account"
            className="w-full"
          >
            <Option value="cash">Cash</Option>
            <Option value="bank">Bank Account</Option>
            <Option value="savings">Savings</Option>
          </Select>

          <div className="flex gap-4 flex-wrap">
            <Input
              type="date"
              label="Start Date"
              value={dateRange.startDate}
              onChange={(e) =>
                setDateRange((prev) => ({ ...prev, startDate: e.target.value }))
              }
              containerProps={{ className: "w-full md:w-40" }}
              className="w-full"
            />
            <Input
              type="date"
              label="End Date"
              value={dateRange.endDate}
              onChange={(e) =>
                setDateRange((prev) => ({ ...prev, endDate: e.target.value }))
              }
              containerProps={{ className: "w-full md:w-40" }}
              className="w-full"
            />
          </div>

          <Select
            containerProps={{ className: "w-full md:w-48" }}
            label="Transaction Type"
            className="w-full"
          >
            <Option value="all">All Transactions</Option>
            <Option value="income">Income Only</Option>
            <Option value="expense">Expense Only</Option>
            <Option value="transfer">Transfers Only</Option>
          </Select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <Card>
          <CardBody>
            <div className="flex justify-between">
              <Typography variant="small" color="blue-gray">
                Total Balance
              </Typography>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12zm0-9a1 1 0 011 1v4a1 1 0 11-2 0V8a1 1 0 011-1z" />
              </svg>
            </div>
            <Typography variant="h4" color="blue-gray" className="mt-2">
              $12,345
            </Typography>
            <Typography variant="small" className="text-gray-500">
              +20.1% from last month
            </Typography>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="flex justify-between">
              <Typography variant="small" color="blue-gray">
                Total Income
              </Typography>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <Typography variant="h4" className="mt-2 text-green-500">
              $48,273
            </Typography>
            <Typography variant="small" className="text-gray-500">
              +15% from last month
            </Typography>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="flex justify-between">
              <Typography variant="small" color="blue-gray">
                Total Expenses
              </Typography>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 13a1 1 0 110 2H7a1 1 0 011-1V8.414l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L8.414 7H12a1 1 0 110 2H8v4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <Typography variant="h4" className="mt-2 text-red-500">
              $35,928
            </Typography>
            <Typography variant="small" className="text-gray-500">
              +8% from last month
            </Typography>
          </CardBody>
        </Card>
      </div>

      {/* Chart */}
      <Card>
        <CardHeader floated={false} className="p-4">
          <Typography variant="h5">Financial Overview</Typography>
        </CardHeader>
        <CardBody>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="income"
                  stroke="#22c55e"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="expense"
                  stroke="#ef4444"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="balance"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default FinancialReport;
