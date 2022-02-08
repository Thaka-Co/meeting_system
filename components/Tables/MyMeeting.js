import React from "react";
import {
  Box,
  Center,
  Heading,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { dashboardTableData } from "../../Faker/general";
import DashboardTableRow from "../Tables/DashboardTableRow";
function MyMeeting(props) {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <div>
      {dashboardTableData.length != 0 ? (
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" ps="0px">
              <Th ps="0px" color="gray.400">
                Topics
              </Th>
              <Th color="gray.400">Members</Th>
              <Th color="gray.400">Time Frame</Th>
              <Th color="gray.400">Due Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dashboardTableData.map((row) => {
              return (
                <DashboardTableRow
                  name={row.name}
                  logo={row.logo}
                  members={row.members}
                  budget={row.budget}
                  progression={row.progression}
                />
              );
            })}
          </Tbody>
        </Table>
      ) : (
        <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" m="10">
          <Center>
            {" "}
            <Heading m="10">You Don't Have Any Meetings</Heading>
          </Center>
        </Box>
      )}
    </div>
  );
}

export default MyMeeting;
