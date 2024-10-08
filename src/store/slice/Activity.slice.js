import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BearerToken } from "../../util/BearerToken";

const Activity = createSlice({
    name:"Activity",
    initialState:[],
    reducers:{
        setActivity:(state,action) => state = action.payload,
        setAddActivity:(state ,{payload})=>[...state , payload]
    }

})

export const {setActivity, setAddActivity}=Activity.actions
export default Activity.reducer


const ruta=import.meta.env.VITE_API_URL;

export const PostActivityThunk= (data)=>(dispatch)=>{

    axios.post(`${ruta}/actividades`,data, BearerToken())
    .then(resp => dispatch(setAddActivity(resp.data)))
    .catch(error=> console.log(error))
}


export const getAllActivityThunk = ()=>(dispatch)=>{

    axios.get(`${ruta}/actividades`,BearerToken())
  .then(resp => dispatch(setActivity(resp.data)))
  .catch(error => console.log(error))
}