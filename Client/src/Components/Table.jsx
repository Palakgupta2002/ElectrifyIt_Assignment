import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";

const TableComp = () => {

  const[vehicleData,setVehicleData]=useState([])
  const fetchData = async () => {
    try {
        const fetchAPI = await fetch("http://localhost:5000/vehicle/VehicleData");
        if (fetchAPI.ok) {
            const data = await fetchAPI.json(); 
            setVehicleData(data)
            console.log(data);
        } else {
            console.log("Response not okay");
        }
    } catch (err) {
        console.log("Error fetching data:", err);
    }
};

useEffect(() => {
    fetchData();
}, []);


  return (
    <div className="overflow-x-auto w-full mt-12 mr-4">
    <Table className='w-screen'>
      <Table.Head className='bg-slate-500'>
        <Table.HeadCell>License Plate</Table.HeadCell>
        <Table.HeadCell>Make</Table.HeadCell>
        <Table.HeadCell>VIN</Table.HeadCell>
        <Table.HeadCell>Model</Table.HeadCell>
        <Table.HeadCell>Type</Table.HeadCell>
        <Table.HeadCell>Date</Table.HeadCell>
        <Table.HeadCell> Miles Driven</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      {
        vehicleData && vehicleData.map((vehicle)=>(
          <Table.Body className="divide-y  text-black">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
           {vehicle.LicensePlate}
          </Table.Cell>
          <Table.Cell className='text-gray-900'>{vehicle.Make}</Table.Cell>
          <Table.Cell className='text-gray-900'>{vehicle.VIN}</Table.Cell>
          <Table.Cell className='text-gray-900'>{vehicle.Model}</Table.Cell>
          <Table.Cell className='text-gray-900'>
          {vehicle.Type}
          </Table.Cell>
          <Table.Cell className='text-gray-900'>
          {vehicle.Date}
          </Table.Cell>
          <Table.Cell className='text-gray-900'>
          {vehicle.milesDriven}
          </Table.Cell>
        </Table.Row>
      
      </Table.Body>
        ))
      }
    </Table>
  </div>
  )
}

export default TableComp