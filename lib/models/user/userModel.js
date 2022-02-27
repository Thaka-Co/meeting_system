const mongoose = require('mongoose');

export const userData = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number,
    profilePic:String,
    tasks:Array,
    meetings:Array,
});

module.exports = mongoose.model('user',userData) 