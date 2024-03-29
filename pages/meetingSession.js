import {
  Center,
  Flex,
  Heading,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Text,
} from "@chakra-ui/react";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader";
import CardBody from "../components/Card/CardBody";
import TablesProjectRow from "../components/Tables/TablesProjectRow";
import { tablesProjectData } from "../Faker/general";
import CountDown from "../components/Timer/timer";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { getCsrfToken, getSession } from "next-auth/react";
export default function MeetingSession() {
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  const [active, setActive] = useState(true);
  const { data: session } = useSession();
  const startMeeting = async () => {
    await active;
    setActive(false);
  };
  return (
    <>
      {!active ? (
        session ? (
          <Flex d="row">
            <Center>
              <Heading>
                Meeting Soon
                <CountDown seconds={10} />
              </Heading>
            </Center>
          </Flex>
        ) : (
          ""
        )
      ) : (
        <Card my="22px" overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Flex direction="column">
              <Text fontSize="lg" fontWeight="bold" pb=".5rem">
                {t.Tasks}
              </Text>
            </Flex>
          </CardHeader>
          <CardBody>
            <Table variant="simple">
              <Thead>
                <Tr my=".8rem" pl="0px">
                  <Th pl="0px" color="gray.400">
                    {t.topic}
                  </Th>
                  <Th color="gray.400">{t.budget}</Th>
                  <Th color="gray.400">{t.status}</Th>
                  <Th color="gray.400">{t.completion}</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {tablesProjectData.map((row, index) => {
                  return (
                    <TablesProjectRow
                      key={index}
                      name={row.name}
                      logo={row.logo}
                      status={row.status}
                      budget={row.budget}
                      progression={row.progression}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </CardBody>
        </Card>
      )}
    </>
  );
}
export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });
  console.log(session);
  if (!session && res) {
    console.log("working");
    res.writeHead(302, {
      Location: "/signin",
    });
    res.end();
  }
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
