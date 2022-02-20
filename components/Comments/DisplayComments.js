// @flow
import * as React from "react";
import { comments } from "../../Faker/general";
import { Text, Box, Input } from "@chakra-ui/react";
export const DisplayComments = (props) => {
  return (
    <div>
      {comments.map((item) => {
        return (
          <>
            <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
              <Text mb={3}>{item.name}</Text>
              <Input value={item.value} disabled />
            </Box>
          </>
        );
      })}
    </div>
  );
};
