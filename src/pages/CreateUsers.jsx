import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useEfetch } from '../hook/useEfetch'
import '../styles/CreateUser.css'

const CreateUsers = () => {
  
  const {handleSubmit, register, reset}=useForm()
  const [User,getUser]=useEfetch()
  const [isValue, setIsvalue]=useState(false)


    useEffect(()=>{
        if(User){
          setTimeout(()=>{
            setIsvalue(false)
          },3000)
        }
    },[User])
    const Submit=(data)=>{
      getUser(data)
      reset({
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        password:""
      })
        setIsvalue(true)
    }
  
  return (
    <div className='Container_CreateUser'>
      <h1 className='texto'>Let's create an account</h1>



      <form  onSubmit={handleSubmit(Submit)} className='Contacto_Create'>

       <div className='Container_Input'>
        <input {...register('firstName')}type='text' name='firstName' placeholder='FirstName' className='Container_texto'/>
        <input {...register('lastName')}type='text' name='lastName' placeholder='LastName' className='Container_texto'/>
        <input {...register('phone')}type='phone' name='phone' placeholder='Phone' className='Container_texto'/>
        <input {...register('email')}type='email' name='email' placeholder='Email' className='Container_texto'/>
        <input {...register('password')}type='password' name='password' placeholder='New password' className='Container_texto'/>
        
       </div>
       <button className='btn'>Send</button>
      </form>
      <div>{isValue && <p>Usuario Creado</p>}</div>
    </div>
  )
}

export default CreateUsers
