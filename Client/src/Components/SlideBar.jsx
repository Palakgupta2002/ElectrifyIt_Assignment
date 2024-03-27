import React from 'react';
import { Navbar, Sidebar } from 'flowbite-react';
import overview from '../assest/overview.svg';
import car from "../assest/Car.svg";
import ReportIMg from "../assest/Report.svg";
import Chargers from "../assest/Charger.svg";
import Driver from "../assest/Drivers.svg";
import schedules from "../assest/Schedules.svg";
import Admin from "../assest/admin.svg";
import "../App.css";

const SlideBar = () => {
  return (
    <Navbar fluid rounded className='bg-slate-800'>
      <Navbar.Toggle  />
      <Navbar.Collapse>
        <Sidebar className='sliderbar h-screen w-fit border-2'>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#">
                <div className="flex gap-3">
                  <img width={'20px'} src={overview} alt="overview" />{' '}
                  Overview
                </div>
              </Sidebar.Item>
              <Sidebar.Item href="#" labelColor="dark">
                <div className="flex gap-3">
                  <img width={'20px'} src={car} alt="Vehicles" />{' '}
                  Vehicles
                </div>
              </Sidebar.Item>
              <Sidebar.Item href="#">
                <div className="flex gap-3">
                  <img width={'20px'} src={Chargers} alt="Chargers" />{' '}
                  Chargers
                </div>
              </Sidebar.Item>
              <Sidebar.Item href="#">
                <div className="flex gap-3">
                  <img width={'20px'} src={Driver} alt="Drivers" /> Drivers
                </div>
              </Sidebar.Item>
              <Sidebar.Item href="#">
                <div className="flex gap-3">
                  <img width={'20px'} src={schedules} alt="Schedules" />{' '}
                  Schedules
                </div>
              </Sidebar.Item>
              <Sidebar.Item href="#">
                <div className="flex gap-3">
                  <img width={'20px'} src={ReportIMg} alt="Reports" /> Reports
                </div>
              </Sidebar.Item>
              <Sidebar.Item href="#">
                <div className="flex gap-3">
                  <img width={'20px'} src={Admin} alt="Admin Panel" />{' '}
                  Admin Panel
                </div>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SlideBar;
