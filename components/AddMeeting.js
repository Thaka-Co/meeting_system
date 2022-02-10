import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import {
  Flex,
  Text,
  Radio,
  RadioGroup,
  HStack,
  Box,
  CheckboxGroup,
  Checkbox,
  VisuallyHidden,
  Stack,
  Button,
  useColorModeValue,
  Icon,
  chakra,
  Input,
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
  const [cyclic, setCyclic] = useState(false);
  const textColor = useColorModeValue("gray.700", "white");
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
          <Checkbox
            onChange={(e) => {
              !cyclic ? setCyclic(true) : setCyclic(false);
            }}
          >
            Cyclic meeting
          </Checkbox>
          {/* </> */}
          {/* ) : (
        ""
      )} */}
        </Box>
        <>
          <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
            <Text fontSize="lg" color={textColor} fontWeight="bold" >
              Select the meeting room
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
          <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
            <Text fontSize="lg" color={textColor} fontWeight="bold" >
              Choose attendance
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
            <Button mt={4}>Invite</Button>
          </Box>
          <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Meeting items
            </Text>
            {/*  */}
            <Input placeholder="title" mb={4}></Input>
            <Flex
              mt={1}
              justify="center"
              px={6}
              pt={5}
              pb={6}
              borderWidth={2}
              borderColor={useColorModeValue("gray.300", "gray.500")}
              borderStyle="dashed"
              rounded="md"
            >
              <Stack spacing={1} textAlign="center">
                <Icon
                  mx="auto"
                  boxSize={12}
                  color={useColorModeValue("gray.400", "gray.500")}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Icon>
                <Flex
                  fontSize="sm"
                  color={useColorModeValue("gray.600", "gray.400")}
                  alignItems="baseline"
                >
                  <chakra.label
                    htmlFor="file-upload"
                    cursor="pointer"
                    rounded="md"
                    fontSize="md"
                    color={useColorModeValue("brand.600", "brand.200")}
                    pos="relative"
                    _hover={{
                      color: useColorModeValue("brand.400", "brand.300"),
                    }}
                  >
                    <span>Upload a file</span>
                    <VisuallyHidden>
                      <input id="file-upload" name="file-upload" type="file" />
                    </VisuallyHidden>
                  </chakra.label>
                  <Text pl={1}>or drag and drop</Text>
                </Flex>
                <Text
                  fontSize="xs"
                  color={useColorModeValue("gray.500", "gray.50")}
                >
                  PNG, JPG, GIF up to 10MB
                </Text>
              </Stack>
            </Flex>
            {/*  */}
            <Button mt={4}>Add items</Button>
          </Box>
        </>
      </Box>
  );
}

export default addMeeting;
