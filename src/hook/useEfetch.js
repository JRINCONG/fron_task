import axios, { Axios } from "axios"
import { useState } from "react";
import {BearerToken} from '../util/BearerToken'

export const useEfetch= ()=>{

const ruta= import.meta.env.VITE_API_URL;

const [User, setUser]=useState()
const [UserMe,setUserMe]=useState()
const [CreateUser, setCreateUser]=useState()

  const getCreateUser = async(data)=>{
    await axios.post(`${ruta}/users`,data)
    .then(resp=> setCreateUser(resp.data))
    .catch(error => console.log(error))
  }
  
    const getUser= async(data)=>{
       await axios.post(`${ruta}/users/login`,data)
        .then(resp => setUser(localStorage.setItem('token',resp.data.token)) )
        .catch(error => console.log(error))
    }

    const getUserMe= async()=>{
       await axios.get(`${ruta}/users/me`,BearerToken())
        .then(resp => setUserMe(resp.data))
        .catch(error => console.log(error))
    }

    return [User,getUser,UserMe,getUserMe,CreateUser, getCreateUser]
    
}
