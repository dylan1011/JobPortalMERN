var express = require('express');
// const { model } = require('mongoose');
var router = express.Router();
let authenticateCompany = require('../auth/authMiddlewareCompany');
let {secretKey} = require('../auth/config');
let model_user = require('../models/user.model');
let model_company = require('../models/company.model');
let jwt = require('jsonwebtoken');
let { v4: uuidv4 } = require('uuid');

router.post('/register', async function(req,res,next){
    let companyId = req.body.companyId;
    let companyName = req.body.companyName;
    let companyPassword = req.body.companyPassword;
    let companyLogo = req.body.companyLogo;
    let companyFounded = req.body.companyFounded;
    let companySize = req.body.companySize;
    // let jobPosts = req.body.jobPosts;
    console.log({companyId,companyName,companyPassword,companyLogo,companyFounded,companySize});
    let company_details = await model_company.create({companyId,companyName,companyPassword,companyLogo,companyFounded,companySize});
    res.json({company_details});
});

router.get('/register', async function(req,res,next){
    let companyId = req.body.companyId;
    let company_details = await model_company.findOne({companyId: companyId}).populate('jobPosts');
    console.log({company_details});
    res.json({company_details});
});

router.post('/login', async function(req, res, next) {
    // res.render('index', { title: 'Express' });
    // const {username, password} = req.body;
  let companyName = req.body.companyName;
  let companyPassword = req.body.companyPassword;
  
  // Validating user Credentials
  if (!companyName || !companyPassword){
    return res.status(400).json({message: 'Please provide both credentials.'});
  }
  
  // Finding the user in the signup database
  // const user = await model_user.find(u => u.username === username && u.password === password);
  let company = await model_company.findOne({companyName: companyName, companyPassword: companyPassword});
  if (!company){
    return res.status(401).json({message: 'Invalid Credentials.'});
  }
  
  // Creating a JWT token
  const token = jwt.sign({company: {companyName: company.companyName, companyId: company.companyId}}, secretKey);
  console.log(token,secretKey);
  res.json({token,companyId: company.companyId});
  });
  
  
  router.get('/login', authenticateCompany,async function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.json({company: req.company, message: "Acess granted to this protected route"}); 
  });

module.exports = router;