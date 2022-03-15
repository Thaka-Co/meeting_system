// @flow
import {
  Input,
  Text,
  Box,
  useColorModeValue,
  Icon,
  HStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import * as React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
import { useSession } from "next-auth/react";
export const Setting = (props) => {
  const [enableUser, setEnableUser] = React.useState(true);
  const [enablePassword, setEnablePassword] = React.useState(true);
  const [enableEm, setEnableEm] = React.useState(true);
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  const { data: session } = useSession();
  // console.log(session.id);
  const enableUserName = () => {
    enableUser ? setEnableUser(false) : setEnableUser(true);
    const userName = document.querySelector(".userName");
    if (enableUser) {
      userName.disabled = false;
    } else {
      userName.disabled = true;
      document.querySelector(".userName").value = " xxxc ";
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
  const update = async (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/user/updateInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: e.target.userName.value,
        password: e.target.password.value,
        confirmPass: e.target.confirmPass.value,
        email: e.target.email.value,
        id: session.id,
      }),
    }).then((res) => res.json());
  };
  console.log(enableUser);
  return (
    <div>
      <Box bg={useColorModeValue("gray.50", "inherit")}>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          p={15}
          m={5}
          borderRadius={7}
          w={350}
        >
          <form onSubmit={update}>
            <Heading mb={10}>{t.profile}</Heading>
            <HStack spacing={30} mb={9}>
              <Input
                type={"text"}
                className={"userName"}
                placeholder={t.userName}
                value={props.user.name}
                name={"userName"}
                disabled
              />
              <Icon as={AiOutlineEdit} onClick={enableUserName} />
            </HStack>
            <HStack spacing={30} mb={9}>
              <Input
                type={"email"}
                className={"email"}
                placeholder={t.email}
                value={props.user.email}
                name={"email"}
                disabled
              />
              <Icon as={AiOutlineEdit} onClick={enableEmail} />
            </HStack>
            <HStack spacing={30} mb={9}>
              <Input
                type={"password"}
                className={"password"}
                placeholder={t.password}
                value={props.user.password}
                name={"password"}
                disabled
              />
              <Icon as={AiOutlineEdit} onClick={enablePass} />
            </HStack>
            {/* {!enablePassword ? ( */}
            <HStack spacing={30}>
              <Input
                type={"password"}
                className={"password"}
                placeholder={t.confirmPassword}
                name={"confirmPass"}
                visibility={!enablePassword ? "visible" : "hidden"}
              />
              <Icon as={AiOutlineEdit} visibility={"hidden"} />
            </HStack>
            {/* ) : (
              ""
            )} */}
            {/* {!enableUser || !enablePassword || !enableEm ? (
              <Button type="submit">Update</Button>
            ) : (
              ""
            )} */}
            <Button type="submit">Edit my profile</Button>
          </form>
        </Box>
      </Box>
    </div>
  );
};
