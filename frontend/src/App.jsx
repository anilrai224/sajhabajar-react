import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Category from './pages/category/Category'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import PrivateRoute from './components/PrivateRoute'
import Profile from './pages/profile/Profile'
import Dashboard from './pages/admin/dashboard/Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAdmin, setUserDetail } from './redux/userDetailSlice';
import { setLoginStatus } from './redux/LoginStatusSlice'
import axios from 'axios';

const App = () => {

  const loginStatus = useSelector(state => state.loginStatus)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get('/api/user/getuser', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch(setUserDetail(response.data.user))
        dispatch(setLoginStatus(true))
        if (response.data.user.role === 'admin') {
          dispatch(setIsAdmin(true))
        } else {
          dispatch(setIsAdmin(false))
        }
      }
    }
    fetchUser()
  }, [loginStatus])
  const isAdmin = useSelector(state => state.userDetail.isAdmin)

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {isAdmin ? (
            <>
              <Route path='/admin/*' element={<Dashboard />} />
              <Route path='/profile' element={<Profile />} />
            </>
          ) : (
            <>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />

              <Route path="/login" element={<PrivateRoute >
                <Login />
              </PrivateRoute>} />
              <Route path="/register" element={<PrivateRoute>
                <Register />
              </PrivateRoute>} />

              <Route path='/category/:name' element={<Category />} />

              <Route path='/profile' element={<Profile />} />

              <Route path='/admin/*' element={<Dashboard />}>
              </Route>
            </>
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App