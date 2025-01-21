import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

interface SummaryCardProps {
  title: string;
  value: number;
  change: string;
  color: string;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  change,
  color,
}: {
  title: string;
  value: number;
  change: string;
  color: string;
}) => (
  <Card>
    <CardBody>
      <Typography variant="h6" color="blue-gray" className="mb-2">
        {title}
      </Typography>
      <Typography variant="h4" style={{color}}>{`$${value}`}</Typography>
      <Typography variant="small" color="gray" className="mt-2">
        {change} from last month
      </Typography>
    </CardBody>
  </Card>
);
