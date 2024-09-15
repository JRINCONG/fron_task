import axios from "axios"
import { useState } from "react";

export const useEfetch= ()=>{
    
const ruta= import.meta.env.VITE_API_URL;

const [User, setUser]=useState()
  console.log(ruta+'users')
    const getUser= async(data)=>{
       await axios.post(`${ruta}users`,data)
        .then(resp => setUser(resp.data) )
        .catch(error => console.log(error))
    }

    return [User, getUser]
    
}
