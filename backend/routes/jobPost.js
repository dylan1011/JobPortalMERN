var express = require('express');
var router = express.Router();
// let authenticateUser = require('../auth/authMiddleware');
let authenticateCompany = require('../auth/authMiddlewareCompany');
let model_jobPost = require('../models/jobPost.model');
let model_user = require('../models/user.model');
let model_company = require('../models/company.model');
let { v4: uuidv4 } = require('uuid');


/* GET home page. */
router.post('/job', authenticateCompany,async function(req, res, next) {
//   res.render('index', { title: 'Express' });
    let company = req.company;
    let jobTitle = req.body.jobTitle;
    let jobId = req.body.jobId;
    let jobUpload = req.body.jobUpload;
    let jobCity = req.body.jobCity;
    let jobState = req.body.jobState;
    let jobCountry = req.body.jobCountry;
    let jobExperience = req.body.jobExperience;
    let jobSalary = req.body.jobSalary;
    let jobEmployer = req.body.jobEmployer;
    let companyPost = req.body.companyPost;
    let jobReply = req.body.jobReply;
    console.log({jobId, jobTitle , jobUpload , jobCity , jobState, jobCountry , jobExperience , jobSalary,jobEmployer , companyPost ,jobReply})
    let jobDetails = await model_jobPost.create({jobId, jobTitle , jobUpload , jobCity , jobState, jobCountry , jobExperience , jobSalary,jobEmployer , companyPost ,jobReply});
    console.log("Job details ",{jobDetails});
    // let user_company = await model_user.findOne({userId:user.userId}).select('userCompany _id');
    // console.log({user_company});
    // let company_jobPost = await model_company.findOneAndUpdate({companyName:user_company.userCompany.companyName},{$push:{jobPosts: jobDetails._id}},{new:true}).select('_id');
    // console.log({company_jobPost});
    let company_details = await model_company.findOne({companyId: company.companyId}).select('_id');
    console.log("company id", company_details);
    let jobPost = await model_jobPost.findOneAndUpdate({jobId: jobDetails.jobId},{companyPost:company_details},{new: true});
    console.log("jobpost ",jobPost);
    res.json({jobDetails});
});

// router.put('/job', async function(req, res, next) {
//     //   res.render('index', { title: 'Express' });
//     let jobTitle = req.body.jobTitle;
//     let jobId = req.body.jobId;
//     let jobUpload = req.body.jobUpload;
//     let jobCity = req.body.jobCity;
//     let jobState = req.body.jobState;
//     let jobCountry = req.body.jobCountry;
//     let jobExperience = req.body.jobExperience;
//     let jobEmployer = req.body.jobEmployer;
//     let company = req.body.company;
//     console.log({jobId, jobTitle , jobUpload , jobCity , jobState, jobCountry , jobExperience , jobEmployer , company })
//     let UpdateJob = await model.findByIdAndUpdate({jobId, jobTitle , jobUpload , jobCity , jobState, jobCountry , jobExperience , jobEmployer , company });
//     res.json({UpdateJob});
//     console.log({UpdateJob}); 
// });

router.get('/job', async function (req,res,next){
    let jobId = req.body.jobId;
    let jobDetails = await model_jobPost.findOne({jobId: jobId}).populate('company');
    console.log({jobDetails});
    res.json({jobDetails});
});

// to display company specific jobs
router.get('/companyJobs', authenticateCompany,async function (req,res,next){
    let company = req.company;
    // let companyPost = req.body.companyPost;
    // let company = "65f4729fafa2a048186c360e";
    let company_id = await model_company.findOne({companyId: company.companyId}).select('_id');
    console.log("company id ",company_id);
    let jobDetails = await model_jobPost.find({companyPost: company_id}).populate('companyPost');
    console.log("job connect",{jobDetails});
    res.json({jobDetails});
});

// Displaying all the jobs at the home page
router.get('/allJobs', async function (req,res,next){
    let allJobs = await model_jobPost.find().populate('companyPost');
    console.log({allJobs});
    res.json({allJobs});
});

// t display on view applicants page
router.put('/jobPost', authenticateCompany,async function (req,res,next){
    let company = req.company;
    let job_id = req.body.job_id;
    let jobDetails = await model_jobPost.findById(job_id);
    console.log({jobDetails});
    res.json({jobDetails});
});

module.exports = router;
