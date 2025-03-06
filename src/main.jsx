import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import Home from './Pages/home'
import About from './Pages/About'
import Contact from './Pages/contact'
import Doctor from './Pages/doctor'
import CreateAcc from './Pages/createAcc'
import LoginAcc from './Pages/loginAcc'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/about" element={<About />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/createAcc" element={<CreateAcc />} />
      <Route path="/loginAcc" element={<LoginAcc />} />
      <Route path="/footer" element={<Footer/>}/>
    </Routes>
  </BrowserRouter>
)