import React, { useState, useEffect } from "react";
import {
  Flex,
  Text,
  Box,
  VisuallyHidden,
  Stack,
  Button,
  useColorModeValue,
  Icon,
  chakra,
  Input,
  Heading,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  Checkbox,
  HStack,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import MeetingItems from "./MeetingItems";
import InvoicesRow from "../components/Tables/InvoicesRow";

import { FaFilePdf } from "react-icons/fa";
function AddItems(props) {
  const router = useRouter();
  const [attach, setAttach] = useState("");
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [trigger, setTrigger] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [items, setItems] = useState("");
  const [delayedItems, setDelayedItems] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  let ditLang = locale == "en" ? "ltr" : "rtl";
  useEffect(() => {
    delayedItem();
    getItems();
  }, []);
  console.log(props.id);
  const selectItem = async (e) => {
    console.log(e.target.value);
    e.target.checked
      ? setSelectedItem([...selectedItem, e.target.value])
      : selectedItem.splice(selectedItem.indexOf(e.target.value), 1); //splice
    console.log(selectedItem);
    delayedItem();
  };
  console.log(selectedItem);
  const addItem = async (e) => {
    e.preventDefault();
    // save file to server
    // const form = document.querySelector("form");
    // const file = new FormData(form);
    // console.log(image.name);
    // file.append("file", JSON.stringify(image));
    // file='ooo'
    // console.log("this is file", file);
    // const response = await fetch("/api/attachments/addAttachment", {
    //   method: "POST",
    //   // file,
    // });
    // console.log(response);
    //create item
    // const result = await
    if (e.target.title.value) {
      await fetch("/api/items/addItem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          title: e.target.title.value,
          description: e.target.desc.value,
          meetingId: props.id,
          selectedItem,
        }),
      });
    }
    if (selectItem) {
      await fetch("/api/items/addItem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          meetingId: props.id,
          selectedItem,
        }),
      });
    }
    console.log("kk");
    delayedItem();
    getItems();
  };
  const addAttach = async (e) => {
    e.preventDefault();
    setAttach(e.target.value);
    console.log("from add attach", e.target.files);
    // console.log(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  const getItems = async () => {
    console.log(props.id, "items");
    const id = props.id;
    const result = await fetch(`/api/items/${id}`);
    console.log(result);
    const data = await result.json();
    console.log(data);
    setItems(data);
    // delayedItem();
  };
  const delayedItem = async () => {
    const res = await fetch(`/api/items/delayedItems`);
    const data = await res.json();
    console.log(data);
    setDelayedItems(data);
  };
  // getItems();
  return (
    <div>
      <Heading m={10}>{t.addItem}</Heading>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        p={15}
        m={5}
        borderRadius={7}
      >
        {/* <Text fontSize="lg" color={textColor} fontWeight="bold">
          Meeting items
        </Text> */}
        {/*  */}
        <form onSubmit={addItem} encType="multipart/form-data">
          <Input placeholder={t.title} name={"title"} mb={4}></Input>
          <Textarea
            mb={4}
            resize={"none"}
            name={"desc"}
            placeholder={t.desc}
          ></Textarea>
          <Flex
            mt={1}
            justify="center"
            px={6}
            pt={5}
            pb={6}
            borderWidth={2}
            borderColor={useColorModeValue("gray.300", "gray.500")}
            borderStyle="dashed"
            rounded="md"
          >
            <Stack spacing={1} textAlign="center">
              <Icon
                mx="auto"
                boxSize={12}
                color={useColorModeValue("gray.400", "gray.500")}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Icon>
              <Flex
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
                alignItems="baseline"
              >
                <chakra.label
                  htmlFor="file-upload"
                  cursor="pointer"
                  rounded="md"
                  fontSize="md"
                  color={useColorModeValue("brand.600", "brand.200")}
                  pos="relative"
                  _hover={{
                    color: useColorModeValue("brand.400", "brand.300"),
                  }}
                >
                  <span>{t.uploadFile}</span>
                  <VisuallyHidden>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      onChange={addAttach}
                      multiple
                    />
                  </VisuallyHidden>
                </chakra.label>
                <Text pl={1}>{t.dragDrop}</Text>
              </Flex>
              <Text
                fontSize="xs"
                color={useColorModeValue("gray.500", "gray.50")}
              >
                PNG, JPG, GIF up to 10MB
              </Text>
            </Stack>
          </Flex>
          {/*  */}
          <Button mt={4} type="submit">
            {t.addItem}
          </Button>
        </form>
        <Button ml={4} mt={4} onClick={onOpen}>
          {t.delayedItem}
        </Button>
      </Box>
      <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent dir={ditLang}>
            <form>
              <ModalHeader>{t.delayedItem}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {/* <Input
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
                ></Textarea> */}
                {/* <Select
                  mt={4}
                  onChange={(e) => {
                    setChoose(e.target.value);
                    console.log(e.target.value);
                  }}
                > */}
                {/* <option value={''}>{t.voteType}</option> */}
                {/* <option value={0}>{t.private}</option>
                  <option value={1}>{t.public}</option> */}
                {/* </Select> */}
                {/* <Text mt={4}>{t.delayedItem}</Text> */}
                {/* <CheckboxGroup  name='hi'> */}
                {delayedItems
                  ? delayedItems.map((item, index) => {
                      return (
                        <Stack key={index} p={4}>
                          <Checkbox
                            onChange={(e) => {
                              selectItem(e);
                            }}
                            value={item._id}
                          >
                            {item.title}
                          </Checkbox>
                        </Stack>
                      );
                    })
                  : "لا يوجد بنود مؤجله"}
                {/* </CheckboxGroup> */}
                {/* <Button mt={4}>Invite</Button> */}
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  type={"submit"}
                  onClose={onClose}
                  onClick={addItem}
                >
                  {t.addItem}
                </Button>
                {/* <Button variant='ghost'>Secondary Action</Button> */}
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </Box>
      {/* ################################################################################ */}
      <Heading m="10">{t.meetingItems}</Heading>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        p={15}
        m={5}
        borderRadius={7}
      >
        <Card>
          <CardHeader p="0px 0px 0px 0px">
            <Flex justify="space-between" align="center" mb="1rem" w="90%">
              {/* <Text fontSize="lg" color={textColor} fontWeight="bold">
                Meeting items
              </Text> */}
              {/* <Button
                colorScheme="teal"
                borderColor="teal.300"
                color="teal.300"
                variant="outline"
                fontSize="xs"
                p="8px 32px"
              >
                VIEW ALL
              </Button> */}
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction="column" w="90%">
              {items &&
                items.map((row, index) => {
                  return (
                    <InvoicesRow
                      key={row._id}
                      date={row.title}
                      code={row.downArrow}
                      downArrow={row.downArrow}
                      upArrow={row.upArrow}
                      up={row.up}
                      down={row.down}
                      price={row.price}
                      logo={FaFilePdf}
                      format={"PDF"}
                      meetingId={props.id}
                      itemId={row._id}
                    />
                  );
                })}
            </Flex>
          </CardBody>
        </Card>
      </Box>
      {/* <MeetingItems id={props.id} /> */}
    </div>
  );
}

export default AddItems;
