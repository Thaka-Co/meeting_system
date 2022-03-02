const express = require("express");
const routerRoom = express.Router();

const { addRoom } = require("../../services/Rooms/addRooms");
routerRoom.post("/addRoom", addRoom);
module.exports = routerRoom;
