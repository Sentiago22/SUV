const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());  // Để hỗ trợ JSON request body

// API POST gửi email
app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body; // Lấy thông tin từ body request

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hieuminh735@gmail.com',  // Email của bạn
      pass: 'ojpn mblz ygas jclh'    // Mật khẩu ứng dụng bạn vừa tạo
    }
  });

  const mailOptions = {
    from: 'hieuminh735@gmail.com',
    to: to,  // Người nhận
    subject: subject,  // Tiêu đề
    text: text  // Nội dung email
  };

  // Gửi email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error: ' + error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);  // Gửi thành công
  });
});

// Lắng nghe cổng 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
