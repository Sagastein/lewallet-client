/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Progress,
} from "@material-tailwind/react";
import {
  PieChart,
  Pie,
  AreaChart,
  Area,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  monthlyData,
  budgetStatus,
  expenseCategories,
} from "../constants/stats";
import {
  FaSearch,
  FaMoneyBill,
  FaCreditCard,
  FaExchangeAlt,
  FaRandom,
} from "react-icons/fa";
import useFetch from "../hooks/useFetch";

const FinancialDashboard = () => {
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const getRandomIcon = () => {
    const icons = [
      FaSearch,
      FaMoneyBill,
      FaCreditCard,
      FaExchangeAlt,
      FaRandom,
    ];
    const randomIndex = Math.floor(Math.random() * icons.length);
    return icons[randomIndex];
  };
  const {
    data: recentTransactions,
    isLoading: loading,
    error,
  } = useFetch("/api/record/recent");
  const { data: cashflow, error: cashflowError } = useFetch(
    "/api/record/cashflow"
  );
  const {data:stats,isLoading} = useFetch("/api/record/stats");
  if (loading || isLoading) return <p>Loading...</p>;
  if (error || cashflowError) return <p>Error: {cashflowError.message}</p>;

  const savingsGoalProgress = 65;

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header with Date Range */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-2">
        <Typography variant="h3" className="mb-4 md:mb-0">
          Financial Dashboard
        </Typography>
        <div className="flex gap-2">
          <Input
            type="date"
            label="Start Date"
            value={dateRange.startDate}
            containerProps={{ className: "bg-white rounded-md" }}
            onChange={(e) =>
              setDateRange((prev) => ({ ...prev, startDate: e.target.value }))
            }
            className="w-40"
          />
          <Input
            type="date"
            label="End Date"
            containerProps={{ className: "bg-white rounded-md" }}
            value={dateRange.endDate}
            onChange={(e) =>
              setDateRange((prev) => ({ ...prev, endDate: e.target.value }))
            }
            className="w-40"
          />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardBody>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Total Balance
            </Typography>
            <Typography variant="h4" color="blue">
              ${stats.totalBalance}
            </Typography>
            <Typography variant="small" color="gray" className="mt-2">
              +20.1% from last month
            </Typography>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Monthly Income
            </Typography>
            <Typography variant="h4" color="green">
              ${stats.totalIncome}
            </Typography>
            <Typography variant="small" color="gray" className="mt-2">
              +15% from last month
            </Typography>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Monthly Expenses
            </Typography>
            <Typography variant="h4" color="red">
              ${stats.totalExpense}
            </Typography>
            <Typography variant="small" color="gray" className="mt-2">
              -8% from last month
            </Typography>
          </CardBody>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Cash Flow Chart */}
        <Card>
          <CardHeader floated={false} className="p-4">
            <Typography variant="h5">Cash Flow Trend</Typography>
          </CardHeader>
          <CardBody>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={cashflow}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="_id" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="income"
                    stackId="1"
                    stroke="#22c55e"
                    fill="#22c55e"
                    fillOpacity={0.3}
                  />
                  <Area
                    type="monotone"
                    dataKey="expense"
                    stackId="1"
                    stroke="#ef4444"
                    fill="#ef4444"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardBody>
        </Card>

        {/* Expense Categories Pie Chart */}
        <Card>
          <CardHeader floated={false} className="p-4">
            <Typography variant="h5">Expense Breakdown</Typography>
          </CardHeader>
          <CardBody>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseCategories}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {expenseCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Recent Transactions */}
        <Card>
          <CardHeader floated={false} className="p-4">
            <Typography variant="h5">Recent Transactions</Typography>
          </CardHeader>
          <CardBody className="p-0">
            <List>
              {recentTransactions.map((transaction) => (
                <ListItem key={transaction._id} className="py-3">
                  <ListItemPrefix>
                    <Typography className="text-xl">
                      {React.createElement(getRandomIcon())}{" "}
                      {/* Add a random icon */}
                    </Typography>
                  </ListItemPrefix>
                  <div>
                    <Typography variant="small" color="blue-gray">
                      {transaction.type.charAt(0).toUpperCase() +
                        transaction.type.slice(1)}
                    </Typography>
                    <Typography variant="small" color="gray">
                      {new Date(transaction.date).toLocaleDateString()}{" "}
                      {/* Format the date */}
                    </Typography>
                  </div>
                  <ListItemSuffix>
                    <Typography
                      variant="small"
                      color={transaction.type === "income" ? "green" : "red"}
                    >
                      {transaction.type === "income" ? "+" : "-"}$
                      {Math.abs(transaction.amount).toFixed(2)}
                    </Typography>
                  </ListItemSuffix>
                </ListItem>
              ))}
            </List>
          </CardBody>
        </Card>

        {/* Budget Progress */}
        <Card>
          <CardHeader floated={false} className="p-4">
            <Typography variant="h5">Budget Status</Typography>
          </CardHeader>
          <CardBody>
            {budgetStatus.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <Typography variant="small" color="blue-gray">
                    {item.category}
                  </Typography>
                  <Typography variant="small" color="blue-gray">
                    ${item.spent} / ${item.budget}
                  </Typography>
                </div>
                <Progress
                  value={(item.spent / item.budget) * 100}
                  color={item.color as any}
                  className="h-1"
                />
              </div>
            ))}

            {/* Savings Goal */}
            <div className="mt-6">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Savings Goal Progress
              </Typography>
              <Progress
                value={savingsGoalProgress}
                color="blue"
                className="h-3"
              />
              <Typography variant="small" color="gray" className="mt-2">
                {savingsGoalProgress}% of annual savings goal achieved
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default FinancialDashboard;
