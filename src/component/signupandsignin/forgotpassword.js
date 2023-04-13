import { Button } from '@mui/material';
import React, { useState } from 'react';
import Nav from '../Nav';
import "./login.css"
function ForgotPassword() {
    const [email, setEmail] = useState('');
   
    const [emailError, setEmailError] = useState('');
 
    const handleSubmit = (e) => {
      e.preventDefault();
      // handle login logic here
     
      console.log(email);
    };
 
    const validateEmail = (email) => {
      // email validation regex
      const re = /\S+@\S+\.\S+/;
      if (!re.test(email)) {
        setEmailError('Invalid email format');
      } else {
        setEmailError('');
      }
    };
 
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      validateEmail(e.target.value);
    };
  return (
    <div>
        <Nav/>
    <div className="card mx-auto mt-5" id="register">
      <div className="card-header text-center">
        <h3 className="card-title">Forgot Password</h3>
      </div>
      <div className="card-body text-center">
       
          <div className="registers">
            <div className="row mb-4"></div>
    <div className='box'>
       
        <form onSubmit={handleSubmit}>
        <label>
        Email:&nbsp;&nbsp;
        <input type="email" value={email} onChange={handleEmailChange} />
        {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
      </label>&nbsp;&nbsp;&nbsp;&nbsp;
      <Button type="submit" disabled={emailError} variant="contained" color='error'>Verify</Button>
      <h6><a href="Login" style={{textDecoration:'none'}}>return to login!</a></h6>
      </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ForgotPassword;

