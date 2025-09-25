const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://primedesk.netlify.app', // Your production Netlify domain
    'https://primedesk-solutions-bpo.netlify.app' // Alternative domain if needed
  ],
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create nodemailer transporter with Hostinger SMTP settings
const createTransporter = () => {
  const config = {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
      ciphers: 'SSLv3'
    },
    debug: true, // Enable debug logs
    logger: true // Enable logger
  };
  
  console.log('SMTP Configuration:', {
    host: config.host,
    port: config.port,
    secure: config.secure,
    user: config.auth.user,
    passLength: config.auth.pass ? config.auth.pass.length : 0
  });
  
  return nodemailer.createTransport(config); // Fixed: removed 'er' from createTransporter
};

// Test route
app.get('/', (req, res) => {
  res.json({ 
    message: 'PrimeDesk Solutions BPO Email API is running!',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Email service is healthy' });
});

// Send email route
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message'
      });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    const transporter = createTransporter();

    // Test the connection first
    try {
      await transporter.verify();
      console.log('✅ SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('❌ SMTP connection failed:', verifyError);
      throw new Error(`SMTP connection failed: ${verifyError.message}`);
    }

    // Email content
    const mailOptions = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #FF6600, #e55c00); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
            <p style="color: white; margin: 5px 0 0 0;">PrimeDesk Solutions BPO Website</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #eee;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #FF6600; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #FF6600; margin-top: 0;">Message</h3>
              <div style="background: #f8f8f8; padding: 15px; border-radius: 5px; border-left: 4px solid #FF6600;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                This email was sent from the PrimeDesk Solutions BPO contact form<br>
                <a href="mailto:${email}" style="color: #FF6600;">Reply to ${name}</a>
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Submitted: ${new Date().toLocaleString()}

Message:
${message}

---
This email was sent from the PrimeDesk Solutions BPO contact form.
Reply to: ${email}
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully!',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 PrimeDesk Email Server running on port ${PORT}`);
  console.log(`📧 SMTP Host: ${process.env.SMTP_HOST}`);
  console.log(`📬 Sending emails to: ${process.env.TO_EMAIL}`);
  console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL}`);
});

module.exports = app;