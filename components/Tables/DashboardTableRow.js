import {
  Avatar,
  AvatarGroup,
  Flex,
  Icon,
  Link,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function DashboardTableRow(props) {
  const { logo, name, members, budget, progression } = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Icon as={logo} h={"24px"} w={"24px"} pe="5px" />
          <Link href="/meetingDetails">
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {name}
          </Text>
          </Link>
        </Flex>
      </Td>
      <Td>
        <AvatarGroup size="sm">
          {members.map((member) => {
            return (
              <Avatar
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
          {budget}
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
