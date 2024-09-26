import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItemsThunk } from '../store/slice/Items.slice'

export const SelectAddtask = ({ SelectItemsId, setSelectItemsId}) => {
const selectItems =useRef()
const items = useSelector((store) => store.ItemsSlice)
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(getItemsThunk())
},[SelectItemsId])

const selection = ()=>{
   
    setSelectItemsId(parseInt(selectItems.current.value))
}

  return (
    <div>
        <select className='Select_items' onChange={selection}   ref={selectItems} >
          <option value="" className='InputCategoriOption'>Select your items</option>
          {
            items?.map((item,index)=>(
                <option key={index} value={item.id}>{item.description}</option>
            ))
          }
        </select>
      
    </div>
  )
}

