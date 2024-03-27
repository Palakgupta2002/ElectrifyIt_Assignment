import { Button } from 'flowbite-react';
import React from 'react';

const JsonToCsv = ({ jsonData }) => {
  const convertToCsv = () => {
    
    let csvContent = "data:text/csv;charset=utf-8,";

 
    const headers = Object.keys(jsonData[0]).slice(1); 
    csvContent += headers.join(',') + '\n';

    
    jsonData.forEach(item => {
      const row = headers.map(header => item[header]);
      csvContent += row.join(',') + '\n';
    });

    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div>
      <Button onClick={convertToCsv}>Download CSV</Button>
    </div>
  );
};

export default JsonToCsv;
