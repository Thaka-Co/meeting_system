// @flow
import * as React from "react";
import { Box, HStack, Heading } from "@chakra-ui/react";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
export const MeetingInfo = (props) => {
  const textColor = useColorModeValue("gray.700", "white");
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  return (
    <div>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        p={15}
        m={5}
        borderRadius={7}
      >
        <Text fontSize="xl" color={textColor} fontWeight="bold">
          Meeting title
        </Text>
        <HStack>
          <Text fontFamily={"cursive"} fontSize={"1rem"}>
            {t.location}
          </Text>
          <Text p={3}>first floor</Text>
        </HStack>
        <HStack>
          <Text fontFamily={"cursive"} fontSize={"1rem"}>
            {t.time}
          </Text>
          <Text p={3}>21 DEC 11:21 PM</Text>
        </HStack>
      </Box>
    </div>
  );
};
