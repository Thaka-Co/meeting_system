// @flow
import * as React from "react";
import { comments } from "../../Faker/general";
import { Comment } from "./Comment";
import { Text, Box, Input, useColorModeValue } from "@chakra-ui/react";
export const DisplayComments = (props) => {
  return (
    <div>
      {comments.map((item, index) => {
        return (
          <Comment key={index} name={item.name} value={item.value} />
        );
      })}
    </div>
  );
};
