let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let { v4: uuidv4 } = require('uuid');

let userCollection = new Schema (
    {
        username:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        userId : {
            type : String,
            
        },

        fullName : {
            type : String,
            required : true
        },

        userResume : {
            type : String
        },

        // lastname : {
        //     type : String,
        //     required : true
        // },

        userDp : {
            type : String,
            default : "https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg?w=740&t=st=1710333419~exp=1710334019~hmac=369e35e617e28cd965c2ad47332304ecec6fef3405af109a4fdda30d904cb1a2"
        },

        userCompany : {
            type: {
                companyName : {
                    type : String,
                    default : "NA" 
                },

                jobTitle : {
                    type: String,
                    required : true
                },

                expFrom : {
                    type : Date,
                    default : Date.now
                },

                expTo : {
                    type : Date,
                    default : Date.now
                }
            },
            default: null
        },

        userExperience : {
            type : Number,
            // required : false,
            default : 0
        },

        // education : [{
        //     type: {
        //         qualtification : {
        //             type : {
        //                 institute : {
        //                     type : Schema.Types.ObjectId,
        //                     ref : "INSTITUTE"
        //                 },

        //                 degree : {
        //                     type: String,
        //                     default : "Bachelors"
        //                 },
        
        //                 cgpa : {
        //                     type : Number,
        //                     default : 0
        //                 },
        
        //                 eduFrom : {
        //                     type : Date,
        //                     default : Date.now
        //                 },
        
        //                 eduTo : {
        //                     type : Date,
        //                     default : Date.now
        //                 }
        //             }
        //         } 
        //     },
        //     default : null
        // }],

        education : {
            type: [{
                        instituteName : {
                            type : String,
                            default:"MU"
                        },

                        degree : {
                            type: String,
                            default : "Bachelors"
                        },
        
                        cgpa : {
                            type : Number,
                            default : 0
                        },
        
                        eduFrom : {
                            type : Date,
                            default : Date.now
                        },
        
                        eduTo : {
                            type : Date,
                            default : Date.now
                        }
            }],
            default : []
        },


        // userResume : {
        //     type : String,
        //     required : false,
        //     default : " "
        // },

        userPhone : {
            type : Number,
            required : true
        },

        userEmail : {
            type : String,
            required : true
        },

        userCity : {
            type : String,
            required : true
        },
        userState : {
            type : String,
            required : true
        },

        userCountry : {
            type : String,
            required : true
        },
        userAppliedJobs : [{
            type: Schema.Types.ObjectId,
            ref: "JOBPOST",
            default : []
        }]

    },
    {timestamps : true}
);

module.exports = mongoose.model("USER", userCollection);