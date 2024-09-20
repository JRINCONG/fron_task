import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Menu.css'
import { useEfetch } from '../hook/useEfetch'

const Menu = ({isRender}) => {
   
  const [Loca, setLocal]=useState()
 const [User,,UserMe,getUserMe]=useEfetch()
 
 const valor =localStorage.getItem('token')


useEffect(()=>{

  if(valor){
    getUserMe()
  }

},[isRender])


  


  return (
    <div className='Navbar'>
         
        
        
        {
          (UserMe)? 
          <ul className='Container_menu_user'>
           
            <li><Link to='/actividad'>Add Taks</Link></li>
            <li><Link to='/items'>Add Items</Link></li>
            <li><Link to='/'>{UserMe.usuario.firstName}</Link></li>
            </ul>
          :
           <ul className='Container_menu_user'>
             <li><Link to='/login'>Login</Link></li>
             <li><Link to='/create'>Create</Link></li>
           </ul>
          
        }
       
     
    </div>
  )
}

export default Menu
