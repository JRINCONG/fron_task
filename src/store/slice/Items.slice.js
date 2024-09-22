import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BearerToken } from "../../util/BearerToken";

const Items= createSlice({
    name:'Items',
    initialState:[],
    reducers:{
        setShowItems:(state,action)=>state = action.payload,
        setAddItems:(state,{payload})=>[...state, payload],
        setDestroyItems:(state,{payload})=>[...state].filter((item)=> item.id !== payload),
        setEditItems:(state,{payload})=>[...state].forEach((item)=>(item.id === payload.id ? item.description = payload.description: item))
        
    }
})

export const {setShowItems, setAddItems, setDestroyItems,setEditItems}=Items.actions
export default Items.reducer

const ruta= import.meta.env.VITE_API_URL;
export const getItemsThunk = () => (dispatch) =>{
   
    axios.get(`${ruta}/items`,BearerToken())
    .then(resp => dispatch(setShowItems(resp.data)))
    .catch(error=>console.log(error))

}

export const gettAdditemsThunk = (data) =>(dispatch)=>{

    axios.post(`${ruta}/items`,data,BearerToken())
    .then(resp=> dispatch(setAddItems(resp.data)))
    .catch(error => console.log(error))
}

export const getDestroyThunk = (id) => (dispatch)=>{
  
        axios.delete(`${ruta}/items/${id}`,BearerToken())
       .then(resp=> dispatch(setDestroyItems(id)))
       .catch(error => console.log(error))
}

export const getEditThunk =(id,data)=>(dispatch)=>{
       axios.put(`${ruta}/items/${id}`,data, BearerToken())
       .then(resp => dispatch(setEditItems(resp.data)))
       .catch(error => console.log(error))
}





