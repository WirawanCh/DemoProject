const mongoose = require('mongoose')
const {Schema} = mongoose;

const RoleSchema = new Schema({
    role:{
        unique: true,
        type: String
    },
    pages: Array
});
module.exports = mongoose.model("Role", RoleSchema);
