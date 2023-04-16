import React, { useRef, useState } from "react";
import "../styles/App.css";
import User from "../models/user";
const App = () => {
//for signup
const nameInput = useRef();
const emailInput = useRef();
const passwordInput = useRef();
const confirmPassword = useRef();
const [user, setUser] = useState(null);
//for login
const loginEmail = useRef('');
const loginPassword = useRef('');
const [loggedInUser, setLoggedInUser] = useState(null);
const signUpForm = document.querySelector(".beforeLogin");
  function handleSignup(){
    if(passwordInput.current.value == confirmPassword.current.value){
      let u1 = new User(nameInput.current.value, emailInput.current.value, passwordInput.current.value);
    setUser(u1);
    }
  }
  function handleLogout() {
    setLoggedInUser(null);
  }
  function handleLogin(){
    if(loginEmail.current.value == user.email && loginPassword.current.value == user.password){
      setLoggedInUser(user);
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
          {user != null &&
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
          </tr>}
        </tbody>
      </table>
      {loggedInUser == null ? <div className="beforeLogin">
          <form className="signup-form">
            <label htmlFor="name">Name</label>
            <input type="text" name="signupName" id="signupName" ref={nameInput}/>
            <label htmlFor="email">Email</label>
            <input type="email" name="signupEmail" id="signupEmail" ref={emailInput}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="signupPassword" id="signupPassword" ref={passwordInput}/>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="signupConfirmPassword" id="signupConfirmPassword" ref={confirmPassword}/>
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
        :
        <div className="afterLogin">
          <h3 id="username">{loggedInUser.name}</h3>
          <h3 id="email">{loggedInUser.email}</h3>
          <button onClick={handleLogout} id="logout-button">Logout</button>
        </div>
      }
    </div>
  );
};
export default App;