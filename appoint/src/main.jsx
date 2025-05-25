import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import Dashboard from '../src/pages/dashboard'
import DoctorDashboard from './pages/DoctorDashboard'
import PatientDashboard from './pages/PatientDashboard'
import AddDoctor from './pages/AddDoctor'
import AllDoctors from './pages/AllDoctors'
import BookAppointment from './pages/BookAppointment'
import Contact from './pages/Contact';
import Login from './pages/login';

const stripePromise = loadStripe('pk_test_51RN8v0GawIVAVtdcF2WmOmrmlTMcwUOy7BInJ6VVvhb9C73M8PfqBD24dVU3HSsKiEtTi5teL5iGDIzMk1XUigOq00od0gI3Rc')

ReactDOM.createRoot(document.getElementById('root')).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/DoctorDashboard" element={<DoctorDashboard />} />
        <Route path="/PatientDashboard" element={<PatientDashboard />} />
        <Route path="/AddDoctor" element={<AddDoctor />} />
        <Route path="/AllDoctors" element={<AllDoctors />} />
        <Route path="/BookAppointment" element={
          <BookAppointment />
        } />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter> </Elements>
);
