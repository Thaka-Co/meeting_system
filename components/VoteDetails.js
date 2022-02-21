// @flow
import * as React from "react";
import { invoicesData } from "../Faker/general";
import {
  Input,
  Text,
  Textarea,
  Box,
  useColorModeValue,
  Button,
  Icon,
} from "@chakra-ui/react";
import { BsHandThumbsUpFill, BsFillHandThumbsDownFill } from "react-icons/bs";
export const VoteDetails = (props) => {
  const { votes } = props;
  console.log(votes.title);
  return (
    <div>
      <Box bg={useColorModeValue("gray.50", "inherit")}>
        <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
          <Input value={votes.title} disabled mb={4} />
          <Textarea disabled resize={"none"}>
            {votes.desc}
          </Textarea>
          {/* <Text>{votes.title}</Text><Text>{votes.desc}</Text> */}
          <Button bg={"green"} color="white" m={5} _hover={"none"}>
            Like
            {/* <BsHandThumbsUpFill /> */}
            <Icon m={1} color={"#ddb892"} as={BsHandThumbsUpFill} />
          </Button>
          <Button color={"white"} bg={"red"} _hover={"none"}>
            Dislike
            {/* <BsFillHandThumbsDownFill /> */}
            <Icon m={1} as={BsFillHandThumbsDownFill} color={"#ddb892"} />
          </Button>
        </Box>
      </Box>
    </div>
  );
};
