const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const nodemailer = require('nodemailer');

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.post('/send-email', (req, res) => {
  // Set up Nodemailer and send email
});
