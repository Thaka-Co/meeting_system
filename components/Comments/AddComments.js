// @flow
import * as React from "react";
import { Box, Text, useColorModeValue, Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export const AddComments = (props) => {
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
      >
        <Text mb={3}>User name</Text>
        {/* <Flex
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
        </Flex> */}
        <Input type={"text"} />
        <Button mt={4}>{t.reply}</Button>
      </Box>
    </Box>
  );
};
