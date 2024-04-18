import React, { useState } from 'react'
import "./addjobs.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


const AddJobPost = () => {
  const [jobTitle, setJobTile] = useState('');
  const [jobId, setJobId] = useState('');
  const [jobUpload, setJobUpload] = useState('');
  const [jobCity, setJobCity] = useState('');
  const [jobState, setJobState] = useState('');
  const [jobCountry, setJobCountry] = useState('');
  const [jobExperience, setJobExperience] = useState(0);
  const [jobSalary, setJobSalary] = useState(0);
  const [jobCategory, setJobCategory] = useState('');

  const token = localStorage.getItem('token');
  let navigate = useNavigate();

  const handleJobPost = async (e) => {
    e.preventDefault();
    let headers = {
      authorization: `Bearer ${token}`
    }

    let body = {
      jobTitle: jobTitle,
      jobId: uuidv4(),
      jobUpload: jobUpload,
      jobCity: jobCity,
      jobState: jobState,
      jobCountry: jobCountry,
      jobExperience: jobExperience,
      jobSalary: jobSalary,
      // jobCategory: jobCategory
    }
    let response = await axios.post('http://localhost:3000/jobPost/job', body, {headers});
    console.log("company job post ", response.data.jobDetails);
    let reply_body = {
      jobReplyId: uuidv4(),
      jobPost: response.data.jobDetails._id
    } 
    let responseReply = await axios.post('http://localhost:3000/jobReply/reply',reply_body,{headers});
    console.log("job reply from job post", responseReply.data.post_jobReply);
    navigate('/company/home');
  }
  
  return (
    <>
    <div className="apptitlenavbar">
          <div className="logotitle">jobhunt</div>
          <div className="com">.com</div>
    </div> 
    <ul class="nav-links">
        <Link to={"/company/home"}><li><a href="#">Home</a></li></Link>
        <Link><li class="center"><a href="#">Search</a></li></Link>
        <Link><li class="upward"><a href="#">Profile</a></li></Link>
        <Link to={"/"}><li class="forward"><a href="#">Signout</a></li></Link>
  	</ul>

    <div className="addjobpost">
      <div className="addjobform">
      <div class="addjobcontainer">
    <div class="title">Post New Opening Position</div>
    <div class="content">
      <form action="#" onSubmit={handleJobPost}>
        <div class="user-details">
          
          <div class="input-box">
            <span class="details">Position</span>
            <input type="text" placeholder="Enter Position" required onChange={(e)=> setJobTile(e.target.value)}/>
          </div>
          
          <div class="input-box">
            <span class="details">Salary</span>
            <input type="text" placeholder="Enter salary to be offered" required onChange={(e)=> setJobSalary(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Experience required</span>
            <input type="text" placeholder="Enter required years of experience" required onChange={((e)=> setJobExperience(e.target.value))}/>
          </div>
          <div class="input-box">
            <span class="details">Country</span>
            <input type="text" placeholder="Enter location" required onChange={((e)=> setJobCountry(e.target.value))}/>
          </div><div class="input-box">
            <span class="details">State</span>
            <input type="text" placeholder="Enter location" required onChange={(e)=> setJobState(e.target.value)}/>
          </div><div class="input-box">
            <span class="details">City</span>
            <input type="text" placeholder="Enter location" required onChange={(e)=> setJobCity(e.target.value)}/>
          </div><div class="input-box">
            <span class="details">Upload Date</span>
            <input type="text" placeholder="Enter Date" required onChange={(e)=> setJobUpload(e.target.value)}/>
          </div>
          {/* <div class="input-box">
            <span class="details">Category</span>
            <input type="text" placeholder="Enter category" required onChange={(e)=> setJobCategory(e.target.value)}/>
          </div> */}
          
        </div>
        {/* checked ={jobCategory==='Engineering'} checked ={jobCategory==='Marketing'}checked ={jobCategory==='Business & HR'} */}
        {/* <div class="gender-details">
          <input type="radio" name="category" id="dot-1" value = "Engineering"  onChange={(e) => setJobCategory(e.target.value)}/>
          <input type="radio" name="category" id="dot-2" value = "Marketing"  onChange={(e) => setJobCategory(e.target.value)}/>
          <input type="radio" name="category" id="dot-3"value = "Business & HR" onChange={(e) => setJobCategory(e.target.value)}/>
          <span class="gender-title">Category</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Engineering</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Marketing</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Business & HR</span>
            </label>
          </div>
        </div> */}
        <div class="addjobbutton">
            <button type='submit'>Post</button>
        </div>
      </form>
    </div>
  </div>
      </div>
    </div>
    </>
  )
}

export default AddJobPost
