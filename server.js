const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const app = express();

// Use helmet for security
app.use(helmet());

// Use compression for performance
app.use(compression());

// Use morgan for logging
app.use(morgan('combined'));

// Add routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});