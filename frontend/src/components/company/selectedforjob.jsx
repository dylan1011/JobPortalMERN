import React, { useEffect, useState } from 'react'
import './jobReply.css';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const SelectedForJob = () => {
    const location = useLocation();
    let job_id = location.state;
    console.log("job_id", job_id);
    const [data, setData] = useState([]);
    const [post, setPost] = useState([]);
    const token = localStorage.getItem('token');
    let navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async() => {
            let headers = {
                authorization: `Bearer ${token}`
            }
            let body = {
                job_id: job_id
            }
            try{
                let responsePost = await axios.put('http://localhost:3000/jobPost/jobPost',body,{headers});
                console.log("job post heading ", responsePost.data.jobDetails);
                setPost(responsePost.data.jobDetails);
                let response = await axios.put('http://localhost:3000/jobReply/selectedApplicants',body,{headers});
                console.log("response selected candidates", response.data.selected_applicants.applicantsSelected);
                setData(response.data.selected_applicants.applicantsSelected)
            }catch(err){
                console.log("error occured ", err);
            }
        }
        fetchData();
    },[])

    const handleToAll = () => {
        navigate('/company/jobreply', {state: job_id});
    }


  return (
    <>
    <div className="apptitlenavbar">
          <div className="logotitle">jobhunt</div>
          <div className="com">.com</div>
    </div>
    <ul class="nav-links">
        <Link to={"/company/home"}><li><a href="#">Home</a></li></Link>
        <Link ><li class="center"><a href="#">Search</a></li></Link>
        <Link><li class="upward"><a href="#">Profile</a></li></Link>
        <Link to={"/"}><li class="forward"><a href="#">Signout</a></li></Link>
        
  	</ul>
<div className="jobReply">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
  <div class="container">
  <div class="col-md-12">
  <div className="windowtitle">
        <div className="windowtitletext">Recieved Applications</div> 
    </div>

    <div className="jobdescription">
        <h7>.</h7>
        <div className="jobidreply">
            ID : {post.jobId}
        </div>
        <div className="jobtitlereply">
            {post.jobTitle}
        </div>
        <div className="jobreplylocation">
            Location : {post.jobCity},{post.jobState},{post.jobCountry}
        </div>
        <div className="jobreplysalary">
            Salary : ${post.jobSalary} per year
        </div>
        <div className="experience">
            Experience Required : {post.jobExperience} year
        </div>
        <div className="jobCategory">
            Category : Engineering
        </div>
        <div className="totalapplicants">
            Total Applicantons : 100
        </div>
        
        <h7>.</h7>
    </div>
    <div className="selectionbuttonscontainer">
    <div className="selectedbuttons">

    <button className='togglebuttons' onClick={handleToAll}>All</button>
<button className='togglebuttonselected'>Selected</button>

</div>
    </div>
    {data.map((applicant,index)=>
        <div class="card b-1 hover-shadow mb-20" key={index}>
        <div class="media card-body">
            <div class="media-left pr-12">
                <img class="profileImage" src="https://img.freepik.com/premium-photo/blue-account-profile-button-blue-background_509562-71.jpg?w=740" alt="..."/>
            </div>
            <div class="media-body">
                <div class="mb-2">
                    <span class="fs-20 pr-16">{applicant.fullName}</span>
                </div>
                <small class="fs-16 fw-300 ls-1">{applicant.userCompany.jobTitle} at {applicant.userCompany.companyName}</small>
            </div>
            <div class="locationDetails">
                <p class="fs-14 text-fade mb-12"><i class="fa fa-map-marker pr-1"></i> {applicant.userCity},{applicant.userState},{applicant.userCountry}</p>
                {/* <span class="text-fade"><i class="fa fa-money pr-1"></i> $60 per hour</span> */}
            </div>
        </div>
        <footer class="card-footer flexbox align-items-center">
            <div>
                <strong>Applied on</strong><br/>
                <span>21 Jan, 2017</span>
            </div>
            <div class="actionbuttons">
                <button class="downloadButton">{applicant.userEmail}</button>
                <button class="contactButton">{applicant.userPhone}</button>
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

export default SelectedForJob
