const monthlyData = [
  { month: "Jan", income: 4000, expense: 2400, savings: 1600 },
  { month: "Feb", income: 3000, expense: 1398, savings: 1602 },
  { month: "Mar", income: 2000, expense: 9800, savings: -7800 },
  { month: "Apr", income: 2780, expense: 3908, savings: -1128 },
  { month: "May", income: 1890, expense: 4800, savings: -2910 },
  { month: "Jun", income: 2390, expense: 3800, savings: -1410 },
];

const expenseCategories = [
  { name: "Housing", value: 3500, color: "#FF8042" },
  { name: "Food", value: 1200, color: "#00C49F" },
  { name: "Transport", value: 800, color: "#FFBB28" },
  { name: "Entertainment", value: 600, color: "#0088FE" },
  { name: "Utilities", value: 400, color: "#FF6B6B" },
];

const savingsGoalProgress = 65; // Percentage towards savings goal

const recentTransactions = [
  {
    id: 1,
    type: "expense",
    category: "Groceries",
    amount: -125.5,
    date: "2025-01-15",
    icon: "🛒",
  },
  {
    id: 2,
    type: "income",
    category: "Salary",
    amount: 3500.0,
    date: "2025-01-14",
    icon: "💰",
  },
  {
    id: 3,
    type: "expense",
    category: "Netflix",
    amount: -15.99,
    date: "2025-01-13",
    icon: "🎬",
  },
  {
    id: 4,
    type: "expense",
    category: "Fuel",
    amount: -45.0,
    date: "2025-01-12",
    icon: "⛽",
  },
];

const budgetStatus = [
  { category: "Food", budget: 1000, spent: 800, color: "green" },
  { category: "Transport", budget: 500, spent: 450, color: "yellow" },
  { category: "Entertainment", budget: 300, spent: 290, color: "red" },
];

const mockBudgets = [
  {
    id: 1,
    name: "Groceries",
    type: "expense",
    budgetFor: "all_expense",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    limitAmount: 500,
    remainingAmount: 200,
    overdue: false,
  },
  {
    id: 2,
    name: "Salary",
    type: "income",
    budgetFor: "all_income",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    limitAmount: 3000,
    remainingAmount: 1500,
    overdue: false,
  },
];

export {
  expenseCategories,
  monthlyData,
  recentTransactions,
  savingsGoalProgress,
  budgetStatus,
  mockBudgets,
};
