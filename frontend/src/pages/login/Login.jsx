import React, { useState } from 'react';
import './Login.scss';
import companyLogo from '../../assets/logo.png'; 
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { setLoginStatus } from '../../redux/LoginStatusSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const validateForm = () => {
    let errors = {};

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
      const response = await axios.post('/api/user/login',{email,password})
      if(response.data.success){
        dispatch(setLoginStatus(true))
        localStorage.setItem('token',response.data.token)
      }else{
        toast.error(`${response.data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
          });
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <img src={companyLogo} alt="Company Logo" className="company-logo" /> {/* Add company logo */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div style={{ color:'red' }} className="error">{errors.email}</div>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div style={{ color:'red' }} className="error">{errors.password}</div>}
        <button type="submit">Login</button>
        <div className="register-link">
          Don't have an account? <a href="/register">Register</a>
        </div>
      </form>
      <ToastContainer style={{ zIndex:'100000000' }}/>
    </div>
  );
};

export default Login;
