// @flow
import {
  Input,
  Box,
  useColorModeValue,
  Icon,
  HStack,
  Heading,
} from "@chakra-ui/react";
import * as React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
export const Setting = (props) => {
  const [enableUser, setEnableUser] = React.useState(true);
  const [enablePassword, setEnablePassword] = React.useState(true);
  const [enableEm, setEnableEm] = React.useState(true);
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  const enableUserName = () => {
    enableUser ? setEnableUser(false) : setEnableUser(true);
    const userName = document.querySelector(".userName");
    if (enableUser) {
      userName.disabled = false;
    } else {
      userName.disabled = true;
    }
  };
  const enablePass = () => {
    enablePassword ? setEnablePassword(false) : setEnablePassword(true);
    const password = document.querySelector(".password");
    if (enablePassword) {
      password.disabled = false;
    } else {
      password.disabled = true;
    }
  };
  const enableEmail = () => {
    enableEm ? setEnableEm(false) : setEnableEm(true);
    const email = document.querySelector(".email");
    if (enableEm) {
      email.disabled = false;
    } else {
      email.disabled = true;
    }
  };

  return (
    <div>
      <Box bg={useColorModeValue("gray.50", "inherit")}>
        <Box bgColor={"white"} p={15} m={5} borderRadius={7} w={350} p={7}>
          <Heading mb={10}>{t.profile}</Heading>
          <HStack spacing={30} mb={9}>
            <Input
              type={"text"}
              className={"userName"}
              placeholder={t.userName}
              disabled
            />
            <Icon as={AiOutlineEdit} onClick={enableUserName} />
          </HStack>
          <HStack spacing={30} mb={9}>
            <Input
              type={"email"}
              className={"email"}
              placeholder={t.email}
              disabled
            />
            <Icon as={AiOutlineEdit} onClick={enableEmail} />
          </HStack>
          <HStack spacing={30} mb={9}>
            <Input
              type={"password"}
              className={"password"}
              placeholder={t.password}
              disabled
            />
            <Icon as={AiOutlineEdit} onClick={enablePass} />
          </HStack>
          {!enablePassword ? (
            <HStack spacing={30}>
              <Input
                type={"password"}
                className={"password"}
                placeholder={t.confirmPassword}
              />
              <Icon as={AiOutlineEdit} visibility={"hidden"} />
            </HStack>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </div>
  );
};
