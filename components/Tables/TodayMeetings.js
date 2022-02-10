import React from "react";
import {
  useColorModeValue,
  ButtonGroup,
  IconButton,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Box,
  Heading,
  Center,
  Tbody,
} from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";

export default function TodayMeetings() {
  const data = [
    { name: "Daggy", created: "7 days ago" },
    { name: "Anubra", created: "23 hours ago" },
    { name: "Josef", created: "A few seconds ago" },
    { name: "Sage", created: "A few hours ago" },
    { name: "Sage", created: "A few hours ago" },
  ];
  const header = ["Topic", "created", "actions"];
  return data.length != 0 ? (
    <Table
      w="full"
      bg={useColorModeValue("white", "gray.800")}
      display={{
        base: "block",
        md: "table",
      }}
      sx={{
        "@media print": {
          display: "table",
        },
      }}
    >
      <Thead
        display={{
          base: "none",
          md: "table-header-group",
        }}
        sx={{
          "@media print": {
            display: "table-header-group",
          },
        }}
      >
        <Tr>
          {header.map((x) => (
            <Th key={x}>{x}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody
        display={{
          base: "block",
          lg: "table-row-group",
        }}
        sx={{
          "@media print": {
            display: "table-row-group",
          },
        }}
      >
        {data.map((token, tid) => {
          return (
            <Tr
              key={tid}
              display={{
                base: "grid",
                md: "table-row",
              }}
              sx={{
                "@media print": {
                  display: "table-row",
                },
                gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                gridGap: "10px",
              }}
            >
              {Object.keys(token).map((x) => {
                return (
                  <React.Fragment key={`${tid}${x}`}>
                    <Td
                      display={{
                        base: "table-cell",
                        md: "none",
                      }}
                      sx={{
                        "@media print": {
                          display: "none",
                        },
                        textTransform: "uppercase",
                        color: useColorModeValue("gray.400", "gray.400"),
                        fontSize: "xs",
                        fontWeight: "bold",
                        letterSpacing: "wider",
                        fontFamily: "heading",
                      }}
                    >
                      {x}
                    </Td>
                    <Td
                      color={useColorModeValue("gray.500")}
                      fontSize="md"
                      fontWeight="hairline"
                    >
                      {token[x]}
                    </Td>
                  </React.Fragment>
                );
              })}
              <Td
                display={{
                  base: "table-cell",
                  md: "none",
                }}
                sx={{
                  "@media print": {
                    display: "none",
                  },
                  textTransform: "uppercase",
                  color: useColorModeValue("gray.400", "gray.400"),
                  fontSize: "xs",
                  fontWeight: "bold",
                  letterSpacing: "wider",
                  fontFamily: "heading",
                }}
              >
                Actions
              </Td>
              <Td>
                <ButtonGroup variant="solid" size="sm" spacing={3}>
                  <IconButton colorScheme="blue" icon={<BsBoxArrowUpRight />} />
                  <IconButton colorScheme="green" icon={<AiFillEdit />} />
                  <IconButton
                    colorScheme="red"
                    variant="outline"
                    icon={<BsFillTrashFill />}
                  />
                </ButtonGroup>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  ) : (
    <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" m="10">
      <Center>
        {" "}
        <Heading m="10">You Have No Meetings Today</Heading>
      </Center>
    </Box>
  );
}
