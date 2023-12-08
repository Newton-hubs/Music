import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';
import { sendOTP } from '../services/api'; 
import config from '../config';
import '../App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Login.css';
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (valid) {
      try {
        const response = await sendOTP(phoneNumber);
        const requestId = response.requestId;
        config.requestId = requestId;
        navigate('/verify-otp',{state:{phoneNumber}});
      } catch (error) {
        console.error('Error sending OTP:', error);
      }
    }
  };
  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7"> 
          <div className="card mt-5 custom-card border-0">
            <div className="card-body">
              <h2 className="card-title change-color">Sign In</h2>
              <p className="card-text small-text">
                Please enter your mobile number to login. We will send an OTP to verify your number
              </p>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <PhoneInput
                    country={'in'}
                    value={phoneNumber}
                    onChange={handleChange}
                    inputProps={{
                      required: true,
                      className: 'form-control', 
                    }}
                  />
                </div>
                {!valid && <p className="text-danger">Please enter a valid phone number.</p>}
                <button type="submit" className="btn btn-custom">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
