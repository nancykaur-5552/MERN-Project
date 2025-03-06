import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
const loginAcc = () => {
    function loginAcc() {
        window.open('/loginAcc','_self');
    }
    return (
        <>
            <Navbar/>
            <div className="acc">
                <div className="login-account">
                    <h2>Login Account</h2>
                    <p>Please login to book an appointment.</p>
                    <form action="" id="loginAccountForm">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required />
                        <button type="submit" className="login">Login</button>
                        <p className="loginacc">Already have an account? <Link to='loginAcc' onClick={loginAcc}>Login here</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default loginAcc
