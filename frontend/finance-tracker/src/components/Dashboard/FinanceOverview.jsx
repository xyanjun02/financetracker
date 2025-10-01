import React from "react";
import CustomPieChart from "../charts/CustomPieChart";

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const COLORS = ["#875CF5", "#FA2C37", "#FF6900"];

  const balanceData = [
    { name: "Income", amount: totalIncome },
    { name: "Expenses", amount: totalExpense },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between ">
        <h5 className="text-lg">Financial Overview</h5>
      </div>

      <CustomPieChart
        data={balanceData}
        label="Income vs Expenses"
        totalAmount={`$${totalIncome - totalExpense}`}
        colors={["#16a34a", "#dc2626"]}
      />
    </div>
  );
};

export default FinanceOverview;
