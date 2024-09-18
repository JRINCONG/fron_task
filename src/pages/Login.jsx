
import '../styles/login.css';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEfetch } from '../hook/useEfetch';



export const Login = () => {
const { handleSubmit,reset, register }=useForm()
const navigate= useNavigate()
const [User,getUser]=useEfetch()
const [Register, setRegister,,getUserMe]=useState()



const NewUser = ()=>{

  navigate('/create')
}


useEffect(()=>{
  if(Register){
    navigate('/')
  }
},[Register])


const Submit = async(data)=>{
 await getUser(data)
  reset({
    email:"",
    password:""
  })
 
 await setRegister(localStorage.getItem('token'))
 getUserMe()
}

 

  return (
    <div className='Container_HomePage'>
      <h1 className='login'>Login</h1>
      <form className='contact' onSubmit={handleSubmit(Submit)}>
        <div className='container_input'>        
       <input {...register ('email')}type='text' name='email' placeholder='email' required/>        
       <input {...register ('password')} type='password' name='password' placeholder='Password' required/>    
        </div>
        <span className='recover'><a href='#'>Forgot your password ?</a></span>
        <div className='btn_btn'>
        <button className='btn send'>Send</button>       
        </div>
      </form>
      <button className='btn newcount' onClick={NewUser}>New Count</button>
      </div>
  )
}


