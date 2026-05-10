const express = require('express');
const router = express.Router();
const { protect, auther } = require('../middleware/auth');
const {
  getStudents, 
  getStudentById,
  getStudentFullDetails, // Add this
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController');

// Get all students (admin & teacher)
router.get('/students', protect, auther, getStudents);

// Get single student by ID
router.get('/students/:id', protect, auther, getStudentById);

// Update student
router.put('/students/:id', protect, auther, updateStudent);

// Delete student
router.delete('/students/:id', protect, auther, deleteStudent);
//Get full student details (new endpoint)
router.get('/students/:id/full', protect, auther, getStudentFullDetails);

module.exports = router;
