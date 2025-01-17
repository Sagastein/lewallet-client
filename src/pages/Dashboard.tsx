/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Alert,
  Radio,
} from "@material-tailwind/react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const FinancialDashboard = () => {
  // const [dateRange, setDateRange] = useState({
  //   startDate: "",
  //   endDate: "",
  // });
  const [selectedChart, setSelectedChart] = useState("area");
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [alerts, setAlerts] = useState([
    { id: 1, type: "warning", message: "Entertainment budget at 90% of limit" },
    {
      id: 2,
      type: "danger",
      message: "Unusual transaction detected: $500 at 3 AM",
    },
    { id: 3, type: "info", message: "Monthly savings goal almost achieved!" },
  ]);

  // Enhanced sample data
  const monthlyData = [
    {
      month: "Jan",
      income: 4000,
      expense: 2400,
      savings: 1600,
      investments: 800,
    },
    {
      month: "Feb",
      income: 3000,
      expense: 1398,
      savings: 1602,
      investments: 900,
    },
    {
      month: "Mar",
      income: 2000,
      expense: 9800,
      savings: -7800,
      investments: 400,
    },
    {
      month: "Apr",
      income: 2780,
      expense: 3908,
      savings: -1128,
      investments: 600,
    },
    {
      month: "May",
      income: 1890,
      expense: 4800,
      savings: -2910,
      investments: 700,
    },
    {
      month: "Jun",
      income: 2390,
      expense: 3800,
      savings: -1410,
      investments: 1000,
    },
  ];

  const spendingRadarData = [
    { category: "Food", amount: 120, fullMark: 150 },
    { category: "Transport", amount: 98, fullMark: 150 },
    { category: "Shopping", amount: 86, fullMark: 150 },
    { category: "Utilities", amount: 99, fullMark: 150 },
    { category: "Entertainment", amount: 85, fullMark: 150 },
    { category: "Healthcare", amount: 65, fullMark: 150 },
  ];

  const savingsProgress = [
    {
      name: "Emergency Fund",
      progress: 75,
      fill: "#8884d8",
    },
    {
      name: "Vacation",
      progress: 45,
      fill: "#83a6ed",
    },
    {
      name: "New Car",
      progress: 30,
      fill: "#8dd1e1",
    },
  ];

  // New Alert Dialog Form State
  const [newAlert, setNewAlert] = useState({
    threshold: "",
    category: "",
    type: "expense",
  });

  const handleCreateAlert = () => {
    // Add new alert logic here
    setAlerts((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        type: "warning",
        message: `Alert for ${newAlert.type} in ${newAlert.category} over ${newAlert.threshold}`,
      },
    ]);
    setShowAlertDialog(false);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border rounded shadow">
          <p className="font-bold">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: ${entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Previous JSX remains the same until the charts section
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Previous header and summary cards remain the same */}

      {/* Alerts Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h5">Active Alerts</Typography>
          <Button
            color="blue"
            size="sm"
            onClick={() => setShowAlertDialog(true)}
          >
            Create Alert
          </Button>
        </div>
        <div className="space-y-2">
          {alerts.map((alert) => (
            <Alert
              key={alert.id}
              color={alert.type as any}
              variant="gradient"
              className="flex items-center"
            >
              {alert.message}
            </Alert>
          ))}
        </div>
      </div>

      {/* Interactive Chart Controls */}
      <Card className="mb-6">
        <CardHeader floated={false} className="p-4">
          <div className="flex justify-between items-center">
            <Typography variant="h5">Financial Overview</Typography>
            <div className="flex gap-2">
              <Button
                size="sm"
                color={selectedChart === "area" ? "blue" : "gray"}
                onClick={() => setSelectedChart("area")}
              >
                Area
              </Button>
              <Button
                size="sm"
                color={selectedChart === "bar" ? "blue" : "gray"}
                onClick={() => setSelectedChart("bar")}
              >
                Bar
              </Button>
              <Button
                size="sm"
                color={selectedChart === "line" ? "blue" : "gray"}
                onClick={() => setSelectedChart("line")}
              >
                Line
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              {selectedChart === "area" ? (
                <AreaChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
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
                  <Area
                    type="monotone"
                    dataKey="investments"
                    stackId="1"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              ) : selectedChart === "bar" ? (
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="income" fill="#22c55e" />
                  <Bar dataKey="expense" fill="#ef4444" />
                  <Bar dataKey="investments" fill="#3b82f6" />
                </BarChart>
              ) : (
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
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
                    dataKey="investments"
                    stroke="#3b82f6"
                    strokeWidth={2}
                  />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>
        </CardBody>
      </Card>

      {/* New Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Spending Categories Radar Chart */}
        <Card>
          <CardHeader floated={false} className="p-4">
            <Typography variant="h5">Spending Pattern Analysis</Typography>
          </CardHeader>
          <CardBody>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={spendingRadarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="category" />
                  <PolarRadiusAxis />
                  <Radar
                    name="Spending"
                    dataKey="amount"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardBody>
        </Card>

        {/* Savings Goals Radial Chart */}
        <Card>
          <CardHeader floated={false} className="p-4">
            <Typography variant="h5">Savings Goals Progress</Typography>
          </CardHeader>
          <CardBody>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  innerRadius="20%"
                  outerRadius="90%"
                  data={savingsProgress}
                  startAngle={180}
                  endAngle={0}
                >
                  <RadialBar
                    background
                    dataKey="progress"
                    label={{ fill: "#666", position: "insideStart" }}
                  />
                  <Legend
                    iconSize={10}
                    width={120}
                    height={140}
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                  />
                  <Tooltip />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Alert Dialog */}
      <Dialog open={showAlertDialog} handler={() => setShowAlertDialog(false)}>
        <DialogHeader>Create New Alert</DialogHeader>
        <DialogBody>
          <div className="space-y-4">
            <Input
              label="Threshold Amount"
              type="number"
              value={newAlert.threshold}
              onChange={(e) =>
                setNewAlert({ ...newAlert, threshold: e.target.value })
              }
            />
            <Input
              label="Category"
              value={newAlert.category}
              onChange={(e) =>
                setNewAlert({ ...newAlert, category: e.target.value })
              }
            />
            <div className="flex gap-4">
              <Radio
                name="type"
                label="Expense"
                checked={newAlert.type === "expense"}
                onChange={() => setNewAlert({ ...newAlert, type: "expense" })}
              />
              <Radio
                name="type"
                label="Income"
                checked={newAlert.type === "income"}
                onChange={() => setNewAlert({ ...newAlert, type: "income" })}
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button color="red" onClick={() => setShowAlertDialog(false)}>
            Cancel
          </Button>
          <Button color="green" onClick={handleCreateAlert}>
            Create
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Rest of the previous components (Recent Transactions, Budget Status) remain the same */}
    </div>
  );
};

export default FinancialDashboard;
