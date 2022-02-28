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
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { dashboardTableData } from "../../Faker/general";
import DashboardTableRow from "../Tables/DashboardTableRow";
function MyMeeting(props) {
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <div>
      {dashboardTableData.length != 0 ? (
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" ps="0px">
              <Th ps="0px" color="gray.400">
                {t.topic}
              </Th>
              <Th color="gray.400">{t.members}</Th>
              <Th color="gray.400">{t.timeFrame}</Th>
              <Th color="gray.400">{t.dueDate}</Th>
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
