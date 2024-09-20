import '../styles/AddItems.css'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import store from '../store/Redux'
import { getItemsThunk, gettAdditemsThunk } from '../store/slice/Items.slice'
import { CardItems } from '../components/CardItems'

export const AddItems = () => {

  const {handleSubmit, register, reset }=useForm()
  const [Additems,setAdditems]=useState([])
  const items = useSelector((store)=>store.ItemsSlice)
  const dispatch= useDispatch()
  

useEffect(()=>{

  dispatch(getItemsThunk())
},[Additems])


  const Submit = (data)=>{
   dispatch(gettAdditemsThunk(data))

   reset({
   description:"",
   })
     setAdditems({...data})

  }
  
  return (
    <div className='Container_Additems'>  
    <div className='title'>
      <h1>¡¡ We create your items for your Activities !!</h1>
    </div>

    <form onSubmit={handleSubmit(Submit)} className='Additems_form'>
      <input {...register ('description')} type="text" placeholder='Add Items' className='texto1' name='description'/>
      <button className='btn'>Add Items</button>
    
    </form>

     <div className='Container_CardItems'>
      {
        (items.length>0)?
        items?.map((item)=>(
        <CardItems
        item={item}
        key={item.id}
        
        />
        ))
        :
        <h1>No items added</h1>
      }
  </div>
    </div>




  )
}

