import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Category from './pages/category/Category'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>

            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

            <Route path='/category/:name' element={<Category/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App