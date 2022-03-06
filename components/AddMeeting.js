import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import {
  Box,
  Checkbox,
  useColorModeValue,
  Select,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  FormControl,
  FormLabel,
  Input,
  Text,
  Icon,
  HStack,
} from "@chakra-ui/react";
import moment from "moment";
import { useState, useEffect } from "react";
import AddItems from "./AddItems";
import MeetingItems from "./MeetingItems";
import MeetingRooms from "./MeetingRooms";
import { UserData } from "./Tables/UserData";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
import DatePicker from "react-datepicker";
// import "../styles/calendar.css";
import { AiOutlineClockCircle } from "react-icons/ai";



function addMeeting(props) {
  // const [date, setDate] = useState();
  // const [startH, setStartH] = useState("");
  // const [startMin, setStartMin] = useState("");
  // const [endH, setEndH] = useState("");
  // const [endMin, setEndMin] = useState("");
  const [agindas, setAgindas] = useState([]);
  const [text, setText] = useState('');
  const [cyclic, setCyclic] = useState(false);
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;


  const [value, onCalendarChange] = useState(value);
  console.log(value)
  // to get date of yesterday
  const yesterday = moment().subtract(1, "day");
  // to specify valid date to meetings
  const valid = function (current) {
    return current.isAfter(yesterday);
  };
  const clicked = () => {
    agindas.push(text)
    setAgindas(agindas)
    setText('')
  }
  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <form method="post" action="/api/meetings/meetings">
      <Box bg={useColorModeValue("gray.50", "inherit")}>
        <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
          {/* <Datetime
          onChange={selectDate}
          isValidDate={valid}
          timeFormat={false}
          inputP
          rops={{ placeholder: t.selectDate }}
        /> */}
          {/* <DatePicker controls={["time"]} select="range" touchUi={true} /> */}
          <Box>

            <Calendar onChange={onCalendarChange} />
            <Input type='hidden' name='date' value={value} required />

            {/* <TimeFram /> */}
            <Text m={10}>مدة الاجتماع</Text>
            <Box mt={10} m={10}>
              <Icon as={AiOutlineClockCircle} />
              <Datetime
                onChange={(e) => {
                  setStartH(e._d.getHours()), setStartMin(e._d.getMinutes());
                }}
                dateFormat={false}
                inputProps={{ placeholder: t.startDate }}
                timeFormat="HH:mm:ss"
                timeConstraints={{ hours: { min: 8, max: 17 } }}

              />
            </Box>
          </Box>
          <AddItems name='nothing' title='ادخل الاجندة' lable='اضافة اجندة' type='button' onChange={onChange} onClick={clicked} />
          <Input type='hidden' name='agindas' value={agindas} />
          <UnorderedList>
            {
              agindas.map((itmes) => {
                return <ListItem key={itmes}>{itmes}</ListItem>
              })
            }
          </UnorderedList>
          <Checkbox
            mt={10}
            onChange={(e) => {
              !cyclic ? setCyclic(true) : setCyclic(false);
            }}
          >
            {t.cyclicMeeting}
          </Checkbox>
          {cyclic ? (
            <Select name='meetingType'>
              <option>{t.Daily}</option>
              <option>{t.weekly}</option>
              <option>{t.monthly}</option>
            </Select>
          ) : (
            ""
          )}
          <AddItems name='topic' type='submit' />
        </Box>
        {/* <MeetingRooms /> */}
        <>
          {/* <UserData /> */}
          {/* <MeetingItems /> */}
          {/* <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
          <Text mb={4}>{t.recordMeetingType}</Text>
          <Select>
            <option>type 1</option>
            <option>type 2</option>
            <option>type 3</option>
          </Select>
        </Box> */}
        </>
      </Box>

    </form>
  );
}

export default addMeeting;
