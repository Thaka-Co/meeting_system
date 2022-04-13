// @flow
import * as React from "react";
import { comments } from "../../Faker/general";
import { Comment } from "./Comment";
import { Text, Box, Input, useColorModeValue } from "@chakra-ui/react";
export const DisplayComments = (props) => {
  const [comments, useComments] = React.useState("");
  React.useEffect(() => {
    getComments();
  }, []);
  const getComments = async () => {
    const id = props.meetingId;
    const result = await fetch(`/api/Comments/${id}`);
    const data = await result.json();
    console.log(data);
    useComments(data);
  };
  return (
    <div>
      {comments &&
        comments.map((item, index) => {
          return <Comment key={index} name={item.userId?.name} value={item.value} />;
        })}
    </div>
  );
};
