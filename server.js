const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// Middleware để phân tích body dạng JSON
app.use(express.json());

// Tạo transporter cho Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hieuminh735@gmail.com',  // Email của bạn
    pass: 'ojpn mblz ygas jclh'    // Mật khẩu ứng dụng bạn vừa tạo
  }
});

// API POST để gửi email
app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: 'hieuminh735@gmail.com',  // Email người gửi
    to: to,  // Email người nhận
    subject: subject,  // Tiêu đề email
    text: text  // Nội dung email
  };

  // Gửi email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error: ' + error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Khởi động server và lắng nghe ở port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
