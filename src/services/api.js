// api.js
import axios from 'axios';
import config from '../config';

const API_ENDPOINT = config.API_ENDPOINT;

export const sendOTP = async (phoneNumber) => {
  try {
    const payload = {
      phoneNumber: config.userId,
    };

    const response = await axios.post(`${API_ENDPOINT}/auth/login`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Update environment variables based on the response
    config.requestId = response.data.requestId;
    config.token = response.data.token;

    console.log('Response from sendOTP:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
};

export default sendOTP;
