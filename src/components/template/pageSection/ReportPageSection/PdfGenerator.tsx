"use client"
import { RiAiGenerate } from "react-icons/ri";
import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { ASSETS } from "../../../../../public/Assets";
import { useSelector } from "react-redux";

interface BudgetItem {
  title: string;
  amount: number;
  expense: ExpenseItem[];
}

interface ExpenseItem {
  title: string;
  createdAt: string;
  amount: number;
}

const PdfGenerator = () => {
  const [pdfInstance, setPdfInstance] = useState<jsPDF | null>(null);

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  function formatCurrency(amount: any) {
    var formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedAmount;
  }

  useEffect(() => {
    const loadJsPDF = async () => {
      const { jsPDF } = await import("jspdf");
      setPdfInstance(new jsPDF());
    };
    loadJsPDF();
  }, []);

  const date = new Date();
  const currentDate = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const { allBudget } = useSelector((state: any) => state.getBudget);
  const budgets = allBudget?.budget || [];
  const totalBudget = budgets.reduce((acc: number, budget: any) => acc + budget.amount, 0);
  const totalSpent = budgets.reduce((acc: number, budget: any) => {
      const budgetSpent = budget.expense.reduce((expenseAcc: number, expense: any) => expenseAcc + expense.amount, 0);
      return acc + budgetSpent;
  }, 0);
  const remainingAmount = totalBudget - totalSpent;
  const generatePDF = () => {
    if (pdfInstance && allBudget?.budget) {
      const doc = pdfInstance;

      const logo = new Image();
      logo.src = ASSETS.logo;
      logo.onload = () => {
        const aspectRatio = logo.width / logo.height;
        const width = 50;
        const height = width / aspectRatio;

        doc.addImage(logo, "PNG", 10, 3, width, height);
        doc.setFont("helvetica", "bold");
        doc.text(`Budget Buddy Report of ${month} ${currentDate} `, 70, 25);
        if(allBudget.budget.length==0){
          doc.text("No Existing Budget Found", 50, 70);
        }
        else{
          doc.setFont("helvetica", "light");
        doc.text(`Total Amount:Rs. ${formatCurrency(totalBudget)}`, 10, 55);
        doc.text(`Total Expenses : Rs. ${formatCurrency(totalSpent)}`, 10, 65);
        doc.text(`Remaining Amount : Rs. ${formatCurrency(remainingAmount)}`, 10, 75);
        }

        let yOffset = 95;
     
        allBudget.budget.forEach((item: BudgetItem) => {
          if (yOffset + 40 > doc.internal.pageSize.height) {
            doc.addPage();
            yOffset = 20;
          }
          doc.setFont("helvetica", "light");
          doc.text(`Budget title: ${item.title}`, 70, yOffset);
          doc.text(`Budget Amount: Rs. ${formatCurrency(item.amount)}`, 70, yOffset + 10);

          if (item.expense.length === 0) {
            doc.text("There are no expenses in this budget.", 10, yOffset + 30);
            yOffset += 40; 
          } else {
            const tableColumn = ["Expense Title", "Date", "Amount"];
            const tableRows = item.expense.map((expense: ExpenseItem) => [
              expense.title,
              formatDate(expense.createdAt),
              formatCurrency(expense.amount),
            ]);

            //@ts-ignore
            doc.autoTable({
              head: [tableColumn],
              body: tableRows,
              startY: yOffset + 20,
              theme: 'grid'
            });

            // @ts-ignore
            const tableHeight = doc.autoTable.previous.finalY;
            yOffset = tableHeight + 20; 
          }
        });

        doc.save(`BudgetBuddy-${month}Report.pdf`);
      };
    }
  };

  return (
    <div className="w-full flex justify-end my-6 sm:my-0">
      <button onClick={generatePDF} className="text-sm bg-[#167c7c] hover:bg-[#0f5050] transition-all text-white items-center h-11 gap-1 flex px-3 py-2 font-semibold rounded-lg">
      <RiAiGenerate size={25} />
      Generate PDF
        </button>
    </div>
  );
};

export default PdfGenerator;
