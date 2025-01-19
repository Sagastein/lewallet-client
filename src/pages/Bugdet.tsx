// pages/Budget.js
import { useState, useEffect } from "react";
import { Button, Typography } from "@material-tailwind/react";
import BudgetList from "../components/Budget/BudgetList";
import CreateBudgetModal from "../components/Budget/CreateBudgetModal";
import useFetch from "../hooks/useFetch";

function Budget() {
  const {
    data,
    error,
    isLoading,
  } = useFetch("/api/budget");

  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    if (data) {
      setBudgets(data);
    }
  }, [data]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBudget, setEditingBudget] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreateBudget = (newBudget) => {
    // Assuming the backend handles the ID generation
    setBudgets((prevBudgets) => [...prevBudgets, newBudget]);
  };

  const handleEditBudget = (budget) => {
    setEditingBudget(budget);
    setIsModalOpen(true);
  };

  const handleDeleteBudget = (id) => {
    setBudgets((prevBudgets) =>
      prevBudgets.filter((budget) => budget._id !== id)
    );
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center py-3">
        <Typography variant="h3" className="text-3xl font-bold">
          Budgets
        </Typography>
        <Button
          onClick={openModal}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Budget
        </Button>
      </div>
      <div className="p-2 bg-white w-full max-w-6xl mx-auto rounded-lg shadow-md">
        <BudgetList
          budgets={budgets}
          onEdit={handleEditBudget}
          onDelete={handleDeleteBudget}
        />
      </div>
      <CreateBudgetModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onCreate={handleCreateBudget}
        editingBudget={editingBudget}
      />
    </main>
  );
}

export default Budget;
