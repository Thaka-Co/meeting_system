import React from "react";
import { Box, HStack, Input, VStack } from "@chakra-ui/react";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "../components/Tables/TablesTableRow";
import { tablesTableData } from "../Faker/general";
import { invoicesData } from "../Faker/general";
import InvoicesRow from "../components/Tables/InvoicesRow";
function MeetingDetails(props) {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Box bg={useColorModeValue("gray.50", "inherit")} p={10}>
      <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
        <Box bgColor={"white"} p={15} m={10} borderRadius={7}>
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
        {/* <Input p={5} width={300} type={"datetime-local"} disabled></Input> */}
        <Box bgColor={"white"} p={15} m={10} borderRadius={7}>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Attendance
              </Text>
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
        <Box bgColor={"white"} p={15} m={10} borderRadius={7}>
          <Card>
            <CardHeader p="0px 0px 0px 0px">
              <Flex justify="space-between" align="center" mb="1rem" w="90%">
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                  Meeting items
                </Text>
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
                {invoicesData.map((row) => {
                  return (
                    <InvoicesRow
                      date={row.date}
                      code={row.downArrow}
                      downArrow={row.downArrow}
                      upArrow={row.upArrow}
                      up={row.up}
                      down={row.down}
                      price={row.price}
                      logo={row.logo}
                      format={row.format}
                    />
                  );
                })}
              </Flex>
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </Box>
  );
}

export default MeetingDetails;
