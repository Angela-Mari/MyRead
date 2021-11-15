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
app.use('/api/users', require('./Server/routes/api/users'));
app.use('/api/auth', require('./Server/routes/api/auth'));
app.use('/api/posts', require('./Server/routes/api/posts'));
app.use('/api/twofa', require('./Server/routes/api/twofa'));

if (process.env.NODE_ENV === 'production') {
    console.log("Running in production mode");

    // Set static folder
    app.use(express.static('Client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'));
    });
}

// will run on 5000 if no environment variable set
const PORT = config.get('server.port') || 5000;

app.listen(PORT, () => console.log('Server started on port ' + PORT));