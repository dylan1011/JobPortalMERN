import React,{useState,useEffect} from 'react'
import "./signup.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function CompanySignup() {
  const [companyId, setCompanyId] = useState(0);
  const [companyName, setCompanyName] = useState('');
  const [companyPassword, setCompanyPassword] = useState('');
  const [companyLogo, setCompanyLogo] = useState('');
  const [companyFounded, setCompanyFounded] = useState('');
  const [companySize, setCompanySize] = useState(0);
  
  let navigate = useNavigate();

  const handleSubmit = async (e)=> {
    e.preventDefault();
    let body = {
      companyId: uuidv4(),
      companyName: companyName,
      companyPassword: companyPassword,
      companyLogo: companyLogo,
      companyFounded: companyFounded,
      companySize: companySize
    }

    let response = await axios.post('http://localhost:3000/company/register', body);
    console.log("Company details",response.data.company_details);
    navigate('/login/company');
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
            <span class="details">Company Name</span>
            <input type="text" placeholder="Enter company name" required onChange={(e)=> setCompanyName(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Company Password</span>
            <input type="text" placeholder="Enter company Password" required onChange={(e)=> setCompanyPassword(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Company Logo</span>
            <input type="text" placeholder="Enter company logo" required onChange={(e)=> setCompanyLogo(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Company Founded</span>
            <input type="text" placeholder="Enter founded date" required onChange={(e)=> setCompanyFounded(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Company Employees</span>
            <input type="text" placeholder="Enter number of employees" required onChange={(e)=> setCompanySize(e.target.value)}/>
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
          </div>
        </div> */}
        {/* <div class="gender-details">
          <input type="radio" name="gender" id="dot-1" />
          <input type="radio" name="gender" id="dot-2" />
          <input type="radio" name="gender" id="dot-3"/>
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Male</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Female</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Prefer not to say</span>
            </label>
          </div>
         */}
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

export default CompanySignup
