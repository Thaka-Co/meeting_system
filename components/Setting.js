// @flow
import { Input, Box, useColorModeValue, Icon, HStack } from "@chakra-ui/react";
import * as React from "react";
import { AiOutlineEdit } from "react-icons/ai";
export const Setting = (props) => {
  const disable = false;
  const enableUserName = () => {
    disable ? (disable = false) : (disable = true);
    const userName = document.querySelector(".userName");
    if (disable) {
      userName.disabled = true;
    } else {
      userName.disabled = false;
    }
  };
  const enablePass = () => {
    disable ? (disable = false) : (disable = true);
    const password = document.querySelector(".password");
    if (disable) {
      password.disabled = true;
    } else {
      password.disabled = false;
    }
  };

  return (
    <div>
      <Box bg={useColorModeValue("gray.50", "inherit")}>
        <Box bgColor={"white"} p={15} m={5} borderRadius={7} w={350}>
          <HStack>
            <Input type={"text"} className={"userName"} />
            <Icon as={AiOutlineEdit} onClick={enableUserName} />
          </HStack>
          <HStack>
            <Input type={"password"} className={"password"} />
            <Icon as={AiOutlineEdit} onClick={enablePass} />
          </HStack>
        </Box>
      </Box>
    </div>
  );
};
