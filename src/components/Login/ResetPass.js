import React from 'react'
import { data } from './styled'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LoginHeadre from './LoginHeadre';
import Register from './Register';

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
         
         
         <div className='restpassword-btn d-flex justify-content-center gap-3 my-3 gap-2'><Button  className="Register text-start w-50" variant="contained">
              Submit
            </Button>
            <Button className="btn-cancel w-50" variant="contained">
              Cancel
            </Button>
            
            </div> 

        </div>
        
        <Register/>


      </div>
    </div>
    </div>
    </form>
  </div>


</LoginStyle>
)
}


export default ResetPass