import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { Box, Checkbox, useColorModeValue, Select } from "@chakra-ui/react";
import moment from "moment";
import { useState } from "react";
import AddItems from "./AddItems";
import MeetingItems from "./MeetingItems";
import MeetingRooms from "./MeetingRooms";
import { UserData } from "./Tables/UserData";
function addMeeting(props) {
  const [date, setDate] = useState("");
  const [startH, setStartH] = useState("");
  const [startMin, setStartMin] = useState("");
  const [endH, setEndH] = useState("");
  const [endMin, setEndMin] = useState("");
  const [cyclic, setCyclic] = useState(false);
  console.log("starting", startH, startMin);
  console.log("ending", endH, endMin);
  const meetings = [];
  const selectDate = (e) => {
    console.log(e._d, "date");
    setDate(e._d);
  };
  // to get date of yesterday
  const yesterday = moment().subtract(1, "day");
  // to specify valid date to meetings
  const valid = function (current) {
    return current.isAfter(yesterday);
  };
  console.log(cyclic);
  return (
    <Box bg={useColorModeValue("gray.50", "inherit")}>
      <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
        <Datetime
          onChange={selectDate}
          isValidDate={valid}
          timeFormat={false}
          inputProps={{ placeholder: "select date please" }}
        />
        <Datetime
          onChange={(e) => {
            setStartH(e._d.getHours()), setStartMin(e._d.getMinutes());
          }}
          dateFormat={false}
          inputProps={{ placeholder: "Start Time" }}
          timeFormat="HH:mm:ss"
          timeConstraints={{ hours: { min: 8, max: 17 } }}
        />
        <Datetime
          onChange={(e) => {
            setEndH(e._d.getHours());
            setEndMin(e._d.getMinutes());
          }}
          dateFormat={false}
          inputProps={{ placeholder: "End Time" }}
          timeFormat="HH:mm:ss"
          timeConstraints={{ hours: { min: 8, max: 17 } }}
        />
        <Checkbox
          onChange={(e) => {
            !cyclic ? setCyclic(true) : setCyclic(false);
          }}
        >
          Cyclic meeting
        </Checkbox>
        {cyclic ? (
          <Select>
            <option>Daily</option>
            <option>weekly</option>
            <option>monthly</option>
          </Select>
        ) : (
          ""
        )}
      </Box>
      <MeetingRooms />
      <>
        <UserData />
        <MeetingItems />
        <AddItems />
      </>
    </Box>
  );
}

export default addMeeting;
