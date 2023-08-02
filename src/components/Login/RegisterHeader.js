import React from 'react'
import { NavLink } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { data } from './styled'

const RegisterHeader = () => {
    const { LoginStyle } = data
  return (<LoginStyle>
    <div className='container my-3'   >
    <h1>Register</h1>  
    <div className='home my-3'>
          <NavLink className='mouse' to="/">Home</NavLink>
          <span > <ArrowForwardIosIcon className='icon' /> </span>
          <span>Create Account</span>
        </div>
   </div>
   </LoginStyle>
  )
}

export default RegisterHeader