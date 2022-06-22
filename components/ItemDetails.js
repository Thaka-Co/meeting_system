import classes from './status.module.css';
import {
  Box,
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
  HStack,
  Badge,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
import { VscTriangleDown } from "react-icons/vsc";
function ItemDetails(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const {
    date,
    upArrow,
    downArrow,
    up,
    down,
    votes,
    format,
    logo,
    isDelayed,
    status,
  } = props;
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      p={15}
      m={5}
      borderRadius={7}
    >
      <Flex my={{ sm: "1rem", xl: "10px" }} alignItems="center">
        <Flex direction="column" p={3}>
          <HStack>
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              {date}
            </Text>
          </HStack>
          <Box>
            {votes.map((item, index) => {
              return (
                <Box pt={4} key={index}>
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
                      as={VscTriangleDown}
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
                      as={VscTriangleDown}
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
            <Button mt={4} bg={"#add8e6"} disabled>
              {isDelayed ? t.delayed : t.notDelay}
              {/* {t.delayed} */}
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
          <VStack>
            {" "}
            <div
              borderRadius="full"
              px="2"
              className={classes[`${status}`]}
            >
              {status}
            </div>
            <Flex alignItems="center" p="34px">
              <Icon as={logo} w="20px" h="auto" me="5px" />
              <Text fontSize="md" color={textColor} fontWeight="bold">
                {format}
              </Text>
            </Flex>
          </VStack>
        </Button>
      </Flex>
    </Box>
  );
}

export default ItemDetails;
