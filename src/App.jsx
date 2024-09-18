import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import {Login} from './pages/Login'
import CreateUsers from './pages/CreateUsers'
import Menu from './pages/Menu'
import './index.css';


import {Addtaks} from './pages/Addtaks'
import { Validar } from './components/Validar'
import{ AddItems }from './pages/AddItems'

const App = () => {
  return (
    <div className="container">
       <Menu/>
       <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/create' element={<CreateUsers/>}/>

       <Route element={<Validar/>}>
       <Route path='/items' element={<AddItems/>}/>
       <Route path='/actividad' element={<Addtaks/>}/>
       </Route>

       <Route path='*' element={<Error/>}/>

       </Routes>
    </div>
  )
}

export default App
