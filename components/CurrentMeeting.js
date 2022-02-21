// @flow
import * as React from "react";
import AddItems from "./AddItems";
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import MeetingItems from "./MeetingItems";
import { Attendance } from "./Attendance";
import { AddComments } from "./Comments/AddComments";
import { DisplayComments } from "./Comments/DisplayComments";
function CurrentMeeting(props) {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <div>
      <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
        {/* <Text fontSize="xl" color={textColor} fontWeight="bold">
          Meeting title
        </Text> */}
        <HStack>
          <Text fontFamily={"cursive"} fontSize={"1rem"}>
            Speaker
          </Text>
          <Text p={3}>Alexa Liras</Text>
        </HStack>
        <HStack>
          <Text fontFamily={"cursive"} fontSize={"1rem"}>
            Time remaining
          </Text>
          <Text p={3}>21</Text>
        </HStack>
      </Box>
      <AddItems />
      <MeetingItems />
      <Heading m="10">Attendance</Heading>
      <Attendance attend={true} />
      <Heading m={10}>Comments</Heading>
      <DisplayComments />
      <AddComments />
    </div>
  );
}
export default CurrentMeeting;
