import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import {Login} from './pages/Login'
import CreateUsers from './pages/CreateUsers'
import Menu from './pages/Menu'
import './index.css';


import {Addtaks} from './pages/Addtaks'
import { Validar } from './components/Validar'
import{ AddItems }from './pages/AddItems'
import { ShowActivity } from './pages/ShowActivity'
import { Error } from './pages/Error'

const App = () => {
  const [isRender, setisRender]= useState()
  return (
    <div className="container">
       <Menu 
       isRender={isRender}/>
       <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/login' element={<Login setisRender={setisRender}/>}/>
       <Route path='/create' element={<CreateUsers/>}/>

       <Route element={<Validar/>}>
       <Route path='/items' element={<AddItems/>}/>
       <Route path='/actividad' element={<Addtaks/>}/>
       <Route path='/show_activity' element={<ShowActivity/>}/>       
       </Route>

       <Route path='/*' element={<Error/>}/>

       </Routes>
    </div>
  )
}

export default App
