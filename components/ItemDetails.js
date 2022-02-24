import {
  Box,
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

function ItemDetails(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const { date, upArrow, downArrow, up, down, votes, price, format, logo } =
    props;
  return (
    <Flex my={{ sm: "1rem", xl: "10px" }} bgColor={"white"} alignItems="center">
      <Flex direction="column" p={3}>
        <HStack>
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            {date}
          </Text>
        </HStack>
        <Box>
          {votes.map((item) => {
            return (
              <Box pt={4}>
                <Text
                  display={"block"}
                  fontSize="md"
                  color="gray.400"
                  fontWeight="semibold"
                  me="16px"
                >
                  {item.title}
                </Text>

                <Text
                  display={"block"}
                  fontSize="md"
                  color="gray.400"
                  fontWeight="semibold"
                  me="16px"
                >
                  {item.desc.slice(0, 60)}...
                </Text>
                <HStack>
                  <Icon
                    as={upArrow}
                    w="20px"
                    h="auto"
                    me="5px"
                    color={"green"}
                  />
                  <Text
                    fontSize="sm"
                    color="gray.400"
                    fontWeight="semibold"
                    me="16px"
                  >
                    {up}
                  </Text>
                  <Icon
                    as={downArrow}
                    w="20px"
                    h="auto"
                    me="5px"
                    color={"red"}
                  />
                  <Text
                    fontSize="sm"
                    color="gray.400"
                    fontWeight="semibold"
                    me="16px"
                  >
                    {down}
                  </Text>
                </HStack>
              </Box>
            );
          })}
          <Button mt={4} bg={"#add8e6"}>
            {" "}
            delayed
          </Button>
        </Box>
      </Flex>
      <Spacer />
      <Box me="12px">
        {/* <Text fontSize="md" color="gray.400" fontWeight="semibold">
          {price}
        </Text> */}
      </Box>
      <Button p="0px" bg="transparent" variant="no-hover">
        <Flex alignItems="center" p="34px">
          <Icon as={logo} w="20px" h="auto" me="5px" />
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {format}
          </Text>
        </Flex>
      </Button>
    </Flex>
  );
}

export default ItemDetails;