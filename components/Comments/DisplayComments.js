// @flow
import * as React from "react";
import { Comment } from "./Comment";
import { Text, Box, Input, useColorModeValue } from "@chakra-ui/react";
import { server } from "../../config";
export const DisplayComments = (props) => {
  const [comments, setComments] = React.useState("");
  React.useEffect(() => {
    getComments();
  }, []);
  const getComments = async () => {
    const id = props.meetingId;
    const result = await fetch(`${server}/api/Comments/${id}`);
    console.log(await result.json);
    const data = await result.json();
    console.log(data);
    if(data==='there is no comments')setComments([]);
    else{setComments(data);}
  };
  return (
    <div>
      {comments.length ?
        comments.map((item, index) => {
          return (
            <Comment key={index} name={item.userId?.name} value={item.value} />
          );
        }):comments}
    </div>
  );
};
export async function getServerSideProps() {
  const res = await fetch(`/api/Comments/${id}`);
  const comment = await res.json();
  return { props: { comment } };
}
