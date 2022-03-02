const express = require("express");
const routerVote = express.Router();

const { addVote } = require("../../services/votes/addVote");
routerVote.post("/addVote", addVote);
module.exports = routerVote;
