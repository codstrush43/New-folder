import React from 'react'
import './Login.css'
// import { useNavigate } from 'react-router-dom'

function Login() {
  // const navigate = useNavigate();
  return (
   
    <form action="#">

    <div id="log-sign">
      <div id="container">
        <div id="login">
          <h1> LOGIN </h1>
        </div>

        <div className="inputs">
            {/* <div className="input">
              Name<br/>
              <input type="text" />
            </div> */}
        <div className="input">
              E-mail<br/>
              <input type="email" />
        </div>
            <div className="input">
              Password<br/>
              <input type="password" />
        </div>
          <button id='log-but' onClick={() => navigate('/sign-up/sign-uppage')}>Login</button>
          <button id="sign-up_but">Sign-Up</button>

      </div>
      </div>
    </div>
    </form>
  )
}

export default Login