import React from "react";
import { Flex, Box, Heading, useColorModeValue } from "@chakra-ui/react";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import { invoicesData } from "../Faker/general";
import InvoicesRow from "../components/Tables/InvoicesRow";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
function MeetingItems(props) {
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  return (
    <div>
      <Heading m="10">{t.meetingItems}</Heading>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        p={15}
        m={5}
        borderRadius={7}
      >
        <Card>
          <CardHeader p="0px 0px 0px 0px">
            <Flex justify="space-between" align="center" mb="1rem" w="90%">
              {/* <Text fontSize="lg" color={textColor} fontWeight="bold">
                Meeting items
              </Text> */}
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
              {invoicesData.map((row, index) => {
                return (
                  <InvoicesRow
                    key={index}
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
    </div>
  );
}

export default MeetingItems;
