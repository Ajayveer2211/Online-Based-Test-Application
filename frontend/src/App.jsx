import { useState } from 'react'

import './App.css'
import Home from './Pages/Home'
import Navbar from './Component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Features from './Pages/Features'
import Footer from './Component/Footer'

import Aboutus from './Pages/Aboutus'
import Contact from './Pages/Contact'

import ErrorBoundary from "./Component/ErrorBoundary.jsx"
import LoginForm from './Component/Auth/LoginForm.jsx'
import RegisterForm from './Component/Auth/RegisterForm.jsx'
import AdminDashboard from './Pages/Admin/Dashboard.jsx'
import { Protect, PublicRoute } from './Component/ProtectRoute';
import StudentDashboard from './Pages/Student/StudentDashboard.jsx'
import Exam from './Pages/Admin/Exam.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
    <Navbar/>
    <ErrorBoundary>
    <Routes>
      {/* <Features/> */}
       <Route path="/" element={<Home/>}/>
       <Route path="/features" element={<Features/>}/>
       <Route path="/aboutus" element={<Aboutus/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/login" element={<LoginForm/>}/>
       //<Route path="/teacher" element={<LoginForm/>}/>
       
       <Route path="/register" element={<RegisterForm/>} />
       
        <Route path="/admin" element={<Protect role="admin"><AdminDashboard/></Protect>}></Route> 
        <Route path="/student" element={<Protect role="student"><StudentDashboard/></Protect>} /> 
         <Route path="exams" element={<Exam/>} />
      </Routes>
      </ErrorBoundary>
      <Footer/>
      </BrowserRouter>
     
    </>
  )
}

export default App
