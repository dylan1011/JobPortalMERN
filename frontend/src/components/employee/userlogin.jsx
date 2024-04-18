import React, { useState } from 'react'
import "./signup.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    let body = {
      username: username,
      password: password
    }
    try{
      let response = await axios.post('http://localhost:3000/users/login',body);
    console.log("user login ", response.data);
    const token = response.data.token;
    const userId = response.data.userId;
    localStorage.setItem('token', token);
    localStorage.setItem('userId',userId);
    navigate('/user/home')
    }catch(err){
      console.log("Error occured", err);
    }
  }
  return (
    <>
  <head>
    <meta charset="UTF-8" />
    <title> Login </title>
    <link rel="stylesheet" href="signup.css"/>
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   </head>
<body>
<div className="apptitlenavbar">
          <div className="logotitle">jobhunt</div>
          <div className="com">.com</div>
</div>
    <div className="signup">
  <div class="signupcontainer">
    <div class="title">User Login</div>
    <div class="content">
      <form action="#" onSubmit={handleLogin}>
        <div class="user-details">
          <div class="input-box">
            <span class="details">Username</span>
            <input type="text" placeholder="Enter your username" required onChange={(e)=> setUsername(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="password" placeholder="Enter your password" required onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          </div>
        <div class="signupbutton">
            <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  </div>
  </div>
</body>
    </>
  )
}

export default UserLogin;
