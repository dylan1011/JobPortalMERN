// mongodb+srv://dylanbutelho:dylan@cluster0.icyr098.mongodb.net/
let mongoose = require('mongoose');

let mongodb_connection = mongoose.connect("mongodb+srv://dylanbutelho:dylan@cluster0.icyr098.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).then(()=>{
    console.log('database connected')
 }).catch((err)=>{
    console.log(`Error occured ${err}`)
 })

module.exports = mongodb_connection;