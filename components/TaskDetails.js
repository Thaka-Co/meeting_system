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
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
function TaskDetails(props) {
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  return (
    <Box bg={useColorModeValue("gray.50", "inherit")}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        p={15}
        m={5}
        borderRadius={7}
        w={350}
      >
        <Heading>Purity UI Version</Heading>
        <HStack mt={8} ml={12} spacing={8}>
          <VStack>
            <Text>{t.cost}</Text>
            <Text>10</Text>
          </VStack>
          <VStack>
            <Text>{t.time}</Text>
            <Text>60</Text>
          </VStack>
          <VStack>
            <Text>{t.progress}</Text>
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
