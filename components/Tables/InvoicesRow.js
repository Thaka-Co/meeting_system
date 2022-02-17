import {
  Box,
  Button,
  Flex,
  HStack,
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
function InvoicesRow(props) {
  const [checkedBox, setCheckedBox] = useState("");
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
  const { date, upArrow, downArrow, up, down, price, format, logo } = props;
  const addVote = () => {};
  return (
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
      <Box>
        <Button
          p="0px"
          backgroundColor={"#add8e6"}
          variant="no-hover"
          onClick={() => {
            console.log("ll");
          }}
        >
          <Flex alignItems="center" p="12px" onClick={onOpen}>
            <Text fontSize="md" color={textColor} fontWeight="bold">
              add vote
            </Text>
          </Flex>
        </Button>
        <Button
        ml={3}
          p="0px"
          backgroundColor={"#add8e6"}
          variant="no-hover"
          onClick={() => {
            console.log("ll");
          }}
        >
          <Flex alignItems="center" p="12px" onClick={onOpen}>
            <Text fontSize="md" color={textColor} fontWeight="bold">
              delay
            </Text>
          </Flex>
        </Button>
      </Box>

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
        <ModalContent>
          <ModalHeader>Vote info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type={"text"} placeholder={"Title"} mt={4}></Input>
            <Textarea
              resize={"none"}
              placeholder="Description"
              mt={4}
            ></Textarea>
            <Select mt={4}>
              <option value="">vote type</option>
              <option value={0}>private</option>
              <option value={1}>public</option>
            </Select>
            <Text mt={4}>how can vote ?</Text>
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
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Invite
            </Button>
            {/* <Button variant='ghost'>Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* ) : (
        ""
      )} */}
    </Flex>
  );
}

export default InvoicesRow;
