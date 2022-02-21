// @flow called in meeting details
import * as React from "react";
import CardBody from "./Card/CardBody.js";
import {
  Table,
  Tbody,
  Th,
  Thead,
  Tr,Box,
  useColorModeValue,
} from "@chakra-ui/react";
import TablesTableRow from "./Tables/TablesTableRow";
import { tablesTableData } from "../Faker/general";
export const Attendance = (props) => {
  const { attend } = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <div> <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
      {/* <Box bg={useColorModeValue("gray.50", "inherit")}> */}
        <CardBody>
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" pl="0px" >
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
                  attend={attend}
                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody></Box>
      
    </div>
  );
};
