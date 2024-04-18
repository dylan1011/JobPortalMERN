import React, { useState } from 'react'
import "./signup.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function CompanyLogin() {
  const [companyName, setCompanyName] = useState('');
  const [companyPassword,setCompanyPassword] = useState('');

  let navigate = useNavigate();
  let handleLogin = async (e)=> {
    e.preventDefault();
    let body ={
      companyName: companyName,
      companyPassword: companyPassword
    }

    try{
      let response = await axios.post('http://localhost:3000/company/login', body);
      let token = response.data.token;
      let companyId = response.data.companyId;
      localStorage.setItem('token', token);
      localStorage.setItem('companyId', companyId);
      console.log("login details ", response.data)
      navigate('/company/home');
    }catch(err){
      console.log("Error Occured ",err);
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
    <div class="title">Company Login</div>
    <div class="content">
      <form action="#" onSubmit={handleLogin}>
        <div class="user-details">
          <div class="input-box">
            <span class="details">Company Name</span>
            <input type="text" placeholder="Enter your username" required onChange={(e)=> setCompanyName(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Company Password</span>
            <input type="text" placeholder="Enter your password" required onChange={(e)=> setCompanyPassword(e.target.value)}/>
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

export default CompanyLogin;
