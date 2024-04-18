let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let testCollection = new Schema({
    resume : {
        type : String,
    }
})

module.exports = mongoose.model("TEST", testCollection);