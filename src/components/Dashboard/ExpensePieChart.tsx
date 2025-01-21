/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

interface ExpensePieChartProps {
  data: any;
}

export const ExpensePieChart: React.FC<ExpensePieChartProps> = ({ data }) => (
  <Card>
    <CardHeader floated={false} className="p-4">
      <Typography variant="h5">Expense Breakdown</Typography>
    </CardHeader>
    <CardBody>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
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
);
