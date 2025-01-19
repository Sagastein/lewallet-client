// components/Budget/CreateBudgetModal.js
import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import useFetch from "../../hooks/useFetch";
import usePost from "../../hooks/usePost";

function CreateBudgetModal({ isOpen, onClose, onCreate, editingBudget }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [budgetFor, setBudgetFor] = useState("all_expense");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");
  const {
    data: accounts,
    error: fetchError,
    isLoading,
  } = useFetch("/api/account");
  const { loading, error, postData } = usePost("/api/budget");

  useEffect(() => {
    if (editingBudget) {
      setName(editingBudget.name);
      setAmount(editingBudget.amount);
      setType(editingBudget.type);
      setBudgetFor(editingBudget.budgetFor);
      setStartDate(editingBudget.startDate);
      setEndDate(editingBudget.endDate);
      if (editingBudget.budgetFor === "specific_accounts") {
        setSelectedAccount(editingBudget.accounts[0]._id);
      }
    }
  }, [editingBudget]);

  const handleCreate = async () => {
    const newBudget = {
      name,
      amount,
      type,
      budgetFor,
      startDate,
      endDate,
      accounts:
        budgetFor === "specific_accounts" ? [selectedAccount] : undefined,
    };
    await postData(newBudget);
    setName("");
    setAmount("");
    setType("expense");
    setBudgetFor("all_expense");
    setStartDate("");
    setEndDate("");
    setSelectedAccount("");
    onCreate(newBudget);
    onClose();
  };

  if (isLoading) return <p>Loading...</p>;
  if (fetchError) return <p>Error: {fetchError.message}</p>;

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
          <Select
            label="Type"
            value={type}
            onChange={(value) => setType(value)}
            className="w-full"
          >
            <Option value="expense">Expense</Option>
            <Option value="income">Income</Option>
          </Select>
        </div>
        <div className="mb-4">
          <Select
            label="Budget For"
            value={budgetFor}
            onChange={(value) => setBudgetFor(value)}
            className="w-full"
          >
            <Option value="all_expense">All Expense</Option>
            <Option value="all_income">All Income</Option>
            <Option value="specific_accounts">Specific Accounts</Option>
          </Select>
        </div>
        {budgetFor === "specific_accounts" && (
          <div className="mb-4">
            <Select
              label="Select Account"
              value={selectedAccount}
              onChange={(value) => setSelectedAccount(value)}
              className="w-full"
            >
              {accounts.map((account) => (
                <Option key={account._id} value={account._id}>
                  {account.name}
                </Option>
              ))}
            </Select>
          </div>
        )}
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
        {error && <p className="text-red-500">{error.message}</p>}
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          variant="gradient"
          color="green"
          onClick={handleCreate}
          disabled={loading}
        >
          Create
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default CreateBudgetModal;
