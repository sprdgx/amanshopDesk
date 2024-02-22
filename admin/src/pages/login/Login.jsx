/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./login.css";




const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
      await login(dispatch, { username, password });
      setTimeout(() => {
        window.location.reload(); // Refresh the page
      }, 3000);
  };

  return (
      <div class='cont'>   
          <div class="container">
            <div class="card">
              <a class="login">Log in</a>
                <div class="inputBox">
                  <input type="text" required="required" onChange={(e) => setUsername(e.target.value)}/>
                  <span >Username</span>
                </div>
                <div class="inputBox">
                  <input type="password" required="required" onChange={(e) => setPassword(e.target.value)}/>
                  <span>Password</span>
                </div>
              <button class="enter" onClick={handleClick}>Enter</button>
            </div>
          </div>
      </div>         
  )}

export default Login;
