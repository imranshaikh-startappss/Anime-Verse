import { data } from './styled'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TextField from '@mui/material/TextField';
import MyfetchMiddleWare from '../../axios/GlobalInstance';
const Login = () => {

  const { LoginStyle } = data
  return (<LoginStyle>
    <div className='container'  >
      <h1>Log In</h1>

      <div className='home'>
        <span className='mouse'>Home</span>
        <span > <ArrowForwardIosIcon className='icon' /> </span>
        <span>Account</span>
      </div>
   
    
      <div className='row'>
      <div className='col-6' onClick={()=>{
        MyfetchMiddleWare("get","/createuser", {
          
        })
      }}><h4>Log In</h4>
      <div className='textInput mt-4'>
      <TextField id="outlined-basic" className='textFiled my-2 ms-5' label="Email"  /><br/>
      <TextField id="outlined-basic"  label="Password"  />
      
      </div>
          

      </div>

      </div>

</div>


  </LoginStyle>
  )
}

export default Login




