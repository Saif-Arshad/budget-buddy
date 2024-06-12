"use client"
import { useSelector } from "react-redux";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { defaults } from "chart.js/auto";


defaults.maintainAspectRatio=false;
defaults.responsive=true;

const BarChart = () => {
  const { allBudget } = useSelector((state: any) => state.getBudget);
  console.log("🚀 ~ IncomeStatics ~ allBudget:", allBudget);

  const budgets = allBudget?.budget || [];

  const totalBudget = budgets.reduce((acc: number, budget: any) => acc + budget.amount, 0);
  const totalSpent = budgets.reduce((acc: number, budget: any) => {
    const budgetSpent = budget.expense.reduce((expenseAcc: number, expense: any) => expenseAcc + expense.amount, 0);
    return acc + budgetSpent;
  }, 0);
  const remainingAmount = totalBudget - totalSpent;

  const data = {
    labels: ['Budget Overview'],
    datasets: [
      {
        label: "Total Budget",
        data: [totalBudget], 
        backgroundColor: " rgb(54, 162, 235)",
        borderColor: "rgba(26, 48, 187, 0.5)",
        borderWidth: 1,
      },
      {
        label: "Remaining Amount",
        data: [remainingAmount], 
        backgroundColor: "rgb(255, 205, 86)",
        borderColor: "rgb(175, 132, 30)",
        borderWidth: 1,
      },
      {
        label: "Total Amount Spend",
        data: [totalSpent], 
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(188, 27, 51, 0.5)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full md:w-6/12 h-80 ">
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
