import React from 'react';
import './Sidebar.css';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalculateIcon from '@mui/icons-material/Calculate';
import { Link } from 'react-router-dom';               

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
       <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                <Link to='/' className="link">
                <li className="sidebarListItem active">
                    <LineStyleIcon className='sidebarIcon'/>
                    Home
                </li>
                </Link>
                <Link to="/calender" className="link">
                <li className="sidebarListItem">
                    <CalendarMonthIcon className='sidebarIcon'/>
                    Calender
                </li>
                </Link>
                <Link to="/calculator" className="link">
                <li className="sidebarListItem">
                    <CalculateIcon className='sidebarIcon'/>
                    Calculator
                </li>
                </Link>
              </ul>
          </div>
    </div>
  )
}
