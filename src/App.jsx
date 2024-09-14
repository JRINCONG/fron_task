import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import CreateUsers from './pages/CreateUsers'
import Menu from './pages/Menu'
import './index.css';

const App = () => {
  return (
    <div className="container">
       <Menu/>
       <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/create' element={<CreateUsers/>}/>


       </Routes>
    </div>
  )
}

export default App
