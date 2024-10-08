import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getItemsThunk, getONeThunk } from "../store/slice/Items.slice"
import{ v4 }from 'uuid'
export const Items = ({iten}) => {
const dispatch=useDispatch()
const Items = useSelector((store)=> store.ItemsSlice)


useEffect(()=>{

  dispatch(getItemsThunk())
},[])
    
  return (
    <div key={v4()}>
        {
          Items?.map((element, index) => (
            (element.id === iten.itemId) && <li key={v4()}>{element.description}</li>
          ))
        }
      
      
    </div>
  )
}


