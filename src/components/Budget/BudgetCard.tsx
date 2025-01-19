// components/Budget/BudgetCard.js
import {
  Card,
  Typography,
  Button,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import {
  FaEllipsisV,
  FaEdit,
  FaTrash,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaExclamationCircle,
  FaCheckCircle,
} from "react-icons/fa";

function BudgetCard({ budget, onEdit, onDelete }) {
  return (
    <Card className="p-4 flex flex-col relative transition-transform transform hover:scale-105 duration-300">
      <div className="relative">
        <Popover placement="bottom-end">
          <PopoverHandler>
            <button className="absolute top-2 right-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200">
              <FaEllipsisV className="text-gray-700" />
            </button>
          </PopoverHandler>
          <PopoverContent className="flex flex-col space-y-2 p-2 bg-white rounded-md shadow-md w-40">
            <Button
              onClick={() => onEdit(budget)}
              className="flex items-center w-full hover:bg-blue-100 transition-colors duration-200"
            >
              <FaEdit className="mr-2 text-blue-500" /> Edit
            </Button>
            <Button
              onClick={() => onDelete(budget._id)}
              className="flex items-center w-full hover:bg-red-100 transition-colors duration-200"
            >
              <FaTrash className="mr-2 text-red-500" /> Delete
            </Button>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex-1 mt-8">
        <Typography variant="h5" className="mb-2 flex items-center">
          <FaMoneyBillWave className="mr-2 text-green-500" />{" "}
          {budget.accontName}
        </Typography>
        <Typography variant="paragraph" className="mb-2 flex items-center">
          <FaCalendarAlt className="mr-2 text-purple-500" /> Period:{" "}
          {new Date(budget.startDate).toLocaleDateString()} -{" "}
          {new Date(budget.endDate).toLocaleDateString()}
        </Typography>
        <Typography variant="paragraph" className="mb-2 flex items-center">
          {budget.remainingAmount >= 0 ? (
            <FaCheckCircle className="mr-2 text-green-500" />
          ) : (
            <FaExclamationCircle className="mr-2 text-red-500" />
          )}
          {budget.remainingAmount >= 0 ? "Left" : "Exceeded"}:{" "}
          {budget.remainingAmount}
        </Typography>
        <Typography variant="paragraph" className="mb-2 flex items-center">
          <FaExclamationCircle className="mr-2 text-yellow-500" /> Overdue:{" "}
          {budget.isOverdue ? "Yes" : "No"}
        </Typography>
        <Typography variant="paragraph" className="mb-2 flex items-center">
          <FaMoneyBillWave className="mr-2 text-blue-500" /> Limit Amount:{" "}
          {budget.amount}
        </Typography>
        <Typography variant="paragraph" className="flex items-center">
          <FaMoneyBillWave className="mr-2 text-indigo-500" /> Remaining Amount:{" "}
          {budget.remainingAmount}
        </Typography>
      </div>
    </Card>
  );
}

export default BudgetCard;
