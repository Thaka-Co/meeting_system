// @flow called in meeting details
import * as React from "react";
import CardBody from "./Card/CardBody.js";
import {
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import TablesTableRow from "./Tables/TablesTableRow";
import { tablesTableData } from "../Faker/general";
import { useRouter } from "next/router";
import { server } from "../config/index.js";
import en from "../locales/en";
import ar from "../locales/ar";
export const Attendance = (props) => {
  const { attend } = props;
  const [users, setUsers] = React.useState();
  const textColor = useColorModeValue("gray.700", "white");
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  React.useEffect(() => {
    getUserData();
  }, []);
  console.log(props);
  const getUserData = async () => {
    const id = props.id;
    console.log(id);
    const data = await fetch(`${server}/api/meetings/${id}`);
    console.log(data);
    const result = await data.json();
    if (result === "there is something wrong !!") return setUsers([]);
    setUsers(result.memebers);
    console.log(result);
  };
  return (
    <div>
      {" "}
      <Box
        bg={useColorModeValue("white", "gray.800")}
        p={15}
        m={5}
        borderRadius={7}
      >
        {/* <Box bg={useColorModeValue("gray.50", "inherit")}> */}
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px">
                <Th pl="0px" color="gray.400">
                  {t.members}
                </Th>
                <Th color="gray.400">{t.function}</Th>
                <Th color="gray.400">{t.status}</Th>
                <Th color="gray.400">{t.employed}</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {users &&
                users.map((row, index) => {
                  return (
                    <TablesTableRow
                      key={index}
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
        </CardBody>
      </Box>
    </div>
  );
};
