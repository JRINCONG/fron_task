import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const Validar = () => {
    const registro= localStorage.getItem('token')
   
    if(registro){
      return(
          <Outlet/>
  
      ) 
    }else{
          
      return <Navigate to ='/'/>
    }
  
 
}

