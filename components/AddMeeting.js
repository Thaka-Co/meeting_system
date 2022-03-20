import React, { useEffect } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import {
  Box,
  Checkbox,
  useColorModeValue,
  Select,
  Text,
  Icon,
  HStack,
} from "@chakra-ui/react";
import moment from "moment";
import { useState } from "react";
import AddItems from "./AddItems";
import MeetingItems from "./MeetingItems";
import MeetingRooms from "./MeetingRooms";
import { UserData } from "./Tables/UserData";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
import DatePicker from "react-datepicker";
// import "../styles/calendar.css";
import { AiOutlineClockCircle } from "react-icons/ai";
function AddMeeting(props) {
  const [date, setDate] = useState("");
  const [period, setPeriod] = useState("");
  const [periodMin, setPeriodMin] = useState("");
  const [startMin, setStartMin] = useState("");
  const [start, setStart] = useState("");
  const [endH, setEndH] = useState("");
  const [endMin, setEndMin] = useState("");
  const [cyclic, setCyclic] = useState(false);
  const [rooms,setRooms]=useState('');
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  console.log("period", period, periodMin);
  console.log("start", start, startMin);
  useEffect(() => {
    getRooms();
}, []);
  const getRooms=async()=>{
    const data = await fetch(`http://localhost:3000/api/rooms/getRoom`);
    const result = await data.json();
    setRooms(result);
    console.log(result);
  }
  const meetings = [];
  const selectDate = (e) => {
    console.log(e, "date");
    setDate(e);
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
      <Box
        bg={useColorModeValue("white", "gray.800")}
        p={15}
        m={5}
        borderRadius={7}
      >
        {/* <Datetime
          onChange={selectDate}
          isValidDate={valid}
          timeFormat={false}
          inputP
          rops={{ placeholder: t.selectDate }}
        /> */}
        {/* <DatePicker controls={["time"]} select="range" touchUi={true} /> */}
        <Calendar className={"calendar"} onChange={selectDate} />
        <HStack mt={10}>
          <Icon as={AiOutlineClockCircle} />
          <Datetime
            onChange={(e) => {
              setPeriod(e._d.getHours()), setPeriodMin(e._d.getMinutes());
            }}
            dateFormat={false}
            inputProps={{ placeholder: t.startDate }}
            timeFormat="HH:mm:ss"
            timeConstraints={{ hours: { min: 8, max: 17 } }}
          />
        </HStack>
        <HStack>
          <Icon as={AiOutlineClockCircle} />
          <Datetime
            onChange={(e) => {
              setStart(e._d.getHours());
              setStartMin(e._d.getMinutes());
            }}
            dateFormat={false}
            inputProps={{ placeholder: t.endTime }}
            timeFormat="HH:mm:ss"
            timeConstraints={{ hours: { min: 8, max: 17 } }}
          />
        </HStack>
        {/* <Checkbox
          mt={10}
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
        )} */}
      </Box>
      <MeetingRooms rooms={rooms} />
      <>
        <UserData />
        <MeetingItems />
        <AddItems />
        <Box
          bg={useColorModeValue("white", "gray.800")}
          p={15}
          m={5}
          borderRadius={7}
        >
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

export default AddMeeting;
