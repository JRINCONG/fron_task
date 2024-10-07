import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
             <li>
              <NavLink className={ (val)=>`nav_select ${ val.isActive ? 'Active':''}`} to='/actividades'>Activity</NavLink>
              </li>
        
            <li><NavLink  className={ (val)=> `nav_select ${ val.isActive ? 'Active':'' }`} to='/Add_Actividad'>Add 
            activities</NavLink></li>
            
            <li>
              <NavLink className={ (val)=>`nav_select ${ val.isActive ? 'Active':''}`} to='/items'>Add Items</NavLink>
              </li>
             
            <li>{UserMe.usuario.firstName}</li>
            <li><span className='btn_logout'>Logout</span></li>
            
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
