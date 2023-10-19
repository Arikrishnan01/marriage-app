import * as React from 'react';
import "./Calender.css";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export default function StaticDatePickerLandscape() {
  return (
    <div className='calender'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker orientation="landscape" />
     </LocalizationProvider>
    </div>
  );
}