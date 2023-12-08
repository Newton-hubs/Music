// server.js
const express = require('express');
const cors = require('cors');
const app = express();

// Use the cors middleware
app.use(cors({
  origin: 'http://localhost:3000',
}));

// Handle preflight CORS requests
app.options('/auth/verify-otp', cors());

// ... other middleware and routes setup

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
