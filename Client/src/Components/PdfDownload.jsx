import React from 'react';
import jsPDF from 'jspdf';
import { Button } from 'flowbite-react';

const PdfDownload = ({ jsonData }) => {
  const downloadPDF = () => {
    const pdf = new jsPDF();
    const headerHeight = 10; 
    const rowHeight = 10; 
    const columnWidth = 70; 

    let currentRow = 0;
    let currentColumn = 0;

    // Function to add a table with headers and data
    const addTable = (headers, data) => {
      // Add headers
      pdf.setFont('helvetica', 'bold');
      headers.forEach((header, index) => {
        if (index > 0) { // Skip the first column
          pdf.rect(currentColumn * columnWidth, currentRow * rowHeight, columnWidth, headerHeight);
          pdf.text(header, currentColumn * columnWidth + 5, currentRow * rowHeight + 5);
          currentColumn++;
        }
      });

      // Add data
      pdf.setFont('helvetica', 'normal');
      currentRow++;
      currentColumn = 0;
      data.forEach(item => {
        headers.forEach((header, headerIndex) => {
          if (headerIndex > 0) { 
            const value = item[header];
            pdf.rect(currentColumn * columnWidth, currentRow * rowHeight, columnWidth, rowHeight);
            pdf.text(String(value), currentColumn * columnWidth + 5, currentRow * rowHeight + 5);
            currentColumn++;
          }
        });
        currentRow++;
        currentColumn = 0;
      });
    };

    
    const headers = Object.keys(jsonData[0]);
    const data = jsonData;

    
    const Report = "Report File";
    pdf.setFont('helvetica', 'bold');
    pdf.text(Report, 5, 0); // Adjust coordinates as needed

   
    addTable(headers.slice(0, 4), data);

  
    currentRow += 2;

   
    addTable(headers.slice(4, 7), data);

    pdf.save('Vehicle Report.pdf');
  };

  return (
    <div>
      <Button onClick={downloadPDF}>Download PDF</Button>
    </div>
  );
};

export default PdfDownload;
