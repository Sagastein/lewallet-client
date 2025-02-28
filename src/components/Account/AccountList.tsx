// components/Account/AccountList.js
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { FaMoneyBillWave } from "react-icons/fa";

// Mock account icons and types for demonstration purposes
const accountIcons = {
  savings: FaMoneyBillWave,
  checking: FaMoneyBillWave,
  credit: FaMoneyBillWave,
};

function AccountList({ accounts }) {
  return (
    <div className="space-y-2">
      {accounts.map((account) => {
        const Icon = accountIcons[account.type] || FaMoneyBillWave;
        return (
          <Link
            to={`/portal/account/${account._id}`}
            key={account._id}
            className="flex p-2 border rounded-md h-20 w-full justify-between cursor-pointer hover:scale-100 hover:bg-gray-100 transition-all duration-300"
          >
            <div className="flex items-center w-full space-x-4">
              <div className="p-2 bg-gray-200 rounded-full">
                <Icon className="text-2xl text-green-700" />
              </div>
              <div>
                <Typography variant="h5" className="mb-1">
                  {account.name}
                </Typography>
                <Typography
                  variant="paragraph"
                  className="text-gray-600 text-sm"
                >
                  {account.type}
                </Typography>
              </div>
            </div>

            <div className="flex flex-col text-right w-full">
              <Typography variant="h6" className="mb-1">
                {account.currency} {account.initialAmount}
              </Typography>
              {account.limit && (
                <Typography variant="paragraph" className="text-gray-600">
                  (Limit {account.currency} {account.limit})
                </Typography>
              )}
              <Typography variant="paragraph" className="text-gray-600">
                Current Balance: {account.currency} {account.currentBalance}
              </Typography>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default AccountList;
