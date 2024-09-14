import Label from '@mui/icons-material/Label'
import '../styles/login.css';
import React from 'react'
import { useForm } from 'react-hook-form'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const HomePage = () => {
const { handleSubmit,reset, register }=useForm()

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
        <button className='btn newcount'>New Count</button>
        </div>
      </form>
      </div>
  )
}

export default HomePage
