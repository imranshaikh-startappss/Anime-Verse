import React from 'react'
import { data } from './styled'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NavLink } from 'react-router-dom';

const LoginHeadre = () => {
    const { LoginStyle } = data
  return (<LoginStyle>
    <>
 <div className='container'  >
  <h1>Log In</h1>  
  <div className='home my-3'>
        <NavLink className='mouse' to="/">Home</NavLink>
        <span > <ArrowForwardIosIcon className='icon' /> </span>
        <span>Account</span>
      </div>
 </div>
    </>
    </LoginStyle>
  )
}

export default LoginHeadre