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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  Select,
} from "@chakra-ui/react";
import * as React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
import { useSession } from "next-auth/react";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
export const Setting = (props) => {
  const [user, setUser] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let ditLang = locale == "en" ? "ltr" : "rtl";
  // const [enablePassword, setEnablePassword] = React.useState(true);
  // const [enableEm, setEnableEm] = React.useState(true);
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  const { data: session } = useSession();
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const id =await session.id; // meeting id
    console.log(id);
    const data = await fetch(`http://localhost:3000/api/user/${id}`);
    const result = await data.json();
    setUser(result);
    console.log(result);
  };
  const update = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/user/updateInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.userName.value,
        password: e.target.password.value,
        confirmPass: e.target.confirmPass.value,
        email: e.target.email.value,
        id: session.id,
      }),
    }); //.then((res) => console.log(res));
    getUserData();
  };
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
          <>
            <Heading mb={10}>{t.profile}</Heading>
            <HStack spacing={30} mb={9}>
              <Input
                type={"text"}
                className={"userName"}
                placeholder={t.userName}
                value={user.name}
                name={"nameValue"}
                disabled
              />
              {/* <Icon as={AiOutlineEdit} onClick={enableUserName} /> */}
            </HStack>
            <HStack spacing={30} mb={9}>
              <Input
                type={"email"}
                className={"email"}
                placeholder={t.email}
                value={user.email}
                name={"email"}
                disabled
              />
              {/* <Icon as={AiOutlineEdit} onClick={enableEmail} /> */}
            </HStack>
            <HStack spacing={30} mb={9}>
              <Input
                type={"password"}
                className={"password"}
                placeholder={t.password}
                value={user.password}
                name={"password"}
                disabled
              />
              {/* <Icon as={AiOutlineEdit} onClick={enablePass} /> */}
            </HStack>
            <HStack spacing={30}>
              {/* <Input
                type={"password"}
                className={"password"}
                placeholder={t.confirmPassword}
                name={"confirmPass"}
                // visibility={!enablePassword ? "visible" : "hidden"}
              />
              <Icon as={AiOutlineEdit} visibility={"hidden"} /> */}
            </HStack>
            <Button onClick={onOpen}>Edit my profile</Button>

            {/* ........................................ */}

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent dir={ditLang}>
                <form onSubmit={update}>
                  <ModalHeader>{t.voteInfo}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <HStack spacing={30} mb={9}>
                      <Input
                        type={"text"}
                        className={"userName"}
                        placeholder={t.userName}
                        // value={props.user.name}
                        name={"userName"}
                      />
                      {/* <Icon as={AiOutlineEdit} onClick={enableUserName} /> */}
                    </HStack>
                    <HStack spacing={30} mb={9}>
                      <Input
                        type={"email"}
                        className={"email"}
                        placeholder={t.email}
                        // value={props.user.email}
                        name={"email"}
                      />
                      {/* <Icon as={AiOutlineEdit} onClick={enableEmail} /> */}
                    </HStack>
                    <HStack spacing={30} mb={9}>
                      <Input
                        type={"password"}
                        className={"password"}
                        placeholder={t.password}
                        // value={props.user.password}
                        name={"password"}
                      />
                      {/* <Icon as={AiOutlineEdit} onClick={enablePass} /> */}
                    </HStack>
                    <HStack spacing={30}>
                      <Input
                        type={"password"}
                        className={"password"}
                        placeholder={t.confirmPassword}
                        name={"confirmPass"}
                        // visibility={!enablePassword ? "visible" : "hidden"}
                      />
                      {/* <Icon as={AiOutlineEdit} visibility={"hidden"} /> */}
                    </HStack>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} type={"submit"}>
                      {t.save}
                    </Button>
                    <Button colorScheme="blue" mr={3}>
                      {t.cancel}
                    </Button>
                    {/* <Button variant='ghost'>Secondary Action</Button> */}
                  </ModalFooter>
                </form>
              </ModalContent>
            </Modal>
          </>
        </Box>
      </Box>
    </div>
  );
};
