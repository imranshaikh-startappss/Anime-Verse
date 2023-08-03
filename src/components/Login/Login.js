import { data } from "./styled";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { useFormik } from "formik";
import { LoginSchema } from "./FormikYup";
import { useDispatch } from "react-redux";

import MyfetchMiddleWare from "../../axios/GlobalInstance";
const Login = () => {
  const dispatch = useDispatch();
  const { LoginStyle } = data;
  const initialValues = {
    email: "",
    password: "",
  };
  const { values, handleBlur, touched, handleSubmit, handleChange, errors } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,

      onSubmit: (values, action) => {
        if (values) {
          dispatch(Login(values));
          action.resetForm();
        } else {
          console.log(errors);
        }
      },
    });
  // console.log(errors)

  return (
    <LoginStyle>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Log In</h1>

          <div className="home my-3">
            <span className="mouse">Home</span>
            <span>
              {" "}
              <ArrowForwardIosIcon className="icon" />{" "}
            </span>
            <span>Account</span>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-8">
              <div className="row justify-content-center loginGap">
                <div className="col-sm-12 col-md-8 col-lg-5 my-5 text-start main ">
                  <h4>Log In </h4>
                  <div className="textInput mt-4 d-flex flex-column  ">
                    <TextField
                      size="small"
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      name="email"
                      className="textFiled my-2"
                      type="text"
                      value={values.name}
                      autoComplete="off"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="form-error">
                      {errors.email && touched.email ? (
                        <p className="form-error">{errors.email}</p>
                      ) : null}
                    </div>
                    {/* <p className='form-error'>Please Enter Valid Email</p> */}

                    <TextField
                      size="small"
                      type="password"
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      className="textFiled my-2 "
                      name="password"
                      value={values.password}
                      autoComplete="off"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="form-error">
                      {errors.password && touched.password ? (
                        <p>{errors.password}</p>
                      ) : null}
                    </div>
                    {/* <p className='form-error'>Password cannot be empty</p> */}

                    <div className="forgotPassword my-4">
                      Forgot your password?
                    </div>

                    <Button
                      type="submit"
                      className="Register text-start"
                      variant="contained"
                    >
                      Sign In
                    </Button>

                    <Button
                      className="facebook text-start my-2 "
                      variant="contained"
                    >
                      Sign in with Facebook
                      <FacebookIcon />
                    </Button>
                    <Button className="google text-start" variant="contained">
                      Sign in with Google
                      <GoogleIcon />
                    </Button>
                  </div>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-7 my-5 text-start px-5 main1 ">
                  <h4>New Customer</h4>
                  <p className="p my-4">
                    Sign up for early Sale access plus tailored new arrivals,
                    trends and promotions. To opt out, click unsubscribe in our
                    emails.
                  </p>

                  <Button className="Register text-start" variant="contained">
                    Register
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </LoginStyle>
  );
};

export default Login;
