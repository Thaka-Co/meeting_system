import React, { useEffect, useState } from "react";
import { Box, HStack, Heading } from "@chakra-ui/react";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { invoicesData } from "../Faker/general";
import ItemDetails from "../components/ItemDetails";
import { Attendance } from "./Attendance.js";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
import {FaFilePdf} from 'react-icons/fa'
import { MeetingInfo } from "./MeetingInfo";
// import {VscTriangleDown,VscTriangleUp} from 'react-icons/vsc'
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
function MeetingDetails(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const [meeting, setMeetings] = useState();
  const [items, setItems] = useState('');
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  useEffect(() => {
    getMeetingDetails();
    getMeetingItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(props);
  const getMeetingItems = async () => {
    const id = props.meetingId; // meeting id
    console.log(props.meetingId);
    fetch(`/api/items/${id}`).then(async (res) => {
      const data = await res.json();
      console.log(data);
      setItems(data);
    });
  };
  const getMeetingDetails = async () => {
    const id = props.meetingId; // meeting id
    console.log(props.meetingId);
    fetch(`/api/meetings/${id}`).then(async (res) => {
      const data = await res.json();
      console.log(data);
      setMeetings(data);
    });
  };
  return (
    <Box bg={useColorModeValue("gray.50", "inherit")}>
      <MeetingInfo />
      <Heading m="10">{t.meetingItems}</Heading>
      {items.length && items.map((row, index) => {
        return (
          // <Box
          //   key={index}
          //   bg={useColorModeValue("white", "gray.800")}
          //   p={15}
          //   m={5}
          //   borderRadius={7}
          // >
          <ItemDetails
            key={index}
            date={row.title}
            votes={row.votes}
            downArrow={VscTriangleDown}
            upArrow={VscTriangleUp}
            up={row.up}
            down={row.down}
            price={row.price}
            logo={FaFilePdf}
            format={"PDF"}
            isDelayed={row.isDelayed}
            status={row.status.value}
          />
          // </Box>
        );
      })}
      <Heading m="10">{t.attendance}</Heading>
      {/* <Box bgColor={"white"} p={15} m={5} borderRadius={7}> */}
      {/* <Card overflowX={{ sm: "scroll", xl: "hidden" }}> */}
      {/* <CardHeader p="6px 0px 22px 0px"> */}
      {/* <Text fontSize="xl" color={textColor} fontWeight="bold">
            </Text> */}
      {/* </CardHeader> */}
      <Attendance attend={false} id={props.meetingId} />
      {/* </Card> */}
      {/* </Box> */}
      {/* <MeetingItems /> */}
      {/* <AddItems /> */}
    </Box>
  );
}

export default MeetingDetails;
