
const mongoose = require('mongoose')
const { userData } = require('../user/userModel')

const meetingData = new mongoose.Schema({
    topic:String,
    date:Date,
    memebers:Array,
    aginda:Array,
    timeFram:Number,
    meetingMinutes:Array,
    isRepated:Boolean,
})

module.exports =   mongoose.model('meeting',meetingData)