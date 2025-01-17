import { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import BudgetList from "../components/Budget/BudgetList";
import CreateBudgetModal from "../components/Budget/CreateBudgetModal";
import { mockBudgets } from "../constants/stats";

function Budget() {
  const [budgets, setBudgets] = useState(mockBudgets);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBudget, setEditingBudget] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreateBudget = (newBudget) => {
    setBudgets([...budgets, { ...newBudget, id: budgets.length + 1 }]);
  };

  const handleEditBudget = (budget) => {
    console.log(editingBudget);
    setEditingBudget(budget);
    setIsModalOpen(true);
  };

  const handleDeleteBudget = (id) => {
    setBudgets(budgets.filter((budget) => budget.id !== id));
  };

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
      />
    </main>
  );
}

export default Budget;
