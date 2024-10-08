import React, { useEffect, useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { getDate } from '../util/GetDate';
import { useForm } from 'react-hook-form';
import { SelectAddtask } from '../components/SelectAddtask';
import { PostActivityThunk } from '../store/slice/Activity.slice';
import { DateStar_Addtask } from '../components/DateStar_Addtask';
import '../styles/Addtaks.css'
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';

export const Addtaks = () => {

  const {handleSubmit,register,reset}=useForm()
  const [DateEnd,setDateEnd]=useState(null)
  const [DateStar, setDateStar]=useState()
  const [SelectItemsId,setSelectItemsId]=useState()
  const [ShowModal, setShowModal]= useState(false)
  const [ResetCalendar, setResetCalendar]=useState(false)
  const dispatch=useDispatch()
 

console.log('fecha Inicial',DateStar)
console.log('Fecha final',DateEnd)
 
  
  const SubmitActivyti= async(data) =>{
   
    if(data.nameactivity !="" && data.note !=""){
    await dispatch(PostActivityThunk({
      title:data.nameactivity,
      dateInicial:DateStar,
      dateFinal:DateEnd,
      note:data.note,
    }))
 console.log("Esta paso despues de guardar",DateStar)
 reset({
  nameactivity:"",
  note:""
 })    //falta programar el envio del formulario
  
  setResetCalendar(true)
  }
  if(!ShowModal){
    
    setShowModal(true) // PostActivityThunk()
  }
  
  }
 



  return (
    <div className='Cointainer_act'>
       <h1>Record your Activities</h1>
    <div className='Container_Activity'>
      
     
      
      <div className='Calendar_star'>
        <h3>Select your Date Range</h3>      
      <DateStar_Addtask      
      setDateStars={setDateStar}
      setDateEnds={setDateEnd}
      ResetCalendar={ ResetCalendar }
     
      />
    
      
      </div>
     
      <div className='Input_items'>
        <div className='select'>
        
      </div>
      <hr className="Linea"/>
      <form onSubmit={handleSubmit(SubmitActivyti)} className='Form_activity'>
       <input {...register('nameactivity')}placeholder='Name Activity' type='text' name='nameactivity'/>
       <textarea {...register('note')}placeholder='Description About Activity' name='note' />
       <button className='btn btn-btn'>Send Task</button>

      </form> 

      <div className={`Modal_Actividad ${ShowModal && 'show'}`}>
        <h1>😟 You must record all data 😥</h1>
          <span className='cerrar'onClick={()=>{setResetCalendar(false),setShowModal(false)}}>X</span>
       </div>   
      </div>
    
      </div>
  </div>
   
  )
}


