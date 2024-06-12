import { useSelector } from "react-redux";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { defaults } from "chart.js/auto";


defaults.maintainAspectRatio=false;
defaults.responsive=true;
const DoughnutChart = () => {
  const { allBudget } = useSelector((state: any) => state.getBudget);
    const labels = allBudget?.budget?.map((item: any) => item.title) || [];
  const dataValues = allBudget?.budget?.map((item: any) => item.amount) || [];

  const data = {
    labels: labels,
    datasets: [{
      label: 'All Budgets',
      data: dataValues,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
        'rgb(201, 203, 207)'
      ],
      hoverOffset: 4
    }]
  };

  return (
    <div className="w-full md:w-6/12 h-80 ">
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
