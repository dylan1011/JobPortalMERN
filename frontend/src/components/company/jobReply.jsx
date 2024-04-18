import React, { useEffect, useState } from 'react'
import './jobReply.css';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const JobReply = () => {
    const location = useLocation();
    let job_id = location.state;
    const token = localStorage.getItem('token');
    const [data, setData] = useState([]);
    const [post, setPost] = useState([]);
    let navigate = useNavigate();

    
    useEffect(()=>{
        const fetchData = async () =>{
            let headers =  {
                authorization: `Bearer ${token}`
            }
        
            let body = {
                job_id: job_id
            }
            let responsePost = await axios.put('http://localhost:3000/jobPost/jobPost',body,{headers});
            console.log("job post heading ", responsePost.data.jobDetails);
            setPost(responsePost.data.jobDetails);
            let response = await axios.put('http://localhost:3000/jobReply/all',body,{headers});
            console.log("all applicants ", response.data.applied_applicants.jobApplicants);
            setData(response.data.applied_applicants.jobApplicants);
        }
        fetchData();
    },[])

    const handleSelect = async (userId) => {
        let headers = {
            authorization: `Bearer ${token}`
        }
        
        let body = {
            userId: userId,
            job_id: job_id
        }

       try{
        let response = await axios.put('http://localhost:3000/jobReply/selected',body, {headers});
        console.log("selected applicant ", response.data.selected_applicants);
       }catch(err){
        console.log("error occured selecting applicant ",err);
       }
    }

    const handleToSelected = (job_id) =>{
        navigate('/company/selected', {state:job_id});
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
            Location : {post.jobCity}, {post.jobState}, {post.jobCountry}
        </div>
        <div className="jobreplysalary">
            Salary : $100k per year
        </div>
        <div className="experience">
            Experience Required : 1 year
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

<button className='togglebuttonselected'>All</button>
<button className='togglebuttons' onClick={()=> handleToSelected(post._id)}>Selected</button>

</div>
    </div>
    {data.map((applicant, index)=> 
        <div class="card b-1 hover-shadow mb-20" key={index}>
        <div class="media card-body">
            <div class="media-left pr-12">
                <img class="profileImage" src="https://img.freepik.com/premium-photo/blue-account-profile-button-blue-background_509562-71.jpg?w=740" alt="..."/>
            </div>
            <div class="media-body">
                <div class="mb-2">
                    <span class="fs-20 pr-16">{applicant.fullName}</span>
                </div>
                {/* <small class="fs-16 fw-300 ls-1">Job title at Company Name</small> */}
            </div>
            <div class="locationDetails">
                <p class="fs-14 text-fade mb-12"><i class="fa fa-map-marker pr-1"></i> {applicant.userCity},{applicant.userState},{applicant.userCountry}</p>
                <span class="text-fade"><i class="fa fa-briefcase"></i> {applicant.userExperience}+ years</span>
            </div>
        </div>
        <footer class="card-footer flexbox align-items-center">
            <div>
                <strong>Applied on</strong><br/>
                <span>21 Jan, 2017</span>
            </div>
            <div class="actionbuttons">
                <button class="downloadButton" onClick={()=> handleSelect(applicant.userId)}>Select</button>
                <button class="contactButton">Contact</button>
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

export default JobReply
