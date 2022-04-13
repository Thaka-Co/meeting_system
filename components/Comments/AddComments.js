// @flow
import * as React from "react";
import { Box, Text, useColorModeValue, Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { useSession } from "next-auth/react";
export const AddComments = (props) => {
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  const { data: session } = useSession();
  const addComment = async (e) => {
    e.preventDefault();
    const id = await session.id; // meeting id
    await fetch("/api/Comments/addComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        value: e.target.comment.value,
        meetingId: props.meetingId,
        userId: id,
      }),
    });
  };
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
        <form onSubmit={addComment}>
          <Input type={"text"} name="comment" />
          <Button mt={4} type="submit">
            {t.reply}
          </Button>
        </form>
      </Box>
    </Box>
  );
};
