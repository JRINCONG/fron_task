import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const DateEnd_Addtask = ({ DateEnd, setDateEnd }) => {
  
  return (
    <div>
       <DatePicker selected={DateEnd}  onChange={(date)=>{setDateEnd(date)}}/>
    </div>
  )
}


