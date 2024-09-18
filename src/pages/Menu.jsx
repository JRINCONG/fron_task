import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Menu.css'
import { useEfetch } from '../hook/useEfetch'

const Menu = () => {
   
 const [,,UserMe,getUserMe]=useEfetch()
 
const valor = localStorage.getItem('token')

if(valor){
  
  console.log("hla")
 

}
useEffect(()=>{
  getUserMe()
},[])

 
  


  return (
    <div className='Navbar'>
      <ul className='container_items'>       
        <li><Link to='/items'>Add Items</Link></li>
        <li><Link to='/actividad'>Add Task</Link></li>
        <li><Link to='/create'>Crear Cuenta</Link></li>
        <li><Link to='/login'>Login</Link></li>
        {
          (UserMe)&& <li><Link to='/login'>{UserMe.firstName}</Link></li>
        }
       
      </ul>      
    </div>
  )
}

export default Menu
