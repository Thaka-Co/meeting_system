// @flow
import * as React from "react";
import { Box, Text, Input, useColorModeValue } from "@chakra-ui/react";
export const Comment = (props) => {
  const { name, value } = props;
  return (
    <div>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        p={15}
        m={5}
        borderRadius={7}
      >
        <Text mb={3}>{name}</Text>
        <Input value={value} disabled />
      </Box>
    </div>
  );
};
