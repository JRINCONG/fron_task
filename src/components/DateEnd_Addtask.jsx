import React from 'react'
import DatePicker from 'rsuite/DatePicker'
import "react-datepicker/dist/react-datepicker.css";
import 'rsuite/DatePicker/styles/index.css';

export const DateEnd_Addtask = ({setDateEnd}) => {
  
  return (
    <div>
       <DatePicker placeholder="End Date Activity"  onChange={(date)=>{setDateEnd(date)}}/>
    </div>
  )
}


