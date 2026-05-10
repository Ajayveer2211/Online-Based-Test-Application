import React, { useState, useEffect } from 'react';
import ExamBuilder from './ExamBuilder';
import ExamPlayer from './ExamPlayer';
import examService from '../../services/examService';
import { toast } from 'react-toastify';
import '../../styles/Exams.css';

const Exams = () => {
  const [exams, setExams] = useState([]);
  const [showExamBuilder, setShowExamBuilder] = useState(false);
  const [editingExamId, setEditingExamId] = useState(null);
  const [playingExamId, setPlayingExamId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const allExams = await examService.getExams();
        setExams(Array.isArray(allExams) ? allExams : []);
      } catch (error) {
        toast.error('Failed to load exams');
        setExams([]);
      } finally {
        setLoading(false);
      }
    };
    fetchExams();
  }, []);

  const handleAddExam = () => {
    setShowExamBuilder(true);
    setEditingExamId(null);
  };

  const handleEditExam = (id, e) => {
    e.stopPropagation();
    setShowExamBuilder(true);
    setEditingExamId(id);
  };

  const handleDeleteExam = async (id, e) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this exam?")) {
      try {
        await examService.deleteExam(id);
        setExams(exams.filter(exam => exam._id !== id));
        toast.success('Exam deleted successfully');
      } catch (error) {
        toast.error('Failed to delete exam');
      }
    }
  };

  const handlePlayExam = (id) => {
    setPlayingExamId(id);
  };

  const handleSaveExam = async (newExam) => {
    try {
      if (editingExamId) {
        await examService.updateExam(editingExamId, newExam);
        setExams(exams.map(exam => 
          exam._id === editingExamId ? { ...exam, ...newExam } : exam
        ));
        toast.success('Exam updated successfully');
      } else {
        const createdExam = await examService.createExam(newExam);
        setExams([...exams, createdExam]);
        toast.success('Exam created successfully');
      }
      setShowExamBuilder(false);
    } catch (error) {
      toast.error('Failed to save exam');
    }
  };

  if (loading) return <div className="text-center mt-4">Loading exams...</div>;

  return (
    <div className="container">
      {showExamBuilder ? (
        <ExamBuilder 
          onSave={handleSaveExam}
          onCancel={() => setShowExamBuilder(false)}
          initialExam={editingExamId ? exams.find(q => q._id === editingExamId) : null}
        />
      ) : playingExamId ? (
        <ExamPlayer 
          exam={exams.find(q => q._id === playingExamId)}
          onReturnToExams={() => setPlayingExamId(null)}
        />
      ) : (
        <>
          <h2 className="mb-4">My Exams</h2>
          <div className="divider"></div>

          <div className="exam-container">
            {exams.map((exam) => (
              <div 
                key={exam._id} 
                className="card exam-card" 
                onClick={() => handlePlayExam(exam._id)}
              >
                <div className="card-body">
                  <div className="fav-icon">
                    <i className={`fa-solid ${exam.icon || 'fa-code'}`}></i>
                  </div>
                  <div>
                    <h5 className="card-title">{exam.name}</h5>
                    <p className="card-text">{exam.questions?.length || 0} question(s)</p>
                  </div>
                  <div className="mt-3 d-flex justify-content-between">
                    <button 
                      onClick={(e) => handleEditExam(exam._id, e)}
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                    <button  
                      onClick={(e) => handleDeleteExam(exam._id, e)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div 
              className="card exam-card add-new-card" 
              onClick={handleAddExam}
            >
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <div className="add-new-btn">+</div>
                <h5 className="add-new-text">Add New Exam</h5>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Exams;