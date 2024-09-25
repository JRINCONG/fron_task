import React, { useEffect } from 'react'
import DatePicker from 'rsuite/DatePicker'
import "react-datepicker/dist/react-datepicker.css";
import 'rsuite/DatePicker/styles/index.css';

export const DateStar_Addtask = ({DateStar, setDateStar}) => {

  
 
  return (
    <div>
      <DatePicker placeholder="Star Date Activity" value={DateStar} onChange={(DateStar)=>setDateStar(DateStar)}/>
    </div>
  )
}


