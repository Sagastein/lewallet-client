import { useState } from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Select, Option } from "@material-tailwind/react";

function CreateBudgetModal({ isOpen, onClose, onCreate }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [budgetFor, setBudgetFor] = useState("all_expense");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleCreate = () => {
    const newBudget = {
      name,
      amount,
      type,
      budgetFor,
      startDate,
      endDate,
    };
    onCreate(newBudget);
    setName("");
    setAmount("");
    setType("expense");
    setBudgetFor("all_expense");
    setStartDate("");
    setEndDate("");
    onClose();
  };

  return (
    <Dialog open={isOpen} handler={onClose}>
      <DialogHeader>Create New Budget</DialogHeader>
      <DialogBody>
        <div className="mb-4">
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <Input
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <Select label="Type" value={type} onChange={(e) => setType(e.target.value)} className="w-full">
            <Option value="expense">Expense</Option>
            <Option value="income">Income</Option>
          </Select>
        </div>
        <div className="mb-4">
          <Select label="Budget For" value={budgetFor} onChange={(e) => setBudgetFor(e.target.value)} className="w-full">
            <Option value="all_expense">All Expense</Option>
            <Option value="all_income">All Income</Option>
            <Option value="other">Other Categories</Option>
          </Select>
        </div>
        <div className="mb-4">
          <Input
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <Input
            label="End Date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full"
          />
        </div>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="gradient" color="green" onClick={handleCreate}>
          Create
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default CreateBudgetModal;
