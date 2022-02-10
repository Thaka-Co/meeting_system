import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function InvoicesRow(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const { date, upArrow, downArrow, up, down, price, format, logo } = props;

  return (
    <Flex my={{ sm: "1rem", xl: "10px" }} alignItems="center">
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {date}
        </Text>
        <HStack>
          <Icon as={upArrow} w="20px" h="auto" me="5px" color={"green"} />
          <Text fontSize="sm" color="gray.400" fontWeight="semibold" me="16px">
            {up}
          </Text>
          <Icon as={downArrow} w="20px" h="auto" me="5px" color={"red"} />
          <Text fontSize="sm" color="gray.400" fontWeight="semibold" me="16px">
            {down}
          </Text>
        </HStack>
      </Flex>
      <Spacer />
      <Box me="12px">
        <Text fontSize="md" color="gray.400" fontWeight="semibold">
          {price}
        </Text>
      </Box>
      <Button p="0px" bg="transparent" variant="no-hover">
        <Flex alignItems="center" p="12px">
          <Icon as={logo} w="20px" h="auto" me="5px" />
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {format}
          </Text>
        </Flex>
      </Button>
    </Flex>
  );
}

export default InvoicesRow;
