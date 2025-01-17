import BudgetCard from "./BudgetCard";

function BudgetList({ budgets, onEdit, onDelete }) {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {budgets.map((budget) => (
        <BudgetCard key={budget.id} budget={budget} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default BudgetList;
