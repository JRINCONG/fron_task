import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useEfetch } from '../hook/useEfetch'
import '../styles/CreateUser.css'

const CreateUsers = () => {
  
  const {handleSubmit, register, reset}=useForm()
  const [User,getUse,,,CreateUser, getCreateUser]=useEfetch()
  const [isValue, setIsvalue]=useState(false)


    useEffect(()=>{
        if(CreateUser){
          setTimeout(()=>{
            setIsvalue(false)
          },2000)
        }
    },[CreateUser])

    const Submit=(data)=>{
      getCreateUser(data)
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
        <input {...register('firstName')}type='text' name='firstName' placeholder='FirstName' className='Container_texto' autoFocus/>
        <input {...register('lastName')}type='text' name='lastName' placeholder='LastName' className='Container_texto'/>
        <input {...register('phone')}type='phone' name='phone' placeholder='Phone' className='Container_texto'/>
        <input {...register('email')}type='email' name='email' placeholder='Email' className='Container_texto'/>
        <input {...register('password')}type='password' name='password' placeholder='New password' className='Container_texto'/>
        
       </div>
       <button className='btn'>Send</button>
      </form>
      <div>{isValue && <p>Successfully Registered User👌</p>}</div>
    </div>
  )
}

export default CreateUsers
