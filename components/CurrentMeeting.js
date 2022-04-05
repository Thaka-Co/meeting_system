// @flow
import * as React from "react";
import AddItems from "./AddItems";
import {
  Box,
  Heading,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
// import MeetingItems from "./MeetingItems";
import { Attendance } from "./Attendance";
import { AddComments } from "./Comments/AddComments";
import { DisplayComments } from "./Comments/DisplayComments";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
function CurrentMeeting(props) {
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  return (
    <div>
      {/* <Box bg={useColorModeValue("gray.50", "inherit")}> */}
      <Box
        bg={useColorModeValue("white", "gray.800")}
        p={15}
        m={5}
        borderRadius={7}
      >
        {/* <Text fontSize="xl" color={textColor} fontWeight="bold">
          Meeting title
        </Text> */}
        <HStack>
          <Text fontFamily={"cursive"} fontSize={"1rem"}>
            {t.Speaker}
          </Text>
          <Text p={3}>Alexa Liras</Text>
        </HStack>
        <HStack>
          <Text fontFamily={"cursive"} fontSize={"1rem"}>
            {t.timeRemaining}
          </Text>
          <Text p={3}>21</Text>
        </HStack>
      </Box>
      <AddItems id={props.id} />
      {/* <MeetingItems id={props.id} /> */}
      <Heading m="10">{t.attendance}</Heading>
      <Attendance attend={true} id={props.id} />
      <Heading m={10}>{t.comments}</Heading>
      <DisplayComments />
      <AddComments />
      {/* </Box> */}
    </div>
  );
}
export default CurrentMeeting;
