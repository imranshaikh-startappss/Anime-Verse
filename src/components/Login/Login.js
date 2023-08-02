import { data } from './styled'
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { LoginSchema } from './FormikYup';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoginHeadre from './LoginHeadre';
import Register from './Register';
import LoginFacebook from './LoginFacebook';
import GoogleLogin from './GoogleLogin';

const Login = () => {
  const dispatch = useDispatch()
  const { LoginStyle } = data
  const initialValues = {
    email: "",
    password: "",
  }
  const { values, handleBlur, touched, handleSubmit, handleChange, errors, handleReset } = useFormik({
    initialValues,
    validationSchema: LoginSchema,


    onSubmit: (values, action) => {
      debugger;
      console.log("inside onsubnmit")
      if (values) {
        dispatch(Login(values))
        action.resetForm()
      } else {
        console.log(errors)
      }
      handleReset();
    }

  })


  return (<LoginStyle>

    <div className='container'  >
      <LoginHeadre />
      <form onSubmit={handleSubmit}>

        <div className='row justify-content-center'>
          <div className='col-sm-12 col-md-10 col-lg-8'>
            <div className='row justify-content-center loginGap'>
              <div className='col-sm-12 col-md-8 col-lg-5 my-5 text-start main '>
                <h4>Log In </h4>
                <div className='textInput mt-4 d-flex flex-column  '>
                  <TextField size='small' id="outlined-basic" label="Email" variant="outlined" name='email' className='textFiled my-2' type='text' value={values.name} autoComplete='off' onChange={handleChange} onBlur={handleBlur} />
                  <div className='form-error d-flex'>{errors.email && touched.email ? (<p className='form-error d-flex'>{errors.email}</p>) : null}</div>

                  <TextField size='small' type='password' id="outlined-basic" label="Password" variant="outlined" className='textFiled my-2 ' name='password' value={values.password} autoComplete='off' onChange={handleChange} onBlur={handleBlur} />
                  <div className='form-error'>{errors.password && touched.password ? (<p >{errors.password}</p>) : null}</div>

                  <NavLink className='forgotPassword my-4' to="/resetpass" >Forgot your password? </NavLink>

                  <Button type='submit' className="Register text-start" variant="contained">
                    Sign In
                  </Button>
                  <LoginFacebook />
                  <GoogleLogin />
                </div>
              </div>
              <Register />
            </div>
          </div>
        </div>
      </form>
    </div>


  </LoginStyle>
  )
}

export default Login




