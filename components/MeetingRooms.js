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
function MeetingRooms({ rooms }) {
  const selectRoom = (e) => {
    console.log(e);
  };
  console.log(getStaticProps);
  console.log(rooms, "popopop");
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  return (
    <div>
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

export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:3000/api/rooms/getRoom')
  const data = await res.json()

  return data
}
export const getStaticProps = async () => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res =
  const rooms= await loadPosts;
  //  = await res.json();
  console.log(rooms);
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      rooms,
    },
  };
};
export default MeetingRooms;
