import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Otpverification.css';

const Otpverification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = location.state && location.state.phoneNumber ? location.state.phoneNumber : '';

  const [otp, setOtp] = useState(['', '', '', '']); 
  const [error, setError] = useState(false); 

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError(false); 
  };

  const handleVerify = () => {
    if (otp.join('') === '5678') {
      navigate('/songlist');
    } else {
      setError(true);
    }
  };

  const handleResendOTP = () => {
    console.log('Resending OTP...');
  };

  const handleUseAnotherNumber = () => {
    navigate('/login');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 card-style">
      <div className="card text-center p-3 border-0">
        <h2 className="font-weight-bold text-start text-sz mb-2 start-0">
          OTP Verification
        </h2>
        {error && <p className="text-danger mb-3">Incorrect OTP. Please try again.</p>}
        <p className="mb-2 font-sz text-start">
          We have sent an OTP to {phoneNumber}. Please enter the code to verify.
        </p>
        <div className="row justify-content-center">
          {otp.map((digit, index) => (
            <div key={index} className="col-3 otp-box">
              <input
                type="text"
                className="form-control text-center py-3 otp-input each-box"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
        <button className="btn btn-custom mt-3" onClick={handleVerify}>
          Verify
        </button>
        <div className="d-flex flex-column align-items-center mt-3">
          <button className="btn btn-link mb-1 btn-color" onClick={handleResendOTP}>
            Resend OTP
          </button>
          <button className="btn btn-link btn-color" onClick={handleUseAnotherNumber}>
            Use Another Number
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otpverification;
