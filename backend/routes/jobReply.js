var express = require('express');
var router = express.Router();
let authenticateUser = require('../auth/authMiddleware');
let authenticateCompany = require('../auth/authMiddlewareCompany');
let model_jobPost = require('../models/jobPost.model');
let model_user = require('../models/user.model');
let model_company = require('../models/company.model');
let model_jobReply = require('../models/jobReply.models');
let { v4: uuidv4 } = require('uuid');



// Api will be called at same time as job Post
router.post('/reply', authenticateCompany,async function(req,res,next){
    let company = req.company;
    let jobReplyId = req.body.jobReplyId;
    let jobApplicants = req.body.jobApplicants;
    let jobPost = req.body.jobPost;
    console.log({jobReplyId,jobApplicants,jobPost});
    let post_jobReply = await model_jobReply.create({jobReplyId,jobApplicants,jobPost});
    console.log({post_jobReply});
    let post_reply = await model_jobPost.findByIdAndUpdate(jobPost,{jobReply: post_jobReply._id},{new:true});
    console.log({post_reply});
    res.json({post_jobReply});
});

// just there
router.get('/reply', async function(req,res,next){
    let jobReplyId = req.body.jobReplyId;
    let get_jobReply = await model_jobReply.findOne({jobReplyId: jobReplyId});
    console.log({get_jobReply});
    res.json({get_jobReply});
});

// to add applicants
router.put('/reply', authenticateUser,async function(req,res,next){
    let user = req.user;
    let job_id = req.body.job_id;
    let job_applicant = await model_user.findOne({userId:user.userId}).select('_id');
    console.log("applicant id ",job_applicant);
    let jobReply_id = await model_jobPost.findById(job_id).select('jobReply');
    console.log("jobReply id ",jobReply_id);
    let jobReply_applicants = await model_jobReply.findByIdAndUpdate(jobReply_id.jobReply,{$push:{jobApplicants: job_applicant}},{new:true});
    console.log({jobReply_applicants});
    res.json({jobReply_applicants});
});

// to add applicant from backend for testing
router.put('/applicant', async function(req,res,next){
    let user_id = "65f41966053a84e36568f899";
    job_id = "65f54a6b58cb8afb669bf4ff";
    let applicant = await model_jobReply.findByIdAndUpdate(job_id,{$push:{jobApplicants: user_id}},{new:true});
    console.log("applicant", applicant);
    res.json({applicant});
})

// to see applicants
router.put('/all', authenticateCompany, async function(req, res, next){
    let company = req.company;
    let job_id = req.body.job_id;
    // let company_id = await model_company.findOne({companyId: company.companyId}).select('_id');
    let applied_applicants = await model_jobReply.findOne({jobPost: job_id}).populate('jobApplicants');
    console.log("all aplicants ",applied_applicants);
    res.json({applied_applicants});
});

// to add selected applicants
router.put('/selected', authenticateCompany, async function(req,res,next){
    let company = req.company;
    let userId = req.body.userId;
    let job_id = req.body.job_id;
    let user_id = await model_user.findOne({userId:userId}).select('_id');
    let selected_applicants = await model_jobReply.findOneAndUpdate({jobPost: job_id},{$push: {applicantsSelected: user_id}});
    console.log("selected applicants ", selected_applicants);
    res.json({selected_applicants});
});

// to see selected applicants
router.put('/selectedApplicants', authenticateCompany, async function(req,res,next){
    let job_id = req.body.job_id;
    let selected_applicants = await model_jobReply.findOne({jobPost:job_id}).populate('applicantsSelected');
    console.log("appicants selected ",selected_applicants);
    res.json({selected_applicants});
})

module.exports = router;