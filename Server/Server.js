const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const config = require('config');
const cors = require('cors');

const app = express();
app.use(cors());

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/twofa', require('./routes/api/twofa'));

// will run on 5000 if no environment variable set
const PORT =  5000;

app.listen(PORT, () => console.log('Server started on port ' + PORT));