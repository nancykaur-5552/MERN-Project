import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/contact'
import Doctor from './pages/doctor'
import CreateAcc from './pages/createAcc'
import LoginAcc from './pages/loginAcc'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import AppointmentForm from './pages/AppointmentForm'
import John from './pages/Doctors/John'
import Henry from './pages/Doctors/Henry'
import JohnMillar from './pages/Doctors/JohnMillar'
import Brittany from './pages/Doctors/Brittany'
import Mukti from './pages/Doctors/Mukti'
import Raymond from './pages/Doctors/Raymond'
import BookedAppointments from './pages/BookedAppoinments'
import Richard from './pages/Doctors/Richard'
import Theresa from './pages/Doctors/Theresa'
import UserProfile from './pages/userProfile'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateAcc/>} />
      <Route path="/loginAcc" element={<LoginAcc />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/about" element={<About />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/footer" element={<Footer/>}/>
      <Route path='/Doctors/John' element={<John/>}/>
      <Route path='/Doctors/Brittany' element={<Brittany/>}/>
      <Route path='/Doctors/Henry' element={<Henry/>}/>
      <Route path='/Doctors/Mukti' element={<Mukti/>}/>
      <Route path='/Doctors/Raymond' element={<Raymond/>}/>
      <Route path='/Doctors/Richard' element={<Richard/>}/>
      <Route path='/Doctors/Theresa' element={<Theresa/>}/>
      <Route path='/Doctors/JohnMillar' element={<JohnMillar/>}/>
      <Route path='/AppointmentForm' element={<AppointmentForm/>}/>
      <Route path='/userProfile' element={<UserProfile/>}/>
      <Route path = '/BookedAppointments' element= {<BookedAppointments/>}/>

    </Routes>
  </BrowserRouter>
)