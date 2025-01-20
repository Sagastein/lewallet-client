/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import {
  FaSearch,
  FaMoneyBill,
  FaCreditCard,
  FaExchangeAlt,
  FaRandom,
} from "react-icons/fa";

interface RecentTransactionsProps {
  transactions: any[];
}

const getRandomIcon = () => {
  const icons = [FaSearch, FaMoneyBill, FaCreditCard, FaExchangeAlt, FaRandom];
  const randomIndex = Math.floor(Math.random() * icons.length);
  return icons[randomIndex];
};

export const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions,
}) => (
  <Card>
    <CardHeader floated={false} className="p-4">
      <Typography variant="h5">Recent Transactions</Typography>
    </CardHeader>
    <CardBody className="p-0">
      <List>
        {transactions.map((transaction) => (
          <ListItem key={transaction._id} className="py-3">
            <ListItemPrefix>
              <Typography className="text-xl">
                {React.createElement(getRandomIcon())}
              </Typography>
            </ListItemPrefix>
            <div>
              <Typography variant="small" color="blue-gray">
                {transaction.type.charAt(0).toUpperCase() +
                  transaction.type.slice(1)}
              </Typography>
              <Typography variant="small" color="gray">
                {new Date(transaction.date).toLocaleDateString()}
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
);
