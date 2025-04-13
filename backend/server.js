const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const reportRouter = require('./routes/report');
require('dotenv').config();

const app = express();

// Environment variables
const port = process.env.PORT || 5000;
const nodeEnv = process.env.NODE_ENV || 'development';

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // Logging middleware

// API Routes
app.use('/api', reportRouter);

// Health check route
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    environment: nodeEnv,
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  
  // API Error Response
  res.status(err.status || 500).json({
    success: false,
    error: {
      message: err.message || 'Internal Server Error',
      ...(nodeEnv === 'development' && { stack: err.stack })
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: {
      message: 'Route not found'
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running in ${nodeEnv} mode on port ${port}`);
});