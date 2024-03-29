import { Button, Dropdown, Table } from 'flowbite-react';
import "../App.css"
import Calendar from 'react-calendar';
import React, { useState } from 'react';
import JsonToCsv from './CsvFileDownload';
import PdfDownload from './PdfDownload';

const ReportHeader = ({ vehicleData ,value1,
    value2,
    onChange,
    onChange1,
    setFrequency,
    showGenerate,
    setShowGenerate
}) => {
 
    
   
    const formatShortWeekday = (locale, date) => {
        const fullWeekday = date.toLocaleDateString(locale, { weekday: 'long' });
        return fullWeekday.charAt(0);
    };
    console.log(value2,value1);
    return (
        <div className='m-4'>
            <Table>
                <Table.Head className='tablehead border-t-2 border-b-2 border-gray-500 text-nowrap'>
                    <Table.HeadCell className='border-r-2 border-gray-500 text-white'>
                        <div className='flex justify-between'>
                            <div>Report</div>
                            <div className='-mt-3'>
                                <Dropdown color="none" label="" dismissOnClick={false}>
                                    <Dropdown.Item className='border-b-2 border-b-slate-600' >Total Miles Driven</Dropdown.Item>
                                    <Dropdown.Item className='border-b-2 border-b-slate-600'>Energy Consumption</Dropdown.Item>
                                    <Dropdown.Item >Cost Analysis</Dropdown.Item>
                                </Dropdown>
                            </div>
                        </div>
                    </Table.HeadCell>
                    <Table.HeadCell className='border-r-2 border-gray-500'>
                        <div className='flex justify-between'>
                            <div>Frequency</div>
                            <div className='-mt-3'>
                                <Dropdown  color="none" label=""  dismissOnClick={false}>
                                    <Dropdown.Item className='border-b-2 border-b-slate-600 ' onClick={(e)=>setFrequency("Daily")} value="Daily">Daily</Dropdown.Item>
                                    <Dropdown.Item className='border-b-2 border-b-slate-600' onClick={(e)=>setFrequency("Monthly")} value="Monthly">Monthly</Dropdown.Item>
                                    <Dropdown.Item className='border-b-2 border-b-slate-600' onClick={(e)=>setFrequency("Weekly")} value="Weekly">Weekly</Dropdown.Item>
                                    <Dropdown.Item onClick={(e)=>setFrequency("Yearly")} value="Yearly">Yearly</Dropdown.Item>
                                </Dropdown>
                            </div>
                        </div>
                    </Table.HeadCell>
                    <Table.HeadCell className='border-r-2 border-gray-500'>
                        <div className='flex justify-between'>
                            <div className=''>Time Framework</div>
                            <div className='-mt-3'>
                                <Dropdown color="none"  label="" dismissOnClick={false}>
                                    <Dropdown.Item className=' h-60  hover:bg-slate-600'>
                                        <div className='flex gap-4'>
                                            <div className=''>
                                                <h2 className='calendar-title shadowStyle'>From</h2>
                                                <Calendar
                                                    className="shadowStyle  w-44 h-full"
                                                    onChange={onChange}
                                                    value={value2}
                                                    formatShortWeekday={formatShortWeekday}    
                                                />
                                            </div>
                                            <div className=''>
                                                <h2 className='calendar-title shadowStyle '>To</h2>
                                                <Calendar
                                                    className="shadowStyle w-44 h-full "
                                                    onChange={onChange1}
                                                    value={value1}
                                                    formatShortWeekday={formatShortWeekday}
                                                />
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown>
                            </div>
                        </div>
                    </Table.HeadCell>
                    <Table.HeadCell className='w-full text-right text-white'>
                        {
                            showGenerate?
                            <div className='flex justify-end'>
                            <PdfDownload jsonData={[...vehicleData]} />
                             <JsonToCsv jsonData={[...vehicleData]} />
                            </div>:<Button onClick={()=>setShowGenerate(!showGenerate)}>Generate</Button>
                        }
                          
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
            </Table>
        </div>
    );
};

export default ReportHeader;
