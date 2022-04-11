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
  Input,
  HStack,
  Table,
  Td,
  Thead,
  Th,
  Button,
  Tr,
  Heading,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { CgToolbox } from "react-icons/cg";
import moment from "moment";
import { useState } from "react";
import AddItems from "./AddItems";
import MeetingItems from "./MeetingItems";
import { MeetingMinutes } from "./MeetingMinutes";
import MeetingRooms from "./MeetingRooms";
import { UserData } from "./Tables/UserData";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import { Router, useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
import DatePicker from "react-datepicker";
import { getCsrfToken, getSession } from "next-auth/react";
import { useSession } from "next-auth/react";
// import "../styles/calendar.css";
import { AiOutlineClockCircle } from "react-icons/ai";
function AddMeeting(props) {
  const [date, setDate] = useState("");
  const [period, setPeriod] = useState("");
  const [periodMin, setPeriodMin] = useState("");
  const [startMin, setStartMin] = useState("");
  const [start, setStart] = useState("");
  const [cyclic, setCyclic] = useState(false);
  const [rooms, setRooms] = useState("");
  const [users, setUsers] = useState("");
  const [types, setTypes] = useState("");
  const [attendance, setAttendance] = useState("");
  const [speakers, setSpeakers] = useState("");
  const [writer, setWriter] = useState("");
  const [time, setTime] = useState("");
  const [isRepated, setIsRepated] = useState("");
  const [title, setTitle] = useState("");
  const [roomId, setRoomId] = useState("");
  const [meetingType, setMeetingType] = useState("");
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  console.log("period", period, periodMin);
  console.log("start", start, startMin);
  const { data: session } = useSession();
  
  useEffect(() => {
    getRooms();
    getUsers();
    getTypes();
  }, []);
  //setUsers
  const selectUser = (e) => {
    console.log(e.target.value);
    e.target.checked
      ? setAttendance([...attendance, e.target.value])
      : attendance.splice(attendance.indexOf(e.target.value), 1); //splice
    console.log(attendance);
  };
  console.log(attendance);
  //setSpeakers
  const selectSpeaker = (e) => {
    console.log(e.target.value);
    e.target.checked
      ? setSpeakers([
          ...speakers,
          { speaker: e.target.value, time: time, isChecked: true },
        ])
      : speakers.splice(speakers.indexOf(e.target.value), 1); //splice
    console.log(speakers);
  };
  console.log(speakers);
  //console.log(speakers[0].speaker);
  const selectWriter = (e) => {
    console.log(e.target.value);
    e.target.checked
      ? setWriter([...writer, e.target.value])
      : writer.splice(writer.indexOf(e.target.value), 1); //splice
    console.log(writer);
  };
  const getUsers = async () => {
    const data = await fetch(`http://localhost:3000/api/user/getUsers`);
    const result = await data.json();
    setUsers(result);
    console.log(result);
  };
  const getTypes = async () => {
    const data = await fetch(`http://localhost:3000/api/types/getTypes`);
    const result = await data.json();
    setTypes(result);
    console.log(result);
  };
  const addMeeting =async (e) => {
    e.preventDefault();
    const id =await session.id;
    fetch(`http://localhost:3000/api/meetings/meetings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        date,
        timeFram: start,
        memebers: attendance,
        isRepated,
        roomId,
        meetingType,
        id,
      }),
    }).then(async (res) => {
      const data = await res.json();
      console.log(data, "hiiiiiiiiiiiiiiiiiiiiiiii");
      router.push(`./nextStep/${data._id}`);
      // <MeetingMinutes id={data._id} />;
    });
  };
  const getRooms = async () => {
    const data = await fetch(`http://localhost:3000/api/rooms/getRoom`);
    const result = await data.json();
    setRooms(result);
    console.log(result);
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
      <form onSubmit={addMeeting}>
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
          {/* <form onSubmit={addMeeting}> */}
          <Input
            m={3}
            type={"text"}
            placeholder={t.meetingTitle}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Calendar
            className={"calendar"}
            onChange={(e) => {
              setDate(e);
            }}
          />
          <HStack m={3} mt={7}>
            <Icon as={AiOutlineClockCircle} />
            <Datetime
              onChange={(e) => {
                setPeriod([`${e._d.getHours()}`, `${e._d.getMinutes()}`]),
                  setPeriodMin(e._d.getMinutes());
              }}
              dateFormat={false}
              inputProps={{ placeholder: t.startDate }}
              timeFormat="HH:mm:ss"
              timeConstraints={{ hours: { min: 8, max: 17 } }}
            />
          </HStack>
          <HStack m={3} mt={7}>
            <Icon as={AiOutlineClockCircle} />
            <Datetime
              onChange={(e) => {
                setStart([`${e._d.getHours()}`, `${e._d.getMinutes()}`]);
                setStartMin(e._d.getMinutes());
              }}
              dateFormat={false}
              inputProps={{ placeholder: t.endTime }}
              timeFormat="HH:mm:ss"
              timeConstraints={{ hours: { min: 8, max: 17 } }}
            />
          </HStack>
          <Checkbox
            m={3}
            mt={7}
            onChange={(e) => {
              !cyclic ? setCyclic(true) : setCyclic(false);
            }}
          >
            {t.cyclicMeeting}
          </Checkbox>
          {cyclic ? (
            <Select
              m={3}
              mt={7}
              onChange={(e) => {
                setIsRepated(e.target.value);
              }}
            >
              <option value={1}>{t.Daily}</option>
              <option value={2}>{t.weekly}</option>
              <option value={3}>{t.monthly}</option>
            </Select>
          ) : (
            ""
          )}
        </Box>

        {/* <MeetingRooms rooms={rooms} /> */}
        <Heading m="10">{t.meetingRoom}</Heading>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          p={15}
          m={5}
          borderRadius={7}
        >
          {/* <Text fontSize="lg" color={textColor} fontWeight="bold">
          Select the meeting room
        </Text> */}
          <RadioGroup
            onChange={(e) => {
              setRoomId(e);
            }}
          >
            {rooms &&
              rooms.map((item, index) => {
                return (
                  <Box
                    key={item._id}
                    m={3}
                    p={4}
                    borderWidth={3}
                    borderColor={"#F7FAFC"}
                    borderRadius={7}
                    position={"relative"}
                  >
                    <Radio value={item._id} name="rooms" required>
                      <HStack>
                        <HStack spacing={4} m={5}>
                          <BsPeople />
                          <Text>{item.size}</Text>
                        </HStack>
                        <HStack spacing={4} m={5}>
                          <IoLocationOutline />
                          <Text>{item.location}</Text>
                        </HStack>
                        <HStack spacing={4} m={5}>
                          <CgToolbox />
                          {item.tools.map((item, index) => {
                            return <Text key={index}>{item}</Text>;
                          })}
                        </HStack>
                      </HStack>
                    </Radio>
                  </Box>
                );
              })}
          </RadioGroup>
        </Box>
        <>
          {/* <UserData /> */}
          <Box
            bg={useColorModeValue("white", "gray.800")}
            p={15}
            m={5}
            borderRadius={7}
          >
            <HStack spacing={40}></HStack>
            <Table>
              <Thead>
                <tr>
                  <Th>{t.attendance}</Th>
                  {/* <Th>{t.speakers}</Th>
                  <Th>{t.writter}</Th> */}
                </tr>
              </Thead>
              <tbody>
                {users &&
                  users.map((item, index) => {
                    return (
                      <Tr key={index}>
                        <Td>
                          <Checkbox onChange={selectUser} value={item._id}>
                            {item.name}
                          </Checkbox>
                        </Td>
                        {/* <Td> */}
                        {/* <Checkbox
                            onChange={selectSpeaker}
                            value={item._id}
                          ></Checkbox> */}
                        {/* {speakers &&
                            speakers.map((ele, index) => {
                              if (ele.speaker == item._id)
                                return (
                                  // speakers[item.id-1].speaker ? (
                                  <Input
                                    key={index}
                                    type={"text"}
                                    ml={2}
                                    width={100}
                                    height={30}
                                    placeholder="time"
                                    name="time"
                                    onChange={(e) => {
                                      setTime(e.target.value);
                                      console.log(speakers);
                                      speakers[index].time = e.target.value;
                                    }}
                                  />
                                  // ) : (
                                  //   ""
                                  // )
                                );
                            })} */}
                        {/* </Td> */}
                        {/* <Td> */}
                        {/* <Checkbox
                            onChange={selectWriter}
                            value={item._id}
                          ></Checkbox> */}
                        {/* </Td> */}
                      </Tr>
                    );
                  })}
              </tbody>
            </Table>
            <Button m={3} mt={4}>
              {t.invite}
            </Button>
          </Box>
          <Box
            bg={useColorModeValue("white", "gray.800")}
            p={15}
            m={5}
            borderRadius={7}
          >
            {/* <Text m={3} mb={4}>
              {t.recordMeetingType}
            </Text> */}
            <Select
              m={3}
              mt={4}
              onChange={(e) => {
                setMeetingType(e.target.value);
                console.log(e.target.value);
              }}
              required
            >
              <option value="">{t.recordMeetingType}</option>
              {types &&
                types.map((item, index) => {
                  return (
                    <option value={item._id} key={index}>
                      {item.type}
                    </option>
                  );
                })}

              {/* <option>type 2</option>
              <option>type 3</option> */}
            </Select>
          </Box>
          {/* </form> */}
          {/* <MeetingItems />
          <AddItems /> */}
          <Button type="submit">{t.next}</Button>
        </>
      </form>
    </Box>
  );
}

export default AddMeeting;
