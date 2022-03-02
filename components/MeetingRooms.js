import * as React from "react";
import {
  Text,
  Radio,
  RadioGroup,
  HStack,
  Box,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { CgToolbox } from "react-icons/cg";
import { roomsData } from "../Faker/general";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
function MeetingRooms(props) {
  const selectRoom = (e) => {
    console.log(e);
  };
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  return (
    <div>
      <Heading m="10">{t.meetingRoom}</Heading>
      <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
        {/* <Text fontSize="lg" color={textColor} fontWeight="bold">
          Select the meeting room
        </Text> */}
        <RadioGroup onChange={selectRoom}>
          {roomsData.map((item, index) => {
            return (
              <Box
                key={item.id}
                m={3}
                p={4}
                borderWidth={3}
                borderColor={"#F7FAFC"}
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
    </div>
  );
}
export default MeetingRooms;
