// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   FaUserGraduate,
//   FaChalkboardTeacher,
//   FaUserShield,
//   FaIdCard,
//   FaGraduationCap,
//   FaLaptopCode,
//   FaLock,
// } from "react-icons/fa";
// import "./Register.css";

// const departments = [
//   "Computer Science",
//   "Mathematics",
//   "Physics",
//   "Chemistry",
//   "Biology",
//   "English",
// ];

// const designations = [
//   "Professor",
//   "Assistant Professor",
//   "Lecturer",
//   "HOD",
//   "Administrator",
// ];

// const Register = () => {
//   const navigate = useNavigate();

//   const [role, setRole] = useState("Student");

//   // teacher fields
//   const [department, setDepartment] = useState("");
//   const [designation, setDesignation] = useState("");
//   const [expertiseInput, setExpertiseInput] = useState("");
//   const [expertiseList, setExpertiseList] = useState([]);

//   // student fields
//   const [university, setUniversity] = useState("");
//   const [course, setCourse] = useState("");

//   // basic / security fields
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [dob, setDob] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const addExpertise = () => {
//     const val = expertiseInput.trim();
//     if (val && !expertiseList.includes(val)) {
//       setExpertiseList((prev) => [...prev, val]);
//       setExpertiseInput("");
//     }
//   };

//   const removeExpertise = (item) => {
//     setExpertiseList((prev) => prev.filter((i) => i !== item));
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     // No confirm password check here anymore

//     // Prepare payload to send
//     const payload = {
//       role,
//       fullName,
//       email,
//       mobile,
//       dob,
//       username,
//       password,
//     };

//     if (role === "Teacher") {
//       payload.department = department;
//       payload.designation = designation;
//       payload.expertise = expertiseList;
//     } else if (role === "Student") {
//       payload.university = university;
//       payload.course = course;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/std/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         alert("Registration failed: " + (errorData.message || "Unknown error"));
//         return;
//       }

//       const data = await response.json();
//       alert("Registration successful!");
//       navigate("/dashboard"); // Redirect to Dashboard page
//     } catch (error) {
//       alert("Error: " + error.message);
//     }
//   };

//   return (
//     <div className="register-container py-5">
//       <div className="container bg-white p-4 rounded shadow">
//         {/* HEADER BLOCK */}
//         <div
//           className="header-block"
//           style={{
//             background:
//               role === "Admin"
//                 ? "linear-gradient(90deg, #7c3aed, #5b21b6)"
//                 : "linear-gradient(90deg, #0d47a1, #1565c0)",
//           }}
//         >
//           <h2>Create Your Account</h2>
//           <p>Join the OBT examination system</p>
//         </div>

//         {/* Role Selection */}
//         <h5 className="section-title">
//           <FaIdCard className="me-2" /> Select Your Role
//         </h5>
//         <div className="d-flex justify-content-around mb-4">
//           {["Student", "Teacher", "Admin"].map((item) => (
//             <div
//               key={item}
//               role="button"
//               tabIndex={0}
//               onClick={() => setRole(item)}
//               className={`role-card p-3 text-center ${
//                 role === item ? "active-role" : ""
//               } ${item === "Admin" ? "admin-role" : ""}`}
//             >
//               {item === "Student" && <FaUserGraduate size={30} />}
//               {item === "Teacher" && <FaChalkboardTeacher size={30} />}
//               {item === "Admin" && <FaUserShield size={30} />}
//               <p className="mt-2">{item}</p>
//             </div>
//           ))}
//         </div>

//         <form onSubmit={handleRegister}>
//           {/* Basic Information */}
//           <h5 className="section-title">
//             <FaIdCard className="me-2" /> Basic Information
//           </h5>
//           <div className="row mb-3">
//             <div className="col-md-6">
//               <input
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 type="text"
//                 className="form-control mb-3"
//                 placeholder="Full Name"
//                 required
//               />
//             </div>
//             <div className="col-md-6">
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="email"
//                 className="form-control mb-3"
//                 placeholder="Email Address"
//                 required
//               />
//             </div>
//             <div className="col-md-6">
//               <input
//                 value={mobile}
//                 onChange={(e) => setMobile(e.target.value)}
//                 type="text"
//                 className="form-control mb-3"
//                 placeholder="Mobile Number"
//               />
//             </div>
//             <div className="col-md-6">
//               <input
//                 value={dob}
//                 onChange={(e) => setDob(e.target.value)}
//                 type="date"
//                 className="form-control mb-3"
//               />
//             </div>
//           </div>

//           {/* Teacher fields */}
//           {role === "Teacher" && (
//             <>
//               <h5 className="section-title">
//                 <FaLaptopCode className="me-2" /> Professional Details
//               </h5>
//               <div className="row mb-3">
//                 <div className="col-md-6">
//                   <select
//                     className="form-control mb-3"
//                     value={department}
//                     onChange={(e) => setDepartment(e.target.value)}
//                     required
//                   >
//                     <option value="">Select Department</option>
//                     {departments.map((d) => (
//                       <option key={d} value={d}>
//                         {d}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="col-md-6">
//                   <select
//                     className="form-control mb-3"
//                     value={designation}
//                     onChange={(e) => setDesignation(e.target.value)}
//                     required
//                   >
//                     <option value="">Select Designation</option>
//                     {designations.map((d) => (
//                       <option key={d} value={d}>
//                         {d}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="col-md-12 d-flex">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="E.g: Database Systems, AI"
//                     value={expertiseInput}
//                     onChange={(e) => setExpertiseInput(e.target.value)}
//                   />
//                   <button
//                     type="button"
//                     className="btn btn-primary ms-2"
//                     onClick={addExpertise}
//                   >
//                     Add
//                   </button>
//                 </div>
//               </div>

//               {expertiseList.length > 0 && (
//                 <div className="mb-3">
//                   <strong>Areas of Expertise:</strong>{" "}
//                   {expertiseList.map((item) => (
//                     <span
//                       key={item}
//                       className="badge bg-primary me-2"
//                       style={{ cursor: "pointer" }}
//                       onClick={() => removeExpertise(item)}
//                       title="Click to remove"
//                     >
//                       {item} &times;
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </>
//           )}

//           {/* Student fields */}
//           {role === "Student" && (
//             <>
//               <h5 className="section-title">
//                 <FaGraduationCap className="me-2" /> Academic Details
//               </h5>
//               <div className="row mb-3">
//                 <div className="col-md-6">
//                   <input
//                     type="text"
//                     className="form-control mb-3"
//                     placeholder="University"
//                     value={university}
//                     onChange={(e) => setUniversity(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <input
//                     type="text"
//                     className="form-control mb-3"
//                     placeholder="Course"
//                     value={course}
//                     onChange={(e) => setCourse(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>
//             </>
//           )}

//           {/* Security */}
//           <h5 className="section-title">
//             <FaLock className="me-2" /> Security & Access
//           </h5>
//           <div className="row mb-3">
//             <div className="col-md-6">
//               <input
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 type="text"
//                 className="form-control mb-3"
//                 placeholder="Username"
//                 required
//               />
//             </div>
//             <div className="col-md-6">
//               <input
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//                 className="form-control mb-3"
//                 placeholder="Password"
//                 required
//               />
//             </div>
//           </div>

//           {/* Submit button */}
//           <button
//             type="submit"
//             className="btn w-100 mb-3"
//             style={{
//               background:
//                 role === "Admin"
//                   ? "linear-gradient(90deg, #7c3aed, #5b21b6)"
//                   : "linear-gradient(90deg, #0d47a1, #1565c0)",
//               color: "#fff",
//               fontWeight: "600",
//               padding: "10px",
//               border: "none",
//             }}
//           >
//             Register
//           </button>
//         </form>

//         <p className="text-center">
//           Already have an account? <Link to="/">Login here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
