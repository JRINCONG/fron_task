import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Menu.css'

const Menu = () => {
  return (
    <div className='Navbar'>
      <ul className='container_items'>       
        <li><Link to='/create'>Crear Cuenta</Link></li>
      </ul>      
    </div>
  )
}

export default Menu
