import React, { useRef, useState } from "react";
import "../styles/App.css";
import User from "../models/user";

const App = () => {
//for signup
const nameInput = useRef();
const emailInput = useRef();
const passwordInput= useRef();
const [nameData ,setNameData] = useState('');
const [emailData ,setEmailData] = useState('');
const [passwordData ,setPasswordData] = useState('');

//for login
const loginEmail = useRef('');
const loginPassword = useRef('');
const [name ,setName] = useState('');
const [email ,setEmail] = useState('');
const [password ,setPassword] = useState('');

const signUpForm = document.querySelector(".beforeLogin");

  function handleSignup(){
    setNameData(nameInput.current.value);
    setEmailData(emailInput.current.value);
    setPasswordData(passwordInput.current.value);
  }


  function handleLogin(){
    // console.log(loginEmail.current.value)
    // console.log(emailData)
    if(loginEmail.current.value == emailData && loginPassword.current.value == passwordData){
      setName(nameInput.current.value);
      setEmail(loginEmail.current.value);
      setPassword(loginPassword.current.value);
    }
  }
  return (
    <div id="main">
      <table id="all-users">
      <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          <tr>
            <td>{nameData}</td>
            <td>{emailData}</td>
            <td>{passwordData}</td>
          </tr>
        </tbody>
      </table>

      <div className="beforeLogin">
        <form className="signup-form">
          <label htmlFor="name">Name</label>
          <input type="text" name="signupName" id="signupName" ref={nameInput}/>
          <label htmlFor="email">Email</label>
          <input type="email" name="signupEmail" id="signupEmail" ref={emailInput}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="signupPassword" id="signupPassword" ref={passwordInput}/>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="signupConfirmPassword" id="signupConfirmPassword"/>
        </form>
        <button id="signup-button" onClick={handleSignup}>Signup</button>
        <form className="login-styles">
          <label htmlFor="loginEmail">Email</label>
          <input id="loginEmail" name="loginEmail" type="email" ref={loginEmail}/>
          <label htmlFor="loginPassword">Password</label>
          <input id="loginPassword" name="loginPassword" type="password" ref={loginPassword}/>
        </form>
        <button id="login-button" onClick={handleLogin}>Login</button>
      </div>

      <div className="afterLogin">
        <h3 id="username">{name}</h3>
        <h3 id="email">{email}</h3>
        <button id="logout-button">Logout</button>
      </div>
      
    </div>
  );
};

export default App;
