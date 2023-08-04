import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'



const Register = () => {
  return (
    <>
        <div className='col-sm-12 col-md-8 col-lg-7 my-5 text-start px-5 main1 '>
            <h4>New Customer</h4>
            <p className='p my-4'>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</p>

        <NavLink to="/registerform">   <Button  className="Register text-start" variant="contained">
              Register
            </Button>
            </NavLink>
          </div>
    </>
  )
}

export default Register