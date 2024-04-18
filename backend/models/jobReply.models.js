let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let { v4: uuidv4 } = require('uuid');

let jobReplyCollection = new Schema (
    {

        jobReplyId : {
            type : String
            
        },

        jobApplicants : [{
            type : Schema.Types.ObjectId,
            ref : "USER",
            default: []
        }],

        jobPost : {
            type : Schema.Types.ObjectId,
            ref : "JOBPOST",
            default: null
        },
        applicantsSelected : [{
            type : Schema.Types.ObjectId,
            ref : "USER",
            default: []
        }],
    },
    {timestamps : true}
);

module.exports = mongoose.model("JOBREPLY", jobReplyCollection);