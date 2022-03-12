
import { useState } from 'react';
import './App.css';
import loginIm from './img/log.svg';
import registIm from './img/register.svg'

function App() {
  const [usernameReg, setUsernameReg]= useState("");
  const [passwordReg, setPasswordReg]= useState("");
  const [emailReg, setEmailReg]= useState(""); 

  const register = () => {
    Axios.post("https://localhost3001/register",{
      username: usernameReg,
      password: passwordReg,
      email: emailReg
    }).then((response) =>{
      console.log(response);
    });
  };

  return (
    <div className="App">
       <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username"  />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" class="btn solid" />
            <p class="social-text">Or Sign in with social platforms</p>
            <div class="social-media">
              <div class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </div>
              <div class="social-icon">
                <i class="fab fa-twitter"></i>
              </div>
              <div class="social-icon">
                <i class="fab fa-google"></i>
              </div>
              <div class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </div>
            </div>
          </form>
          <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" onChange={(e) => {
                setUsernameReg(e.target.value);
              }} />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" onChange={(e) => {
                setEmailReg(e.target.value);
              }} />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" onChange={(e) => {
                setPasswordReg(e.target.value);
              }} />
            </div>
            <input type="submit" class="btn" value="Sign up" />
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <div class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </div>
              <div class="social-icon">
                <i class="fab fa-twitter"></i>
              </div>
              <div class="social-icon">
                <i class="fab fa-google"></i>
              </div>
              <div class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Hello,Welcome to the Music mate. if you're not a member yet.Click on Sign up
            </p>
            <button class="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <div className='image'>
          <img src={registIm} alt="this is regist file" type="img/svg" /> 
          </div>
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Hello,Welcome to the Music mate. If you're already member
               click on Sign in button.
            </p>
            <button class="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <div className='image'>
          <img src={loginIm} alt="this is login file" type="img/svg" /> 
          </div>
        </div>
      </div>
    </div>

    </div>
    
  );
  
}


export default App;

