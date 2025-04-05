import React from 'react';
import './Login.css';
// import { useNavigate } from 'react-router-dom'

function Login() {
  // const navigate = useNavigate();
  return (
    <div className="modal-content">
      <h2>Login to SKILLFORGE</h2>
      <form id="loginForm">
        <div className="form-group">
          <label htmlFor="loginEmail">Email</label>
          <input type="email" id="loginEmail" required />
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword">Password</label>
          <input type="password" id="loginPassword" required />
        </div>
        <button type="submit" className="primary-btn">Login</button>
      </form>
      {/* <button className="close-btn" onClick={() => toggleModal('loginModal')}>Close</button> */}
      <a className="close-btn" href="/">close</a>
    </div>
  );
}

export default Login;