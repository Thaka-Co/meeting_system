import React, { useEffect } from "react";
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
  Link,
  Heading,
  Center,
  Tbody,
} from "@chakra-ui/react";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { AiFillEdit } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
export default function TodayMeetings() {
  const [meetings, setMeetings] = React.useState(false);
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  const data = [
    { name: "Purity UI Version", created: "10 AM" },
    { name: "Fix Platform Errors", created: "8 PM" },
    { name: "Launch our Mobile App", created: "12 PM" },
    { name: "Add the New Pricing Page", created: "5 PM" },
    { name: "Redesign New Online Shop", created: "3 PM" },
  ];
  const { data: session } = useSession();
  useEffect(() => {
    getUserData();
  }, []);
  console.log(session);
  const getUserData = async () => {
    const id = await session.id; // user id
    console.log(id);
    const data = await fetch(`http://localhost:3000/api/user/${id}`);
    const result = await data.json();
    setMeetings(result.meetings);
    console.log(result.meetings);
  };
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.400", "gray.400");
  const tdColor = useColorModeValue("gray.500");
  const header = [t.topic, t.time, t.actions];
  return data.length != 0 ? (
    <Table
      w="full"
      bg={bg}
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
        {meetings &&
          meetings.map((token, tid) => {
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
                {/* {Object.keys(token).map((x) => {
                return ( */}
                <React.Fragment key={`${tid}`}>
                  {/* <Td
                      display={{
                        base: "table-cell",
                        md: "none",
                      }}
                      sx={{
                        "@media print": {
                          display: "none",
                        },
                        textTransform: "uppercase",
                        color: color,
                        fontSize: "xs",
                        fontWeight: "bold",
                        letterSpacing: "wider",
                        fontFamily: "heading",
                      }}
                    >
                      {x}
                    </Td> */}
                  <Td color={tdColor} fontSize="md" fontWeight="hairline">
                    {token["title"]}
                    {/* {token[x]} */}
                  </Td>
                  <Td color={tdColor} fontSize="md" fontWeight="hairline">
                    {token["timeFram"][0]}:
                    {token["timeFram"][1] ? token["timeFram"][1] : 0}
                  </Td>
                </React.Fragment>
                {/* );
              })}  */}
                {/* {token._id} */}
                <Td>
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                    <Link href={`/currentMeeting/${token._id}`}>
                      <IconButton
                        colorScheme="blue"
                        icon={<BsBoxArrowUpRight />}
                      />
                    </Link>
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
