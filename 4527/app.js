const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');  // Import user routes

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);

// Default route for rendering the home page
app.get('/', (req, res) => res.render('index'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
