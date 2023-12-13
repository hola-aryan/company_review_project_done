const path = require('path');
const express = require('express');

// Cross-Origin Resource Sharing
const cors = require('cors');

const sequelize = require('./util/database');

const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Add JSON body parsing middleware

// Routes
const reviewsRoutes = require('./routes/reviewsRoutes');

// Middleware function that serves static files and assets from frontend directory.
app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/', reviewsRoutes);

app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, './frontend/index.html');
  res.sendFile(indexPath);
});

// Database synchronization
// method that synchronizes all defined models with the database by creating or updating the database table schema based on the model definitions
sequelize.sync()
  .then(() => {
    console.log('Database synchronized.');
    // Start the server after the database syncs successfully
    app.listen(3306 || process.env.PORT , () => {
      console.log('Server is running on port 2500');
    });    
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });