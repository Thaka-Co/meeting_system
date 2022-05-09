import {
  Avatar,
  AvatarGroup,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
function DashboardTableRow(props) {
  const { logo, name, members, budget, progression, meetingId } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const router = useRouter();
  console.log('hi',meetingId);
  const showMeetingDetails = () => {
    router.push(`/meetingDetailss/${meetingId}`);
  };
  return (
    <Tr onClick={showMeetingDetails}>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex
          align="center"
          py=".8rem"
          minWidth="100%"
          flexWrap="nowrap"
          onClick={showMeetingDetails}
        >
          {/* <Icon as={logo} h={"24px"} w={"24px"} pe="5px" /> */}
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <AvatarGroup size="sm">
          {members.map((member, index) => {
            return (
              <Avatar
                key={index}
                name="Ryan Florence"
                src={member}
                _hover={{ zIndex: "3", cursor: "pointer" }}
              />
            );
          })}
        </AvatarGroup>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {budget[0]}:{budget[1] ? budget[1] : 0}
        </Text>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color="teal.300" fontWeight="bold" pb=".2rem">
            {`${progression}`}
          </Text>
        </Flex>
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
