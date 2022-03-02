// @flow
import * as React from "react";
import {
  Input,
  Textarea,
  Box,
  useColorModeValue,
  Button,
  Icon,
} from "@chakra-ui/react";
import { BsHandThumbsUpFill, BsFillHandThumbsDownFill } from "react-icons/bs";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
export const VoteDetails = (props) => {
  const { votes } = props;
  console.log(votes.title);
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  // let ditLang = locale == "en" ? "ltr" : "rtl";
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
            {t.Like}
            {/* <BsHandThumbsUpFill /> */}
            <Icon m={1} color={"#ddb892"} as={BsHandThumbsUpFill} />
          </Button>
          <Button color={"white"} bg={"red"} _hover={"none"}>
            {t.DisLike}
            {/* <BsFillHandThumbsDownFill /> */}
            <Icon m={1} as={BsFillHandThumbsDownFill} color={"#ddb892"} />
          </Button>
        </Box>
      </Box>
    </div>
  );
};
