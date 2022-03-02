const express = require("express");
const routerMeeting = express.Router();

const { getMeeting } = require("../../services/meeting/getMeeting");
routerMeeting.post("/getMeeting", getMeeting);
module.exports = routerMeeting;
