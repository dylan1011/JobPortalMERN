let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

let jonPostCollection = new Schema (
    {
        jobTitle : {
            type : String,
            required : true
        },

        jobId : {
            type : String
        },

        jobUpload : {
            type : Date,
            default : Date.now
        },

        jobCity : {
            type : String,
            required : true
        },

        jobState : {
            type : String,
            required : true
        },

        jobCountry : {
            type : String,
            required : true
        },

        jobExperience : {
            type : Number,
            required : true
        },

        jobSalary : {
            type : Number,
            required : true
        },

        // jobEmployer : {
        //     type : Schema.Types.ObjectId,
        //     ref : "USER",
        //     // required : false
        //     default: null
        // },

        companyPost : {
            type : Schema.Types.ObjectId,
            ref : "COMPANY",
            // required : false
            default: null
        },
        
        jobReply:{
            type: Schema.Types.ObjectId,
            ref: 'JOBREPLY',
            default: null
        },

        // jobCategory: {
        //     type : String,
        //     required: [true,'Please provide an category']
        // }
    },
    {timestamps : true} 
)

module.exports = mongoose.model("JOBPOST", jonPostCollection);
