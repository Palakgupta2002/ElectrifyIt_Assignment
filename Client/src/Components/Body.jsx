
import React, { Profiler, useEffect, useState } from 'react'
import bell from "../assest/bell.svg"
import profile from "../assest/Profile.svg";
import "../App.css"

import TableComp from './Table'
import ReportHeader from './ReportHeader'

const Body = () => {
    const [vehicleData, setVehicleData] = useState([])
    const [value2, onChange] = useState(new Date());
    const [value1, onChange1] = useState(new Date());
    const [frequency, setFrequency] = useState("Weekly")
    const [showGenerate,setShowGenerate]=useState(false)
    const [reportData, setReportData] = useState(null);


    function convertDateFormat(dateString) {
        const dateObj = new Date(dateString);
        const year = dateObj.getFullYear();
        const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
        const day = ('0' + dateObj.getDate()).slice(-2);
    
        const formattedDate = `${year}-${month}-${day}${"T18:30:00.000+00:00"}`;
        return formattedDate;
      }
      console.log(convertDateFormat(value1))

    //Api for get req
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

    //Api for filter data req
    useEffect(() => {
        const fetchReportData = async () => {
            const requestBody = {
                reportType: 'Total Miles Driven',
                frequency: frequency,
                timeFrame: {
                    startDate: convertDateFormat(value2),
                    endDate: convertDateFormat(value1)
                }
            };
    
            try {
                const response = await fetch('http://localhost:5000/vehicle/api/reports', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                });
    
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
    
                const data = await response.json();
                setReportData(data); // Update state with fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchReportData();
    }, [frequency, value1, value2]); // Add frequency, value1, and value2 to the dependency array
    
  const VehicleMapingData=showGenerate?reportData.data:vehicleData;
  console.log(VehicleMapingData,"hello actual")

    return (
        <div className='body h-screen w-screen p-4  bg-transparent overflow-scroll '>
            <div className='flex justify-between mt-3 '>
                <div>Reports</div>
                <div className='flex gap-4'>
                    <img width={"20"} src={bell} alt='notification' />
                    <img width={"20"} src={profile} alt='Profile' />
                    <div>username</div>
                </div>
            </div>
            <ReportHeader vehicleData={[...VehicleMapingData]}
                value1={value1}
                value2={value2}
                onChange={onChange}
                onChange1={onChange1}
                setFrequency={setFrequency}
                showGenerate={showGenerate}
                setShowGenerate={setShowGenerate}
            />
            { showGenerate && reportData? 
           <div className='flex justify-center'>
             <div className='text-center text-wrap'>
            <div > Report Type :-  {reportData.reportType}</div>
             <div>Frequency :-  {reportData.frequency}</div>
             <div>Time Frame:- To {reportData.timeFrame.startDate ? reportData.timeFrame.startDate.slice(0, 10) : ''} From {reportData.timeFrame.endDate ? reportData.timeFrame.endDate.slice(0, 10) : ''}</div>

            </div>
           </div>
                :<div></div>
                }
            <TableComp VehicleMapingData={[...VehicleMapingData]} showGenerate={showGenerate} />
        </div>
    )
}

export default Body