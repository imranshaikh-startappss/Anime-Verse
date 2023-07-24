import React from 'react'
import { data } from './styled'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LoginHeadre from './LoginHeadre';

const ResetPass = () => {
  const { LoginStyle } = data
return (<LoginStyle>

  <div className='container'  >
  <form >

    <LoginHeadre/>
    <div className='row justify-content-center'>
    <div className='col-sm-12 col-md-10 col-lg-8'>
      <div className='row justify-content-center loginGap'>
        <div className='col-sm-12 col-md-8 col-lg-5 my-5 text-start main '>
          <h4>Reset your password</h4>
          <p className='password-Para my-4'>We will send you an email to reset your password.</p>
         
          <TextField className=' w-100'  size='small' id="outlined-basic" label="Email" variant="outlined"  type="email"/>
         
         
         <div className='restpassword-btn my-3 gap-2'><Button  className="Register text-start w-50" variant="contained">
              Submit
            </Button>
            <Button className="btn-cancel w-50" variant="contained">
              Cancel
            </Button>
            
            </div> 

        </div>
        <div className='col-sm-12 col-md-8 col-lg-7 my-5 text-start px-5 main1 '>
          <h4>New Customer</h4>
          <p className='p my-4'>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</p>

          <Button className="Register text-start w-50 my-2" variant="contained">
            Register
          </Button>
        </div>


      </div>
    </div>
    </div>
    </form>
  </div>


</LoginStyle>
)
}


export default ResetPass