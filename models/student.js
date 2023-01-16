const mongoose = require("mongoose")

const { Schema } = mongoose;

//Student schema which has roll no name dob and score
const studentSchema = new Schema({
  roll: {
    type : Number,
    unique : true
  } ,
  name: String,     
  dob:{
    type:Date,
    trim:true
  } ,
  score:Number 
});

//exporting the model
module.exports = mongoose.model("Student", studentSchema)