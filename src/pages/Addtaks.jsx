import React, { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import 'rsuite/DatePicker/styles/index.css';
import { getDate } from '../util/GetDate';
import { useForm } from 'react-hook-form';
import { SelectAddtask } from '../components/SelectAddtask';
import { PostActivityThunk } from '../store/slice/Activity.slice';
import { DateStar_Addtask } from '../components/DateStar_Addtask';
import { DateEnd_Addtask } from '../components/DateEnd_Addtask';
import '../styles/Addtaks.css'

export const Addtaks = () => {

  const {handleSubmit,register,reset}=useForm()
  const [DateEnd,setDateEnd]=useState()
  const [DateStar, setDateStar]=useState()
  const [SelectItemsId,setSelectItemsId]=useState()



  
  const SubmitActivyti= (data) =>{
    console.log(data)
    console.log(DateStar)
    window.location.reload(true);

    //falta programar el envio del formulario
    //setDateStar()
   // PostActivityThunk()
  }
 




  return (
    <div className='Container_Activity'>
      
      <h1>Record your Activities</h1>
      
      <div className='Calendar_star'>
      <h4>Start Date Activity</h4>
      <DateStar_Addtask      
      setDateStar={setDateStar}
      DateStar={DateStar}
      />
      </div>
      <div className='Calendar_end'>
       <h4>End Date Activity</h4>
       <DateEnd_Addtask
       setDateEnd={setDateEnd}
       />
      </div>

      <div className='Input_items'>
        <SelectAddtask
        setSelectItemsId={setSelectItemsId}
        />
      </div>
      <form onSubmit={handleSubmit(SubmitActivyti)} className='Form_activity'>
       <input {...register('nameactivity')}placeholder='Name Activity' type='text' name='nameactivity'/>
       <textarea {...register('note')}placeholder='Description About Activity' name='note' />
       <button className='btn btn'>Send Task</button>

      </form>
     
     
     
      

     
    
    </div>
  )
}


