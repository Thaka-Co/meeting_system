import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Heading,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { server } from "../../config";
// import {AdobexdLogo} from 'react-icons/ai'
import { useSelector } from "react-redux";
import DashboardTableRow from "../Tables/DashboardTableRow";
function MyMeeting(props) {
  const [meetings, setMeetings] = useState("");
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  const textColor = useColorModeValue("gray.700", "white");

  const state = useSelector((state) => {
    return state;
  });
  const id = state.tokenReducer.id;
  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getUserData = async () => {
    console.log(server);
    const data = await fetch(`${server}/api/user/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const result = await data.json();
    console.log(result);
    console.log(result?.meetings);
    setMeetings(result?.meetings);
  };
  return (
    <div>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        p={15}
        m={5}
        borderRadius={7}
      >
        {meetings.length ? (
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" ps="0px">
                <Th ps="0px" color="gray.400">
                  {t.topic}
                </Th>
                <Th color="gray.400">{t.members}</Th>
                <Th color="gray.400">{t.timeFrame}</Th>
                <Th color="gray.400">{t.dueDate}</Th>
              </Tr>
            </Thead>
            <Tbody>
              {meetings.map((row, index) => {
                return (
                  <DashboardTableRow
                    key={index}
                    name={row.title}
                    // logo={'AdobexdLogo'}
                    members={row.memebers}
                    budget={row.timeFram}
                    progression={row.date}
                    meetingId={row._id}
                  />
                );
              })}
            </Tbody>
          </Table>
        ) : (
          <Box
            borderWidth="4px"
            // borderStyle="dashed"
            rounded="md"
            h="96"
            m="10"
          >
            <Center>
              {" "}
              <Heading m="10">You Do not &#39; Have Any Meetings</Heading>
            </Center>
          </Box>
        )}
      </Box>
    </div>
  );
}

export default MyMeeting;
