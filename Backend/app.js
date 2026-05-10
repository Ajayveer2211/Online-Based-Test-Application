const express = require('express'); 
const app = express();
const cors = require('cors'); 
//const methodOverride = require('method-override'); 
const studentRoutes = require('./routes/studentRoutes'); // <-- require here

 
// Import route handlers
const authRoutes = require('./routes/authRoutes'); 

const teacherRoutes = require('./routes/teacherRoutes');  

const examRoutes = require('./routes/examRoutes');  

const resultRoutes = require('./routes/resultsRoutes'); 




app.use(express.json()); // Parse incoming JSON payloads
app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
//app.use(methodOverride('_method')); // Allow HTTP method overrides

// Routes
app.get('/', (req, res) => {
  res.send('Server is running');  
});

// app.get('/ping', (req, res) => {
//   res.send('for');  
// });

// Routes for different functionalities 
app.use('/', authRoutes); // Routes for user 

// Fallback route for undefined API endpoints
// app.all('*', (req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });
  
// Error handling middleware


// app.use(errorHandler); // Global error handler
app.use('/', studentRoutes);
app.use('/', examRoutes);
app.use('/', teacherRoutes);
app.use('/', resultRoutes); 
// Export the app instance
module.exports = app;