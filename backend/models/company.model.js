let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let { v4: uuidv4 } = require('uuid');

let companyCollection = new Schema (
    {
        companyId : {
            type : String
        },

        companyName : {
            type : String,
            required : true
        },

        companyPassword: {
            type : String,
            required:true
        },

        companyLogo : {
            type : String,
            default : ""
        },

        companyFounded : {
            type : Date,
            // required : true,
            default: Date.now
        },

        companySize : {
            type : Number,
            required : true,
            default: 100
        },

        companyLocation : {
            type : String,
            // required : true
            default: "India"
        },

        // Remove the posts part
        // jobPosts : [{
        //         type : Schema.Types.ObjectId,
        //         ref : "JOBPOST",
        //         default: []
        // }]
        
        
    },
    {timestamps : true} 
)

module.exports = mongoose.model("COMPANY", companyCollection);
