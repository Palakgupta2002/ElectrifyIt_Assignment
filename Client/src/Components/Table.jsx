import React from 'react';
import { Table } from "flowbite-react";
import "../App.css";

const TableComp = ({ VehicleMapingData }) => {
  console.log(VehicleMapingData, "hello");

  return (
    <div className="overflow-x-auto w-full mt-12 mr-4">
  { VehicleMapingData && VehicleMapingData.length > 0  && (
        <Table className="">
          <Table.Head className="tableHead">
            {Object.keys(VehicleMapingData[0]).map((key) => (
              <Table.HeadCell className="bg-black" key={key}>
                {key}
              </Table.HeadCell>
            ))}
          </Table.Head>
          {VehicleMapingData &&
            VehicleMapingData.map((vehicle, index) => (
              <Table.Body
                key={index}
                className="divide-y mt-5 text-black dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Row>
                  {Object.values(vehicle).map((value, index) => (
                    <Table.Cell
                      key={index}
                      className="whitespace-nowrap font-medium dark:text-white"
                    >
                      {value}
                    </Table.Cell>
                  ))}
                </Table.Row>
              </Table.Body>
            ))}
        </Table>
      )}
    </div>
  );
};

export default TableComp;
