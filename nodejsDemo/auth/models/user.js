const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    username: {
        unique: true,
        type: String
    }, 
    surname: String,  
    password: String,
    role: String,
    department:String,
 /* age: Number,
    address: String,
    email:String,
    phone:String,
    gender:String,*/
    
});
module.exports = mongoose.model("User", userSchema);
