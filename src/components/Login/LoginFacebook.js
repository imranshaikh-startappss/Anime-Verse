import React, {useState} from 'react'
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import FacebookLogin from 'react-facebook-login';

const LoginFacebook = () => {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  const fbLogin = ()=>{
    document.getElementsByClassName("facebookButton")[0].click()
  }

  const responseFacebook = (response) => {
    console.log(response);
    // Login failed
    if (response.status === "unknown") {
      alert("Login failed!");
      setLogin(false);
      return false;
    }
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  return (
    <>
    <FacebookLogin
    cssClass='facebookButton d-none'
          id="facebookButton"
          appId="798587908608772"
          autoLoad={false}
          fields="name,email,picture"
          scope="public_profile,email,user_friends"
          callback={responseFacebook}
          icon="fa-facebook"
          />
      <Button onClick={fbLogin} className="facebook d-flex justify-content-between text-start my-2 " variant="contained"  >
              Sign in with Facebook
              <FacebookIcon/>
            </Button>
              
    </>
  )
}

export default LoginFacebook