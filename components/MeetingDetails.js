import React from "react";
import { Box, HStack, Heading } from "@chakra-ui/react";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { invoicesData } from "../Faker/general";
import ItemDetails from "../components/ItemDetails";
import { Attendance } from "./Attendance.js";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
function MeetingDetails(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const router = useRouter();
  const { locale } = router;
  let t=locale== 'en' ? en : ar;
  return (
    <Box bg={useColorModeValue("gray.50", "inherit")}>
      <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
        <Text fontSize="xl" color={textColor} fontWeight="bold">
          Meeting title
        </Text>
        <HStack>
          <Text fontFamily={"cursive"} fontSize={"1rem"}>
            {t.location}
          </Text>
          <Text p={3}>first floor</Text>
        </HStack>
        <HStack>
          <Text fontFamily={"cursive"} fontSize={"1rem"}>
            {t.time}
          </Text>
          <Text p={3}>21 DEC 11:21 PM</Text>
        </HStack>
      </Box>
      <Heading m="10">{t.meetingItems}</Heading>
      {invoicesData.map((row) => {
        return (
          <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
            <ItemDetails
              date={row.date}
              votes={row.votes}
              downArrow={row.downArrow}
              upArrow={row.upArrow}
              up={row.up}
              down={row.down}
              price={row.price}
              logo={row.logo}
              format={row.format}
            />
          </Box>
        );
      })}
      <Heading m="10">{t.attendance}</Heading>
      {/* <Box bgColor={"white"} p={15} m={5} borderRadius={7}> */}
      {/* <Card overflowX={{ sm: "scroll", xl: "hidden" }}> */}
      {/* <CardHeader p="6px 0px 22px 0px"> */}
      {/* <Text fontSize="xl" color={textColor} fontWeight="bold">
            </Text> */}
      {/* </CardHeader> */}
      <Attendance />
      {/* </Card> */}
      {/* </Box> */}
      {/* <MeetingItems /> */}
      {/* <AddItems /> */}
    </Box>
  );
}

export default MeetingDetails;
