import React, { useRef, useState } from 'react'
//import DatePicker from "react-datepicker"
//import { DatePicker } from 'rsuite'
import DatePicker from 'rsuite/DatePicker'
import "react-datepicker/dist/react-datepicker.css";
import 'rsuite/DatePicker/styles/index.css';
import { getDate } from '../util/GetDate';

export const Addtaks = () => {

  const dato= useRef()
 const [NewDate1,setNewDate1]=useState(getDate())
 
//<DatePicker selected={NewDate1} onChange={(date)=> setNewDate1(date)} label={"Uncontrolled picker"} />

console.log(NewDate1)
const Valores =(date)=>{
console.log(date.getDate())
}

  return (
    <div className='Container_Activity'>
      <h1>Add Activities</h1>
      
      <div className='Calendar'>
      
      <DatePicker placeholder="Star Date Activity"  onChange={(date)=>{Valores(date)}}/>
      
      
      </div>
     
     
      

     
     <form action="">
     
     </form>
    </div>
  )
}


