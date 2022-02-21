import React, { useEffect } from "react";
import Swal from "sweetalert2";
import {
  Text,
  Radio,
  RadioGroup,
  HStack,
  Box,
  CheckboxGroup,
  Lorem,
  Checkbox,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react'
function AddVote(props) {
  const users = [
    { id: 1, name: "Mareem", position: "IT manager", email: "m@m.com" },
    { id: 2, name: "Safiah", position: "IT manager", email: "s@s.com" },
    { id: 3, name: "Najla", position: "IT manager", email: "s@s.com" },
  ];
  const selectUser = (e) => {
    console.log(e);
  };
//   useEffect(() => {
//     console.log("hi");
//     addVote();
//   }, []);
  const addVote = () => {
    Swal.fire({
      title: "vote info",
      text: "Modal with a custom image.",
      imageAlt: "Custom image",
      html: `<div>
      <select>
        <option value="">vote type</option>
        <option value={0}>private</option>
        <option value={1}>puplic</option>
      </select>
      <p>how can vote ?</p>
      <CheckboxGroup onChange={selectUser}>`+
        users.map((item, index) => {
          return (
            <Stack key={index} p={4}>
              <Checkbox value={item.id}>{item.name}</Checkbox>
            </Stack>
          );
        })+
     ` </CheckboxGroup>
      <Button mt={4}>Invite</Button>
      <Button>Add vote</Button>
    </div>`,
    });
  };
  return ( <>
    <Button onClick={onOpen}>Open Modal</Button>
  </>);
}

export default AddVote;
