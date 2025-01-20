/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

interface CashFlowChartProps {
  data: any;
}

export const CashFlowChart: React.FC<CashFlowChartProps> = ({ data }) => (
  <Card>
    <CardHeader floated={false} className="p-4">
      <Typography variant="h5">Cash Flow Trend</Typography>
    </CardHeader>
    <CardBody>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
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
);
