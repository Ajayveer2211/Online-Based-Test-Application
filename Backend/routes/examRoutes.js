const express = require('express');
const router = express.Router();
const { protect, auther } = require('../middleware/auth');
const {
  createExam,
  getExams,
  getExamById,
  updateExam,
  deleteExam
} = require('../controllers/examController');

// @desc    Create a new exam
// @route   POST /api/exams
// @access  Private (admin & teacher)
router.post('/exams', protect, auther, createExam);

// @desc    Get all exams
// @route   GET /api/exams
// @access  Private (admin & teacher)
router.get('/exams', getExams);

// @desc    Get single exam by ID
// @route   GET /api/exams/:id
// @access  Private (admin & teacher)
router.get('/exams/:id', protect, auther, getExamById);

// @desc    Update an exam
// @route   PUT /api/exams/:id
// @access  Private (admin & teacher)
router.put('/exams/:id', protect, auther, updateExam);

// @desc    Delete an exam
// @route   DELETE /api/exams/:id
// @access  Private (admin & teacher)
router.delete('/exams/:id', protect, auther, deleteExam);

module.exports = router;
