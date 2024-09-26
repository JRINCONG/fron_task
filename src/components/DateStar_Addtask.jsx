import React, { useEffect, useRef } from 'react'
//import DatePicker from 'rsuite/DatePicker'
import "react-datepicker/dist/react-datepicker.css";
//import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//import { DateCalendar } from '@mui/x-date-pickers';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export const DateStar_Addtask = ({DateStar, setDateStar}) => {


 return (
    <div>
      <DatePicker selected={DateStar} onChange={(date)=>setDateStar(date)}/>
    </div>
  )
}


