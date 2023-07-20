
import React, { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { StyledSubsc } from './sub-style';


const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Mail",JSON.stringify(email))
    setSubscribed(true)
      };

  return (
    <StyledSubsc>
    <div>
      {subscribed ? (
        <p>Thank you for subscribing !</p>
      ) : (
        <form onSubmit={handleSubmit} >
          <label className='icon' ><MailOutlineIcon /></label>
          <input
          
            type="email"
            id="email"
            placeholder="Enter your email"
            
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit"><ArrowForwardIcon/></button>
        </form>
      )}
    </div>
    </StyledSubsc>
  );
};

export default SubscriptionForm;