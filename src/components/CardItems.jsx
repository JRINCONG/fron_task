import React, { useEffect, useState } from 'react'
import { getDestroyThunk } from '../store/slice/Items.slice'
import { useDispatch, useSelector } from 'react-redux'

export const CardItems = ({item}) => {
const dispatch= useDispatch()
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
    },8000)
    
  }
},[items])

const RemoveItems= async() =>{
  await dispatch(getDestroyThunk(item.id))
   setIsValue(true)

}
const EditaritemsUser=()=>{
  
}

  
    
  return (
    <div>
      <div className='box_items'id={item.id}>
          <h2 >{item.description}</h2>
          <button className='btn_delete' onClick={RemoveItems}><box-icon name='trash'></box-icon></button>
          <button className='btn_delete' onClick={EditItems}><box-icon name='edit'></box-icon></button>

        </div>       
        <div className={`Modal ${IsValue && 'Show'}`}>
          <h1>Items removed successfully👌</h1>
        </div>
        <div className={`Modal ${EditModal && 'vista'}`}>
          <span className='cerrar'onClick={()=>{setEditModal(false)}}>x</span>
          <input type='text' placeholder='Edit Items'/>
          <button className='btn_vista' onClick={EditaritemsUser}><box-icon name='edit'></box-icon></button>

        </div>

    </div>
  )
}


