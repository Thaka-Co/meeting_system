import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaPencilAlt, FaRegTimesCircle } from "react-icons/fa";

function BillingRow(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const topicColor = useColorModeValue("gray.500", "white");
  const { topic, TimeFram, time, location } = props;

  return (
    <Box p="24px" bg={bgColor} my="22px" borderRadius="12px">
      <Flex justify="space-between" w="100%">
        <Flex direction="column" maxWidth="70%">
          <Text color={topicColor} fontSize="md" fontWeight="bold" mb="10px">
            {topic}
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Time Frame:{" "}
            <Text as="span" color="gray.500">
              {TimeFram}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Time:{" "}
            <Text as="span" color="gray.500">
              {time}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            location:{" "}
            <Text as="span" color="gray.500">
              {location}
            </Text>
          </Text>
        </Flex>
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="flex-start"
          p={{ md: "24px" }}
        >
          <Button
            p="0px"
            bg="transparent"
            mb={{ sm: "10px", md: "0px" }}
            me={{ md: "12px" }}
          >
            <Flex color="red.500" cursor="pointer" align="center" p="12px">
              <Icon as={FaRegTimesCircle} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                Cancel
              </Text>
            </Flex>
          </Button>
          <Button p="0px" bg="transparent">
            <Flex color={textColor} cursor="pointer" align="center" p="12px">
              <Icon as={FaPencilAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                EDIT
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default BillingRow;
