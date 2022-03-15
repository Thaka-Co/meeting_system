import {
  Box,
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorModeValue,
  Stack,
  Select,
  Checkbox,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { usersData } from "../../Faker/general";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
function InvoicesRow(props) {
  const [checkedBox, setCheckedBox] = useState("");
  const router = useRouter();
  const [choose, setChoose] = useState("");
  // for language and rtl
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  let ditLang = locale == "en" ? "ltr" : "rtl";
  // for checkbox to select user
  const selectUser = (e) => {
    console.log(e.target.value);
    e.target.checked
      ? setCheckedBox([...checkedBox, e.target.value])
      : checkedBox.splice(checkedBox.indexOf(e.target.value), 1); //splice
    console.log(checkedBox);
  };
  console.log(checkedBox);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textColor = useColorModeValue("gray.700", "white");
  const { date, price, format, logo, record } = props;
  const addVote = () => {};
  const addPost = async (e) => {
    e.preventDefault();
    fetch("/api/votes/addVote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: e.target.title.value,
        description: e.target.desc.value,
        users: checkedBox,
        type: choose,
      }),
    }).then((res) => res.json());
    // .then((data) => {
    //   router.push("/");
    // });

    // e.preventDefault();s
    console.log(e.target.title.value);
    console.log(e.target.desc.value);
    console.log(checkedBox);
    console.log(choose);
  };
  return (
    <>
      <Flex my={{ sm: "1rem", xl: "10px" }} alignItems="center">
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {date}
          </Text>
          {/* <HStack>
          <Icon as={upArrow} w="20px" h="auto" me="5px" color={"green"} />
          <Text fontSize="sm" color="gray.400" fontWeight="semibold" me="16px">
            {up}
          </Text>
          <Icon as={downArrow} w="20px" h="auto" me="5px" color={"red"} />
          <Text fontSize="sm" color="gray.400" fontWeight="semibold" me="16px">
            {down}
          </Text>
        </HStack> */}
        </Flex>
        <Spacer />
        <Box me="12px">
          <Text fontSize="md" color="gray.400" fontWeight="semibold">
            {price}
          </Text>
        </Box>
        {record ? (
          ""
        ) : (
          <Box>
            <Button
              p="0px"
              backgroundColor={"#add8e6"}
              variant="no-hover"
              onClick={() => {
                // console.log("ll");
              }}
            >
              <Flex alignItems="center" p="12px" onClick={onOpen}>
                <Text fontSize="md" color={textColor} fontWeight="bold">
                  {t.addVote}
                </Text>
              </Flex>
            </Button>
            <Button
              ml={3}
              p="0px"
              backgroundColor={"#add8e6"}
              variant="no-hover"
              onClick={() => {
                // console.log("ll");
              }}
            >
              <Flex alignItems="center" p="12px">
                <Text fontSize="md" color={textColor} fontWeight="bold">
                  {t.delay}
                </Text>
              </Flex>
            </Button>
          </Box>
        )}
        <Button p="0px" bg="transparent" variant="no-hover">
          <Flex alignItems="center" p="12px">
            <Icon as={logo} w="20px" h="auto" me="5px" />
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {format}
            </Text>
          </Flex>
        </Button>
        {/* <button onClick={onOpen}>hi</button> */}
        {/* {clicked ? ( */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent dir={ditLang}>
            <form onSubmit={addPost}>
              <ModalHeader>{t.voteInfo}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  type={"text"}
                  name={"title"}
                  placeholder={t.title}
                  mt={4}
                ></Input>
                <Textarea
                  resize={"none"}
                  name={"desc"}
                  placeholder={t.desc}
                  mt={4}
                ></Textarea>
                <Select
                  mt={4}
                  onChange={(e) => {
                    setChoose(e.target.value);
                  }}
                >
                  <option value={-1}>{t.voteType}</option>
                  <option value={0}>{t.private}</option>
                  <option value={1}>{t.public}</option>
                </Select>
                <Text mt={4}>{t.canVote}</Text>
                {/* <CheckboxGroup  name='hi'> */}
                {usersData.map((item, index) => {
                  return (
                    <Stack key={index} p={4}>
                      <Checkbox
                        onChange={(e) => {
                          selectUser(e);
                        }}
                        value={item.id}
                      >
                        {item.name}
                      </Checkbox>
                    </Stack>
                  );
                })}
                {/* </CheckboxGroup> */}
                {/* <Button mt={4}>Invite</Button> */}
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} type={"submit"}>
                  {t.invite}
                </Button>
                {/* <Button variant='ghost'>Secondary Action</Button> */}
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
        {/* ) : (
        ""
      )} */}
      </Flex>
      {record ? (
        <>
          <Textarea
            display={"block"}
            resize={"none"}
            placeholder={t.desc}
            mt={4}
          ></Textarea>
          <Button mt={5} bg={"#c5e1a5"} _hover={"none"}>
            {t.save}
          </Button>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default InvoicesRow;
