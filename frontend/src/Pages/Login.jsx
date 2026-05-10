// /* import React, { useState } from 'react';
// import '../App.css';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios'

// const Login = () => {
//   const [email, setEmail] = useState(""); // ✅ email state
//   const [password, setPassword] = useState(""); // ✅ password state
//   const navigate = useNavigate()

//   async function handlesubmit(e){
//     e.prevenDefault()
//     const user = {email,password}
//     const response = await axios.post('http://localhost:5000/api/admin',user)
//     const data = response.data
//     if(data.msg=="Success"){
//       window.alert("Welcome back!!")
//       navigate('/admindash')
//     }
//     else{
//       window.alert("Username or password wrong")
//     }


//   }

//   return (
//     <div className="login-page">
//       <div className="login-box shadow-lg">
//         <h1 className="text-center mb-3">Welcome Back!</h1>
//         <p className="text-center text-muted mb-4">Login to your OBT account</p>

//         <form onSubmit={handlesubmit}> 
//           <div className="mb-3 ">
//             <label htmlFor="email" className="form-label">Email address</label>
//             <input 
//             value={email} onChange={(e)=>setEmail(e.target.value)} 
//               type="email" 
//               className="form-control" 
//               id="email" 
//               placeholder="Enter your email" 
//               required 
              
//             />
//           </div>

//           <div className="mb-3 ">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input 
//             value={password} onChange={(e)=>setPassword(e.target.value)}
//               type="password" 
//               className="form-control" 
//               id="password" 
//               placeholder="Enter your password" 
//               required  
              
//             />
//           </div>
// {/* 
//           <div className="mb-3 form-check">
//             <input type="checkbox" className="form-check-input" id="remember" />
//             <label className="form-check-label" htmlFor="remember">Remember me</label>
//           </div> */}

//           <button type="submit" value='login' className="btn btn-primary w-100">Login</button>

//           <p className="text-center text-muted mt-3">
//             Don't have an account? <Link to="/register" className="link-primary">Register</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
//  */