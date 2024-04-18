import React, { useState } from 'react'
import "./signup.css";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function UserSignup() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [userId,setUserId] = useState(0);
  const [fullName, setFullName] = useState('');
  // const [lastname, setLastname] = useState('');
  const [userDp, setUserDp] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [expFrom,setExpFrom] = useState('');
  const [expTo, setExpTo] = useState('');
  const [userExperience, setUserExperience] = useState(0);
  const [instituteName,setInstituteName] = useState('');
  const [degree, setDegree] = useState('');
  const [cgpa, setCgpa] = useState(0);
  const [eduFrom, setEduFrom] = useState('');
  const [eduTo, setEduTo] = useState('');
  const[userResume, setUserResume] = useState('');
  const [userPhone, setUserPhone] = useState(0);
  const [userEmail, setUserEmail] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userState, setUserState] = useState('');
  const [userCountry, setUserCountry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let body = {
      username : username,
      password : password,
      userId: uuidv4(),
      fullName : fullName,
      userDp : userDp,
      userCompany:{
        companyName: companyName,
        jobTitle: jobTitle
      },
      userExperience: userExperience,
      userPhone: userPhone,
      userEmail: userEmail,
      userCity: userCity,
      userState: userState,
      userCountry: userCountry
    }

    let response = await axios.post('http://localhost:3000/users/signup',body);
    console.log(response.data.userDetails);
    
  }

  return (
    <>
  <head>
    <meta charset="UTF-8" />
    <title> Responsive Registration Form | CodingLab </title>
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
    <div class="title">User Signup</div>
    <div class="content">
      <form onSubmit={handleSubmit}>
        <div class="user-details">
          <div class="input-box">
            <span class="details">User Name</span>
            <input type="text" placeholder="Enter your username"   onChange={(e)=> setUsername(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="text" placeholder="Enter your password"   onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your full name"  onChange={(e)=> setFullName(e.target.value)}/>
          </div>
          {/* <div class="input-box">
            <span class="details">Last Name</span>
            <input type="text" placeholder="Enter your last name" required onChange={(e)=> setLastname(e.target.value)}/>
          </div> */}
          <div class="input-box">
            <span class="details">Profile Pic</span>
            <input type="text" placeholder="Enter your Picture"   onChange={(e)=> setUserDp(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Company Name</span>
            <input type="text" placeholder="Enter Company you work for"  onChange={(e)=> setCompanyName(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Position</span>
            <input type="text" placeholder="Enter your current position" onChange={(e)=> setJobTitle(e.target.value)}/>
          </div>
          {/* <div class="input-box">
            <span class="details">Start Date</span>
            <input type="text" placeholder="Enter start date" required onChange={(e)=> setExpFrom(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">End Date</span>
            <input type="text" placeholder="Enter end date" required onChange={(e)=> setExpTo(e.target.value)}/>
          </div> */}
          <div class="input-box">
            <span class="details">Experience</span>
            <input type="text" placeholder="Enter your current Experience"  onChange={(e)=> setUserExperience(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="Enter your email"  onChange={(e)=> setUserEmail(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Enter your number"  onChange={(e)=> setUserPhone(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">City</span>
            <input type="text" placeholder="Enter your City"  onChange={(e)=> setUserCity(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">State</span>
            <input type="text" placeholder="Enter your State"  onChange={(e)=> setUserState(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Country</span>
            <input type="text" placeholder="Enter your Country"  onChange={(e)=> setUserCountry(e.target.value)}/>
          </div>
          
          {/* <div class="input-box">
            <span class="details">Workplace</span>
            <input type="text" placeholder="The Place you Work At" required />
          </div>
          <div class="input-box">
            <span class="details">Experience</span>
            <input type="number" placeholder="Enter your Work Experience" required />
          </div>
          <div class="input-box">
            <span class="details">Profile Picture Url</span>
            <input type="number" placeholder="Enter your Profile Picture Url" required />
          </div> */}

        </div>
        
        <div class="signupbutton">
            <button type='submit'>Signup</button>
        </div>
      </form>
    </div>
  </div>
  </div>
</body>
    </>
  )
}

export default UserSignup
