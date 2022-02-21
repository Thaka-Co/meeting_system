// @flow
import * as React from "react";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Button,
  Stack,
} from "@chakra-ui/react";
export const AddComments = (props) => {
  return (
    <Box bg={useColorModeValue("gray.50", "inherit")}>
      <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
        <Text mb={3}>User name</Text>
        <Flex
          mt={1}
          justify="center"
          px={6}
          pt={5}
          pb={6}
          borderWidth={2}
          borderColor={useColorModeValue("gray.300", "gray.500")}
          // borderStyle="dashed"
          rounded="md"
        >
          <Stack spacing={1} textAlign="center"></Stack>
        </Flex>
        <Button mt={4}>reply</Button>
      </Box>
    </Box>
  );
};
