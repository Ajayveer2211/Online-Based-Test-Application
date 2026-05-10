// Axios import kar rahe hain HTTP requests ke liye
import axios from 'axios';

// ======================== GET ALL TEACHERS ========================
const getTeachers = async () => {
  const token = localStorage.getItem('token'); // localStorage se token nikal rahe hain

  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Header me token bhej rahe hain (Bearer token format me)
    },
  };

  // GET request se saare teachers fetch kar rahe hain
  const response = await axios.get('http://localhost:5000/teachers', config);

  return response.data; // Server se aayi data return kar rahe hain
};

// ======================== GET TEACHER BY ID ========================
const getTeacherById = async (id) => {
  const token = localStorage.getItem('token'); // localStorage se token le rahe hain

  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Header me token bhej rahe hain
    },
  };

  // GET request se ek specific teacher ka data le rahe hain (ID ke basis par)
  const response = await axios.get(`http://localhost:5000/teachers/${id}`, config);

  return response.data; // Server ka data return kar rahe hain
};

// ======================== UPDATE TEACHER ========================
const updateTeacher = async (id, teacherData) => {
  const token = localStorage.getItem('token'); // localStorage se token le rahe hain

  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Header me token bhej rahe hain
    },
  };

  // PUT request se teacher ka data update kar rahe hain (ID ke basis par)
  const response = await axios.put(
    `http://localhost:5000/teachers/${id}`,
    teacherData,
    config
  );

  return response.data; // Server ka updated data return kar rahe hain
};

// ======================== DELETE TEACHER ========================
const deleteTeacher = async (id) => {
  const token = localStorage.getItem('token'); // localStorage se token le rahe hain

  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Header me token bhej rahe hain
    },
  };

  // DELETE request se teacher ko delete kar rahe hain (ID ke basis par)
  const response = await axios.delete(
    `http://localhost:5000/teachers/${id}`,
    config
  );

  return response.data; // Server ka response return kar rahe hain
};

// ======================== EXPORT FUNCTIONS ========================
export {
  getTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
};
