"use client";

import "jspdf-autotable";
import useCurrentUser from "@/customHooks/useCurrentUser";
const PdfGenerator = () => {
  const { userEmail } = useCurrentUser();
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const handleClick = async () => {
    const response = await fetch(`/api/generate-report/${userEmail}`);
    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `BudgetBuddy-${month}Report.pdf`;
      a.click();
    } else {
      console.error('Failed to generate PDF:', await response.json());
    }
  };
  return (
    <div className="w-full mb-9 sm:my-0 flex justify-end">
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate PDF</button>
    </div>
  );
};

export default PdfGenerator;