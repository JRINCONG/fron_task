import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllActivityThunk } from "../store/slice/Activity.slice"
import { CardActivity } from "../components/CardActivity"


export const ShowActivity = () => {

  const actividad= useSelector((store)=> store.ActivitySlice)
  const dispatch=useDispatch()
 
  useEffect(()=>{
    dispatch(getAllActivityThunk())
  },[])
 
  console.log(actividad)
  return (
    <div>
      {
        actividad.map((item)=>(

          <CardActivity
          key={item.id}
          item = {item}
          
          />
        ))
      }
    </div>
  )
}


