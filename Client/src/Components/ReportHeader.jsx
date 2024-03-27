import { Button, Dropdown, Table } from 'flowbite-react';
import Calendar from 'react-calendar';
import React, { useState } from 'react';

const ReportHeader = () => {
    const [value, onChange] = useState(new Date());
    const [value1, onChange1] = useState(new Date());

    return (
        <div className='m-4'>
            <Table>
                <Table.Head className='border-t-2 border-b-2 border-gray-500 text-nowrap'>
                    <Table.HeadCell className='border-r-2'>
                        <div className='flex justify-between'>
                            <div>Report</div>
                            <div>
                                <Dropdown color="none" label="" dismissOnClick={false}>
                                    <Dropdown.Item>Dashboard</Dropdown.Item>
                                    <Dropdown.Item>Settings</Dropdown.Item>
                                    <Dropdown.Item>Earnings</Dropdown.Item>
                                    <Dropdown.Item>Sign out</Dropdown.Item>
                                </Dropdown>
                            </div>
                        </div>
                    </Table.HeadCell>
                    <Table.HeadCell className='border-r-2'>
                        <div className='flex justify-between'>
                            <div>Frequency</div>
                            <div>
                                <Dropdown color="none" label="" dismissOnClick={false}>
                                    <Dropdown.Item>Dashboard</Dropdown.Item>
                                    <Dropdown.Item>Settings</Dropdown.Item>
                                    <Dropdown.Item>Earnings</Dropdown.Item>
                                    <Dropdown.Item>Sign out</Dropdown.Item>
                                </Dropdown>
                            </div>
                        </div>
                    </Table.HeadCell>
                    <Table.HeadCell className='border-r-2'>
                      <div className='flex justify-between'>
                        <div>Time Framework</div>
                        <div>
                        <Dropdown color="none" label="" dismissOnClick={false}>
                            <Dropdown.Item>
                                <div  className='flex justify-center items-center gap-7'>
                                    <Calendar  className="bg-black" onChange={onChange} value={value} />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <Calendar className="bg-black" onChange={onChange1} value={value1} />
                                </div>
                            </Dropdown.Item>
                        </Dropdown>
                        </div>
                      </div>
                    </Table.HeadCell>
                    <Table.HeadCell className='w-full text-right'>
                        <Button>Generate</Button>
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
