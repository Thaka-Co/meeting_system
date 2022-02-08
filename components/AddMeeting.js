import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import {
  Text,
  Radio,
  RadioGroup,
  HStack,
  VStack,
  Box,
  CheckboxGroup,
  Checkbox,
  Stack,
  Button,
} from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { CgToolbox } from "react-icons/cg";
import moment from "moment";
import { useState } from "react";
function addMeeting(props) {
  const [date, setDate] = useState("");
  const [startH, setStartH] = useState("");
  const [startMin, setStartMin] = useState("");
  const [endH, setEndH] = useState("");
  const [endMin, setEndMin] = useState("");
  const [cyclic,setCyclic]=useState(false);
  console.log("starting", startH, startMin);
  console.log("ending", endH, endMin);
  const rooms = [
    { id: 1, location: "first floor", size: 6, tools: ["board", "screen"] },
    { id: 2, location: "second floor", size: 8, tools: ["board", "screen"] },
    { id: 3, location: "third floor", size: 10, tools: ["board", "screen"] },
  ];
  const users = [
    { id: 1, name: "Mareem", position: "IT manager", email: "m@m.com" },
    { id: 2, name: "Safiah", position: "IT manager", email: "s@s.com" },
    { id: 3, name: "Najla", position: "IT manager", email: "s@s.com" },
  ];
  const meetings = [];

  const selectRoom = (e) => {
    console.log(e);
  };
  const selectDate = (e) => {
    console.log(e._d, "date");
    setDate(e._d);
  };
  const selectUser = (e) => {
    console.log(e);
  };
  // to get date of yesterday
  const yesterday = moment().subtract(1, "day");
  // to specify valid date to meetings
  const valid = function (current) {
    return current.isAfter(yesterday);
  };console.log(cyclic)
  return (
    <Box bgColor={"#e5e5e5"}>
       <Box bgColor={"white"} p={15} m={10} borderRadius={7}>
      <Datetime
        onChange={selectDate}
        isValidDate={valid}
        timeFormat={false}
        inputProps={{ placeholder: "select date please" }}
      />
      {/* {date ? ( */}
        {/* <> */}
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
          <Checkbox onChange={(e)=>{!cyclic?setCyclic(true):setCyclic(false);}}>Cyclic meeting</Checkbox>
        {/* </> */}
      {/* ) : (
        ""
      )} */}
      </Box>
      <>
        <Box bgColor={"white"} p={15} m={10} borderRadius={7}>
          <Text fontFamily={"cursive"} fontSize={"3rem"} p={5}>
            select the meeting room
          </Text>
          <RadioGroup onChange={selectRoom}>
            {rooms.map((item, index) => {
              return (
                <Box
                  key={item.id}
                  m={3}
                  p={4}
                  borderWidth={3}
                  borderColor={"#fca311"}
                  borderRadius={7}
                  position={"relative"}
                >
                  <Radio value={index}>
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
        <Box bgColor={"white"} p={15} m={10} borderRadius={7}>
          <Text fontFamily={"cursive"} fontSize={"3rem"} p={5}>
            choose attendance
          </Text>
          <CheckboxGroup onChange={selectUser}>
            {users.map((item, index) => {
              return (
                <Stack key={index} p={4}>
                  <Checkbox value={item.id}>{item.name}</Checkbox>
                </Stack>
              );
            })}
          </CheckboxGroup>
          <Button>Invite</Button>
        </Box>
      </>
    </Box>
  );
}

export default addMeeting;
