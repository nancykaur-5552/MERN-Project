import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import Dashboard from '../src/pages/dashboard'
import DoctorDashboard from './pages/DoctorDashboard'
import PatientDashboard from './pages/PatientDashboard'
import AddDoctor from './pages/AddDoctor'
import AllDoctors from './pages/AllDoctors'
import BookAppointment from './pages/BookAppointment'
import Contact from './pages/Contact';
import Login from './pages/login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element = {<Login/>}/>
    <Route path="/dashboard" element = {<Dashboard/>}/>
    <Route path="/DoctorDashboard" element = {<DoctorDashboard/>}/>
    <Route path="/PatientDashboard" element = {<PatientDashboard/>}/>
    <Route path="/AddDoctor" element = {<AddDoctor/>}/>
    <Route path="/AllDoctors" element = {<AllDoctors/>}/>
    <Route path="/BookAppointment" element = {<BookAppointment/>}/>
    <Route path="/Contact" element = {<Contact/>}/>
  </Routes>
  </BrowserRouter>
);
