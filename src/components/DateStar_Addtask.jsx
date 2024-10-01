import React, { useEffect, useRef, useState } from 'react'
//import DatePicker from 'rsuite/DatePicker'
import "react-datepicker/dist/react-datepicker.css";
//import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//import { DateCalendar } from '@mui/x-date-pickers';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from 'date-fns';
import { red } from '@mui/material/colors';






export const DateStar_Addtask = ({ ResetCalendar, setDateEnds, setDateStars }) => {

const [DateStar,setDateStar]=useState(new Date())
const [DateEnd, setDateEnd]=useState(null)


const OnChange = (dates)=>{
  const [star, end]=dates;
 setDateStar(star)
 setDateEnd(end)
 setDateStars(star)
 setDateEnds(end)

}
console.log(ResetCalendar)
useEffect(()=>{

  if(ResetCalendar){
    const date=[]
    OnChange(date)
  }
 
   

},[ ResetCalendar ])

 return (
    <>
      <DatePicker      
      selected={DateStar} 
      onChange={OnChange}      
      minDate={new Date()}
      maxDate={addMonths(new Date(),5)}
      startDate={DateStar}
      endDate={DateEnd}
      selectsRange
      inline
      showDisabledMonthNavigation
     />
    </>
  )
}


