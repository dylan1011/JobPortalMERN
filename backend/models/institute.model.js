let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

let instituteCollection = new Schema (
    {
        instituteId : {
            type : String
        },

        instituteName : {
            type : String,
            required : true
        },

        instituteLogo : {
            type : String,
            default : ""
        },

        instituteAlumni : {
            type : Number,
            required : true
        },

        jobPosts : {
            type : [{
                jobPost : {
                    type : Schema.Types.ObjectId,
                    ref : "JOBPOST"
                } 
            }]
        },

        totalTeachers : {
            type : Number,
            
        },

        totalStudents : {
            type : Number,
        },

        instituteBoard : {
            type : String,
            default : `State Board of Maharashtra` // `State Board of ${instituteState}`
        },

        instituteCountry : {
            type : String,
            required : true
        },

        instituteCity : {
            type : String,
            required : true
        },

        instituteState : {
            type : String,
            required : true
        }
    },
    {timestamps : true} 
)

module.exports = mongoose.model("INSTITUTE", instituteCollection);
