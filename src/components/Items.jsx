import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getItemsThunk, getONeThunk } from "../store/slice/Items.slice"

export const Items = ({iten}) => {
const dispatch=useDispatch()
const Items = useSelector((store)=> store.ItemsSlice)


useEffect(()=>{

  dispatch(getItemsThunk())
},[])
    
  return (
    <div>
        {
          Items?.map(element => (
            (element.id === iten.itemId) && <li>{element.description}</li>
          ))
        }
      
      
    </div>
  )
}


