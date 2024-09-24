import React, { useEffect, useRef, useState } from 'react'
import { getDestroyThunk, getEditThunk } from '../store/slice/Items.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

export const CardItems = ({item}) => {
const dispatch= useDispatch()
const {handleSubmit,reset, register} = useForm()
const datos = useRef()
const [IsValue, setIsValue]=useState(false)
const [EditModal, setEditModal]=useState(false)
const items= useSelector((store)=> store.ItemsSlice)

const EditItems = ()=>{
 setEditModal(true)
}

useEffect(()=>{
  if(IsValue){
    
   setTimeout(()=>{
      setIsValue()
    },5000)
    
  }
},[])

const RemoveItems= async() =>{
  await dispatch(getDestroyThunk(item.id))
   setIsValue(true)

}
const EditaritemsUser=(data)=>{
  
  dispatch(getEditThunk(item.id,data))
 setEditModal()
}

  
    
  return (
    <>
    
      <div className='box_items'id={item.id}>      
          <h2 >{item.description}</h2>          
          <div className='bts'>
          <button className='btn_delete' onClick={RemoveItems}><box-icon name='trash'></box-icon></button>
          <button className='btn_delete' onClick={EditItems}><box-icon name='edit'></box-icon></button>
          </div>
        </div>       
        <div className={`Modal ${IsValue && 'Show'}`}>
          <h1>Items removed successfully👌</h1>
        </div>
        <div className={`Modal ${EditModal && 'vista'}`}>
          <span className='cerrar'onClick={()=>{setEditModal(false)}}>X</span>
         <form  onSubmit={handleSubmit(EditaritemsUser)}>
          <input {...register('description')}type='text' placeholder='Edit Items' name='description'/>
          <button className='btn_vista'><box-icon name='edit'></box-icon></button>
          </form>
        </div>

    </>
  )
}


