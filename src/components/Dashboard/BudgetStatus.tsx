/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Progress, Typography } from "@material-tailwind/react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";

interface BudgetStatusProps {
  budgetStatus: any[];
  savingsGoalProgress: number;
}

export const BudgetStatus: React.FC<BudgetStatusProps> = ({
  budgetStatus,
  savingsGoalProgress,
}) => (
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
      <div className="mt-6">
        <Typography variant="h6" color="blue-gray" className="mb-2">
          Savings Goal Progress
        </Typography>
        <Progress value={savingsGoalProgress} color="blue" className="h-3" />
        <Typography variant="small" color="gray" className="mt-2">
          {savingsGoalProgress}% of annual savings goal achieved
        </Typography>
      </div>
    </CardBody>
  </Card>
);
