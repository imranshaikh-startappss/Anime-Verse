import React from 'react'
import RegisterHeader from './RegisterHeader'
import TextField from '@mui/material/TextField';
import { data } from './styled'
import GoogleLogin from './GoogleLogin';
import LoginFacebook from './LoginFacebook'
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { LoginSchema } from './FormikYup';
import { useDispatch } from 'react-redux';
import {Product} from '../../store/slice/Slice';

const RegisterForm = () => {
  
  const dispatch = useDispatch();

  const { LoginStyle } = data
 
  const initialValues = {
    firstname:"",
    lastname:"",
    email: "",
    password: "",
    
  }
  const { values, handleBlur, touched, handleSubmit, handleChange, errors} = useFormik({
    initialValues,
    validationSchema: LoginSchema,


    onSubmit: (values, action) => {
      

      debugger;
      console.log("inside onsubnmit")
      if (values) {
        dispatch(Product({method:"POST",url: "/users" ,config: values}))
        action.resetForm()
      } else {
        console.log(errors)
      }
    
      
    }

  })

  return (<LoginStyle>
    <>
      <RegisterHeader />

      <form onSubmit={handleSubmit}>
        <div className='container my-5'>

          <div className='row'>
            <div className='res col-5 my-5 d-flex flex-column '>
              <h3 className='col-2 my-3'>Register </h3>


              <TextField size='small' id="outlined-basic" label="First Name" variant="outlined" name='firstname' className='textFiled my-2 ' type='text' value={values.firstname} autoComplete='off' onChange={handleChange} onBlur={handleBlur} />
              <div className='form-error d-flex'>{errors.firstname && touched.firstname ? (<p className='form-error d-flex'>{errors.firstname}</p>) : null}</div>

              <TextField size='small' id="outlined-basic" label="Last Name" variant="outlined" name='lastname' className='textFiled my-2' type='text' value={values.lastname} autoComplete='off' onChange={handleChange} onBlur={handleBlur} />
              <div className='form-error d-flex'>{errors.lastname && touched.lastname ? (<p className='form-error d-flex'>{errors.lastname}</p>) : null}</div>

              <TextField size='small' id="outlined-basic" label="Email" variant="outlined" name='email' className='textFiled my-2' type='text' value={values.name} autoComplete='off' onChange={handleChange} onBlur={handleBlur} />
              <div className='form-error d-flex'>{errors.email && touched.email ? (<p className='form-error d-flex'>{errors.email}</p>) : null}</div>

              <TextField size='small' type='password' id="outlined-basic" label="Password" variant="outlined" className='textFiled my-2 ' name='password' value={values.password} autoComplete='off' onChange={handleChange} onBlur={handleBlur} />
              <div className='form-error d-flex'>{errors.password && touched.password ? (<p >{errors.password}</p>) : null}</div>


              <p className='paratag my-3 d-flex '>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</p>

              <Button className="Register text-start" type = 'submit' variant="contained">
                Register
              </Button>

              <NavLink to='/login'><Button className="RegisterForm my-2  text-start" variant="contained">
                Log In

              </Button>
              </NavLink>
              <LoginFacebook />

              <GoogleLogin />
            </div>
          </div>

        </div>
      </form>

    </>
  </LoginStyle>
  )
}

export default RegisterForm