import { data } from './styled'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

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
      <div className='row justify-content-center'>
      <div className='col-sm-12 col-md-10 col-lg-8'>
        <div className='row justify-content-center loginGap'>
          <div className='col-sm-12 col-md-8 col-lg-5 my-5 text-start main '>
            <h4>Log In</h4>
            <div className='textInput mt-4 d-flex flex-column  '>
              <TextField id="outlined-basic" label="Email" variant="outlined" className='textFiled my-2   ' />

              <TextField id="outlined-basic" label="Password" variant="outlined" className='textFiled my-2 ' />


              <div className='forgotPassword my-4'>Forgot your password?</div>

              <Button className="Register text-start" variant="contained">
              Sign In
            </Button>

            <Button className="facebook text-start my-2 " variant="contained"  >
              Sign in with Facebook
              <FacebookIcon/>
            </Button>
            <Button className="google text-start"  variant="contained">
              Sign in with Google
              <GoogleIcon/>

            </Button>



            </div>


          </div>
          <div className='col-sm-12 col-md-8 col-lg-7 my-5 text-start px-5 main1 '>
            <h4>New Customer</h4>
            <p className='p my-4'>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</p>

            <Button className="Register text-start" variant="contained">
              Register
            </Button>
          </div>


        </div>
      </div>
      </div>
    </div>


  </LoginStyle>
  )
}

export default Login




