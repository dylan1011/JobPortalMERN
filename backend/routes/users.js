var express = require('express');
// const { model } = require('mongoose');
var router = express.Router();
let authenticateUser = require('../auth/authMiddleware');
let {secretKey} = require('../auth/config');
let model_user = require('../models/user.model');
let model_test = require('../models/test.models');
let jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
let upload = require('../util/resumeupload');
// const multer = require('multer');
// const path = require('path');

// /* GET users listing. */
// // router.get('/', async function(req, res, next) {

// //   res.render('Users', { title: 'Express' });
// // });
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// // Init upload
// const upload = multer({
//   storage: storage
// }).single('resume'); 

router.post('/test', upload ,function(req, res) {
  console.log(req.file)
  return (
    res.send("Single file")
  )
});

router.post('/signup',async function(req, res, next) {
  // res.render('Users', { title: 'Express' });
  let username = req.body.username;
  let password = req.body.password;
  let userId = req.body.userId;
  let fullName = req.body.fullName;
  // let lastname = req.body.lastname;
  let userDp = req.body.userDp;
  let userCompany = req.body.userCompany;
  let userExperience = req.body.userExperience;
  let education = req.body.education;
  let userResume = req.file.path || "" ;
  // oops concepts, arrays, sql / mongodb , create a server , http.createserver , node(js runtime env) vs express(framework) , datatypes in js and python , es6 features. 
  // let userResume = req.body.userResume;
  let userPhone = req.body.userPhone;
  let userEmail = req.body.userEmail;
  let userCity = req.body.userCity;
  let userState = req.body.userState;
  let userCountry = req.body.userCountry;
  console.log({username,password,userId,fullName,userDp,userCompany,userExperience,userPhone,userEmail, userCity, userState,userCountry})
  let userDetails = await model_user.create({username,password,userId,fullName,userDp,userCompany,userExperience,userPhone,userEmail, userCity, userState,userCountry})
  console.log({userDetails});
  res.json({userDetails});

});

router.get('/signup',async function(req,res,next){
  let username = "kenC";
  let user_details = await model_user.findOne({username:username}).select('education');
  console.log({user_details});
  res.json({user_details});
});

router.put('/signup',async function(req, res, next) {
  // res.render('Users', { title: 'Express' });
  let username = req.body.username;
  let password = req.body.password;
  let userId = req.body.userId;
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let userDp = req.body.userDp;
  let userCompany = req.body.userCompany;
  let userExperience = req.body.userExperience;
  let education = req.body.education;

  let userResume = req.body.userResume;
  let userPhone = req.body.userPhone;
  let userEmail = req.body.userEmail;
  let userCity = req.body.userCity;
  let userState = req.body.userState;
  let userCountry = req.body.userCountry;
  console.log({username,password,userId,firstname,lastname,userDp,userCompany,userExperience,education,userResume,userPhone,userEmail, userCity, userState,userCountry})
  let updateUserDetails = await model_user.findOneAndUpdate(userId, {password:password, firstname:firstname , lastname : lastname , userDp : userDp , userCompany:userCompany , userExperience:userExperience , education: education , userResume:userResume , userPhone:userPhone , userEmail:userEmail , userCity:userCity , userState:userState , userCountry:userCountry}).populate()
  console.log({updateUserDetails});
  res.json({updateUserDetails});

});

router.post('/login', async function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // const {username, password} = req.body;
let username = req.body.username;
let password = req.body.password;

// Validating user Credentials
if (!username || !password){
  return res.status(400).json({message: 'Please provide both credentials.'});
}

// Finding the user in the signup database
// const user = await model_user.find(u => u.username === username && u.password === password);
let user = await model_user.findOne({username: username, password: password});
if (!user){
  return res.status(401).json({message: 'Invalid Credentials.'});
}

// Creating a JWT token
const token = jwt.sign({user: {username: user.username, userId: user.userId}}, secretKey);
console.log(token,secretKey);
res.json({token,userId: user.userId});
});


router.get('/login', authenticateUser,async function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({user: req.user, message: "Acess granted to this protected route"}); 
});


module.exports = router;
