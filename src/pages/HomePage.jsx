import Label from '@mui/icons-material/Label'
import '../styles/Homepage.css';
import React from 'react'
import { useForm } from 'react-hook-form'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';





const HomePage = () => {



  return (
    <div className='Container_homepage'>
      <h1 className='title'>Welcome to New Tasks</h1>
      <figure className='container_img'>
        <img src='../img/6681441.png'/>
      </figure>
      
    </div>
  )
}

export default HomePage
