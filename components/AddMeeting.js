import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import {
  Box,
  Checkbox,
  useColorModeValue,
  Select,
  Text,
} from "@chakra-ui/react";
import moment from "moment";
import { useState } from "react";
import AddItems from "./AddItems";
import MeetingItems from "./MeetingItems";
import MeetingRooms from "./MeetingRooms";
import { UserData } from "./Tables/UserData";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
function addMeeting(props) {
  const [date, setDate] = useState("");
  const [startH, setStartH] = useState("");
  const [startMin, setStartMin] = useState("");
  const [endH, setEndH] = useState("");
  const [endMin, setEndMin] = useState("");
  const [cyclic, setCyclic] = useState(false);
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
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
          inputProps={{ placeholder: t.selectDate }}
        />
        <Datetime
          onChange={(e) => {
            setStartH(e._d.getHours()), setStartMin(e._d.getMinutes());
          }}
          dateFormat={false}
          inputProps={{ placeholder: t.startDate }}
          timeFormat="HH:mm:ss"
          timeConstraints={{ hours: { min: 8, max: 17 } }}
        />
        <Datetime
          onChange={(e) => {
            setEndH(e._d.getHours());
            setEndMin(e._d.getMinutes());
          }}
          dateFormat={false}
          inputProps={{ placeholder: t.endTime }}
          timeFormat="HH:mm:ss"
          timeConstraints={{ hours: { min: 8, max: 17 } }}
        />
        {/* <Calendar className={"calendar"} /> */}
        <Checkbox
          onChange={(e) => {
            !cyclic ? setCyclic(true) : setCyclic(false);
          }}
        >
          {t.cyclicMeeting}
        </Checkbox>
        {cyclic ? (
          <Select>
            <option>{t.Daily}</option>
            <option>{t.weekly}</option>
            <option>{t.monthly}</option>
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
        <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
          <Text mb={4}>{t.recordMeetingType}</Text>
          <Select>
            <option>type 1</option>
            <option>type 2</option>
            <option>type 3</option>
          </Select>
        </Box>
      </>
    </Box>
  );
}

export default addMeeting;
