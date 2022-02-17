import React from "react";
import { Box, HStack, Heading } from "@chakra-ui/react";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import {
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import TablesTableRow from "../components/Tables/TablesTableRow";
import { tablesTableData } from "../Faker/general";
import { invoicesData } from "../Faker/general";
import ItemDetails from "../components/ItemDetails";
function MeetingDetails(props) {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Box bg={useColorModeValue("gray.50", "inherit")}>
      <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
        <Text fontSize="xl" color={textColor} fontWeight="bold">
          Meeting title
        </Text>
        <HStack>
          <Text fontFamily={"cursive"} fontSize={"1rem"}>
            location
          </Text>
          <Text p={3}>first floor</Text>
        </HStack>
        <HStack>
          <Text fontFamily={"cursive"} fontSize={"1rem"}>
            Time
          </Text>
          <Text p={3}>21 DEC 11:21 PM</Text>
        </HStack>
      </Box>
      <Heading m="10">Meeting Items</Heading>
      {invoicesData.map((row) => {
        return (
          <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
            <ItemDetails
              date={row.date}
              votes={row.votes}
              downArrow={row.downArrow}
              upArrow={row.upArrow}
              up={row.up}
              down={row.down}
              price={row.price}
              logo={row.logo}
              format={row.format}
            />
          </Box>
        );
      })}
      <Heading m="10">Attendance</Heading>
      <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            {/* <Text fontSize="xl" color={textColor} fontWeight="bold">
              
            </Text> */}
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th pl="0px" color="gray.400">
                    Memeber
                  </Th>
                  <Th color="gray.400">Function</Th>
                  <Th color="gray.400">Status</Th>
                  <Th color="gray.400">Employed</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {tablesTableData.map((row) => {
                  return (
                    <TablesTableRow
                      name={row.name}
                      logo={row.logo}
                      email={row.email}
                      subdomain={row.subdomain}
                      domain={row.domain}
                      status={row.status}
                      date={row.date}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </CardBody>
        </Card>
      </Box>
      {/* <MeetingItems /> */}
      {/* <AddItems /> */}
    </Box>
  );
}

export default MeetingDetails;
