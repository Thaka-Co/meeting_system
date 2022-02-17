import React, { useState } from "react";
import { usersData } from "../../Faker/general";
import {
  Text,
  Box,
  Checkbox,
  Stack,
  Tr,
  Button,
  useColorModeValue,
  HStack,
  Table,
  Td,
  Thead,
  Th,
  Input,
} from "@chakra-ui/react";

export const UserData = (props) => {
  const textColor = useColorModeValue("gray.700", "white");
  const [attendance, setAttendance] = useState("");
  const [speakers, setSpeakers] = useState("");
  const [writer, setWriter] = useState("");
  const [time, setTime] = useState("");
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
  console.log(writer);
  return (
    <div>
      <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
        <HStack spacing={40}>
          {/* <Text fontSize="lg" color={textColor} fontWeight="bold">
            Choose 
          </Text> */}
        </HStack>
        {/* <CheckboxGroup  > */}{" "}
        <Table>
          <Thead>
            <Th>attendance</Th>
            <Th>speakers</Th>
            <Th>writer</Th>
          </Thead>
          {usersData.map((item, index) => {
            return (
              <Tr>
                <Td>
                  <Checkbox onChange={selectUser} value={item.id}>
                    {item.name}
                  </Checkbox>
                </Td>
                <Td>
                  <Checkbox onChange={selectSpeaker} value={item.id}></Checkbox>
                  {speakers &&
                    speakers.map((ele, index) => {
                      if (ele.speaker == item.id)
                        return (
                          // speakers[item.id-1].speaker ? (
                          <Input
                            type={"text"}
                            ml={2}
                            width={100}
                            height={30}
                            placeholder="time"
                            name="time"
                            onChange={(e) => {
                              setTime(e.target.value);
                              console.log(time);
                            }}
                          />
                          // ) : (
                          //   ""
                          // )
                        );
                    })}
                </Td>
                <Td>
                  <Checkbox onChange={selectWriter} value={item.id}></Checkbox>
                </Td>
              </Tr>
            );
          })}
        </Table>
        {/* </CheckboxGroup> */}
        <Button mt={4}>Invite</Button>
      </Box>
    </div>
  );
};
