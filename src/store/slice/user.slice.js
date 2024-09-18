import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const ruta =  import.meta.env.VITE_API_URL;
const user = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        setUser:(state, {payload})=> [{...state,payload}]
        
    }
})


export const { setUser} = user.actions
export default user.reducer



export const getUserThunk = (data)=>(dispatch) =>{
   
   axios.post(`${ruta}users/login`,data)
    .then(resp => dispatch(setUser(resp.data)))
    .catch((error)=> console.log(error));
    

}