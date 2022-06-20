// @flow
import * as React from "react";
import { comments } from "../../Faker/general";
import { Comment } from "./Comment";
import { Text, Box, Input, useColorModeValue } from "@chakra-ui/react";
export const DisplayComments = (props) => {
  const [comments, setComments] = React.useState("");
  React.useEffect(() => {
    getComments();
  }, []);
  const getComments = async () => {
    const id = props.meetingId;
    const result = await fetch(`/api/Comments/${id}`);
    const data = await result.json();
    console.log(data);
    setComments(data);
  };
  return (
    <div>
      {comments &&
        comments.map((item, index) => {
          return (
            <Comment key={index} name={item.userId?.name} value={item.value} />
          );
        })}
    </div>
  );
};
export async function getServerSideProps() {
  const res = await fetch(`/api/Comments/${id}`);
  const comment = await res.json();
  return { props: { comment } };
}
