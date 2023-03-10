const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

// Basic rate limiter
const limiter = rateLimit({
  windowMs: 10 * 60 * 10,
  max: 100,
});

app.use(limiter);
app.set('trust proxy', 1);

// Routes
app.use('/forecast', require('./routes'));

app.use(cors());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
