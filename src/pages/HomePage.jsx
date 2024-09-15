import Label from '@mui/icons-material/Label'
import '../styles/login.css';
import React from 'react'
import { useForm } from 'react-hook-form'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Navigate, useNavigate } from 'react-router-dom';

const HomePage = () => {
const { handleSubmit,reset, register }=useForm()

const navigate= useNavigate()

const NewUser = ()=>{

  navigate('/create')
}
const Submit = (data)=>{

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

export default HomePage
