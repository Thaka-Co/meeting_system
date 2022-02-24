import {
  Heading,
  Box,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { AddComments } from "./Comments/AddComments";
import { DisplayComments } from "./Comments/DisplayComments";
function TaskDetails(props) {
  return (
    <Box bg={useColorModeValue("gray.50", "inherit")}>
      <Box bgColor={"white"} p={15} m={5} borderRadius={7} w={350}>
        <Heading>Purity UI Version</Heading>
        <HStack mt={8} ml={12} spacing={8}>
          <VStack>
            <Text>Cost</Text>
            <Text>10</Text>
          </VStack>
          <VStack>
            <Text>Time</Text>
            <Text>60</Text>
          </VStack>
          <VStack>
            <Text>Progress</Text>
            <Text>60%</Text>
          </VStack>
        </HStack>
      </Box>
      
      <DisplayComments />
      <AddComments />
    </Box>
  );
}
export default TaskDetails;
