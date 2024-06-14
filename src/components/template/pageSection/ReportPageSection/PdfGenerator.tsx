"use client";

import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { ASSETS } from "../../../../../public/Assets";

const PdfGenerator = () => {
  const [pdfInstance, setPdfInstance] = useState<jsPDF | null>(null);

  useEffect(() => {
    import("jspdf").then((module) => {
      setPdfInstance(new module.jsPDF());
    });
  }, []);

  const generatePDF = () => {
    if (pdfInstance) {
      const doc = pdfInstance;

      const logo = new Image();
      logo.src = ASSETS.logo;
      logo.onload = function () {
        doc.addImage(logo, "PNG", 10, 10, 50, 20);

        // Add some text below the logo
        doc.text("My Website", 70, 25);

        // Add a table
        const tableColumn = ["ID", "Name", "Country"];
        const tableRows = [
          [1, "John Doe", "USA"],
          [2, "Anna Smith", "UK"],
          [3, "Peter Johnson", "Canada"],
        ];

        (doc as any).autoTable({
          head: [tableColumn],
          body: tableRows,
          startY: 40, // Adjust startY to position the table below the text
        });

        doc.save("example.pdf");
      };
    }
  };

  return (
    <div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default PdfGenerator;