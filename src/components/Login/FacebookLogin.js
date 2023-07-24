import React from 'react'
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';

const FacebookLogin = () => {
  return (
    <>
      <Button className="facebook text-start my-2 " variant="contained"  >
              Sign in with Facebook
              <FacebookIcon/>
            </Button>
    </>
  )
}

export default FacebookLogin