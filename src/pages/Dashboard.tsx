import { useState } from "react";
import { Typography, Input } from "@material-tailwind/react";
import useFetch from "../hooks/useFetch";
import { SummaryCard } from "../components/Dashboard/SummaryCard";
import { CashFlowChart } from "../components/Dashboard/CashFlowChart";
import { ExpensePieChart } from "../components/Dashboard/ExpensePieChart";
import { RecentTransactions } from "../components/Dashboard/RecentTransactions";
import { BudgetStatus } from "../components/Dashboard/BudgetStatus";
import { budgetStatus, expenseCategories } from "../constants/stats";

const FinancialDashboard = () => {
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const {
    data: recentTransactions,
    error: transactionsError,
    isLoading: recentLoading,
  } = useFetch("/api/record/recent");
  const {
    data: cashflow,
    error: cashflowError,
    isLoading: cashflowLoading,
  } = useFetch("/api/record/cashflow");
  const {
    data: stats,
    isLoading,
    error: statsError,
  } = useFetch("/api/record/stats");

  if (isLoading || cashflowLoading || recentLoading) return <p>Loading...</p>;
  if (transactionsError || cashflowError || statsError)
    return (
      <p>
        Error:{" "}
        {statsError?.message ||
          transactionsError?.message ||
          cashflowError?.message}
      </p>
    );

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header with Date Range */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-2">
        <Typography variant="h3" className="mb-4 md:mb-0">
          Financial Dashboard
        </Typography>
        <div className="flex gap-2">
          <Input
            type="date"
            label="Start Date"
            value={dateRange.startDate}
            onChange={(e) =>
              setDateRange({ ...dateRange, startDate: e.target.value })
            }
            className="w-40"
            containerProps={{ className: "bg-white" }}
          />
          <Input
            type="date"
            label="End Date"
            value={dateRange.endDate}
            containerProps={{ className: "bg-white" }}
            onChange={(e) =>
              setDateRange({ ...dateRange, endDate: e.target.value })
            }
            className="w-40"
          />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <SummaryCard
          title="Total Balance"
          value={stats.totalBalance}
          change="+20.1%"
          color="blue"
        />
        <SummaryCard
          title="Monthly Income"
          value={stats.totalIncome}
          change="+15%"
          color="green"
        />
        <SummaryCard
          title="Monthly Expenses"
          value={stats.totalExpense}
          change="-8%"
          color="red"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <CashFlowChart data={cashflow} />
        <ExpensePieChart data={expenseCategories} />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RecentTransactions transactions={recentTransactions} />
        <BudgetStatus budgetStatus={budgetStatus} savingsGoalProgress={65} />
      </div>
    </div>
  );
};

export default FinancialDashboard;
