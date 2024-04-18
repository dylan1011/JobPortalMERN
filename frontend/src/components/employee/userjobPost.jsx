import React, { useEffect, useState } from 'react'
import './jobPost.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const UserJobPost = () => {
    const [data, setData] = useState([]);
    const token = localStorage.getItem('token');
    useEffect(()=>{
        const fetchData = async () => {
            let response = await axios.get('http://localhost:3000/jobPost/allJobs');
            console.log("All jobs", response.data.allJobs);
            setData(response.data.allJobs);
        }
        fetchData();
    },[])

    const handleApply = async (job_id)=> {
        let headers = {
            authorization: `Bearer ${token}`
        }
        let body = {
            job_id: job_id
        }
        let response = await axios.put('http://localhost:3000/jobReply/reply', body, {headers});
        console.log("added applicant ", response.data.jobReply_applicants);
    }
  return (
    <>
    <div className="apptitlenavbar">
          <div className="logotitle">jobhunt</div>
          <div className="com">.com</div>
    </div> 
    <ul class="nav-links">
        <Link to={"/user/home"}><li><a href="#">Home</a></li></Link>
        <Link ><li class="center"><a href="#">Search</a></li></Link>
        <Link to={"/user/offers"}><li class="upward"><a href="#">Offers</a></li></Link>
        <Link><li class="upward"><a href="#">Profile</a></li></Link>
        <Link to={"/"}><li class="forward"><a href="#">Signout</a></li></Link>
  	</ul>

<div className="jobReply">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
  <div class="container">
    {/* <div className="categoryselect">
    <div class="wrapper">
        <input type="radio" name="select" id="option-1" />
        <input type="radio" name="select" id="option-2"/>
        <input type="radio" name="select" id="option-3"/>

        <label for="option-1" class="option option-1">
            <div class="dot"></div>
            <span>Engineering</span>
        </label>
        
        <label for="option-2" class="option option-2">
            <div class="dot"></div>
            <span>Marketing</span>
        </label>

        <label for="option-3" class="option option-3">
            <div class="dot"></div>
            <span>Business, HR</span>
        </label>
    </div>
    </div> */}

<div class="col-md-12">
    
    {data.map((jobpost,jobId)=>
        <div class="card b-1 hover-shadow mb-20">
        <div class="media card-body">
            <div class="media-left pr-12">
                <img class="profileImage" src="https://authenticjobs.com/wp-content/themes/authenticjobs/assets/img/site/default-company-logo.svg" alt="..."/>
            </div>
            <div class="media-body">
                <div class="mb-2">
                    <span class="fs-20 pr-16">{jobpost.jobTitle}</span>
                </div>
                <small class="fs-16 fw-300 ls-1">{jobpost.companyPost.companyName}</small>
            </div>
            <div class="locationDetails">
                <p class="jobDetails"><i class="fa fa-map-marker pr-1"></i> {jobpost.jobCity},{jobpost.jobState},{jobpost.jobCountry}</p>
                <span class="jobDetails"><i class="fa fa-money pr-1"></i>  ${jobpost.jobSalary}/yr</span>
                <p class="jobDetails"><i class="fa fa-briefcase"></i> {jobpost.jobExperience}+ years</p>

            </div>
        </div>
        <footer class="card-footer flexbox align-items-center">
            <div>
                <strong>Applied on</strong><br/>
                <span>21 Jan, 2017</span>
            </div>
            <div class="actionbuttons">
                <button class="downloadButton" onClick={()=>handleApply(jobpost._id)}><div className="buttonfont">Apply</div></button>
                <button class="contactButton">More Details</button>
                <button class="deleteButton">Delete</button>
            </div>
        </footer>
    </div>
    )}
</div>
</div>
</div>
    </>
  )
}

export default UserJobPost;
