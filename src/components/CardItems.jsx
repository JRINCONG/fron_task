import React, { useEffect, useState } from 'react'
import { getDestroyThunk } from '../store/slice/Items.slice'
import { useDispatch, useSelector } from 'react-redux'

export const CardItems = ({item}) => {
const dispatch= useDispatch()
const [IsValue, setIsValue]=useState(false)
const items= useSelector((store)=> store.ItemsSlice)
const EditItems = ()=>{
  console.log(item.id)
}

useEffect(()=>{
  if(IsValue){
    
    setTimeout(()=>{
      setIsValue()
    },8000)
    
  }
},[items])

const RemoveItems= () =>{
  dispatch(getDestroyThunk(item.id))
   setIsValue(true)

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

    </div>
  )
}


