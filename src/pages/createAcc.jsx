import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
const createAcc = () => {
    function loginAcc() {
        window.open('/loginAcc','_self');
    }
  return (
    <>
      <Navbar/>
    <div className="acc">
        <div className="create-account">
            <h2>Create Account</h2>
            <p>Please sign up to book an appointment.</p>
            <form action="" id="createAccountForm">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" required/>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required/>
                <label htmlFor="Address">Address:</label>
                <input type="text" id="address" name="address" placeholder="Enter your address"/>
                <label htmlFor="Mobile no.">Mobile No.:</label>
                <input type="tel" id="Mobile no." name="Mobile no." placeholder="Enter your mobile no." required/>
                <button type="submit" className="create">Create Account</button>
                <p className="login">Already have an account? <Link to="loginAcc" onClick={loginAcc}>Login
                        here</Link></p>
            </form>
        </div>
    </div>
    </>
  )
}

export default createAcc
