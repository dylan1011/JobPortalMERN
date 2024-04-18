import React from 'react';
import './jobPost.css';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const JobOffer = () => {
  return (
    <>
        <div className="apptitlenavbar">
          <div className="logotitle">jobhunt</div>
          <div className="com">.com</div>
    </div> 
    <ul class="nav-links">
        <Link to={"/user/home"}><li><a href="#">Home</a></li></Link>
        <Link ><li class="center"><a href="#">Search</a></li></Link>
        <Link to={"/user/offers"}><li class="upward"><a href="#"> Offers</a></li></Link>
        <Link><li class="upward"><a href="#">Profile</a></li></Link>
        <Link to={"/"}><li class="forward"><a href="#">Signout</a></li></Link>
  	</ul>

<div className="jobReply">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
  <div class="container">
    <div className="windowtitle">
        <div className="windowtitletext">Job Offers</div> 
    </div>
  <div class="col-md-12">
    <div class="card b-1 hover-shadow mb-20">
        <div class="media card-body">
            <div class="media-left pr-12">
                <img class="profileImage" src="https://authenticjobs.com/wp-content/themes/authenticjobs/assets/img/site/default-company-logo.svg" alt="..."/>
            </div>
            <div class="media-body">
                <div class="mb-2">
                    <span class="fs-20 pr-16">Job Title</span>
                </div>
                <small class="fs-16 fw-300 ls-1">Company Name</small>
            </div>
            <div class="locationDetails">
                <p class="jobDetails"><i class="fa fa-map-marker pr-1"></i> City, State, Country</p>
                <span class="jobDetails"><i class="fa fa-money pr-1"></i> $100k/yr</span>
                <p class="jobDetails"><i class="fa fa-briefcase"></i> 5+ years</p>

            </div>
        </div>
        <footer class="card-footer flexbox align-items-center">
            <div>
                <strong>Applied on</strong><br/>
                <span>21 Jan, 2017</span>
            </div>
            <div class="actionbuttons">
                <button class="downloadButton"><div className="buttonfont">Accept</div></button>
                <button class="contactButton">More Details</button>
                <button class="deleteButton">Decline</button>
            </div>
        </footer>
    </div>
</div>
</div>
</div>
    </>
  )
}

export default JobOffer
