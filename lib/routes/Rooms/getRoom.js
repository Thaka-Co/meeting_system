const express = require("express");
const routerRoom = express.Router();

const { getRoom } = require("../../services/Rooms/getRooms");
routerRoom.post("/getRoom", getRoom);
module.exports = routerRoom;
