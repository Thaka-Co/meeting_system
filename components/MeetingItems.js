import React, { useEffect, useState } from "react";
import { Flex, Box, Heading, useColorModeValue } from "@chakra-ui/react";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import { invoicesData } from "../Faker/general";
import InvoicesRow from "../components/Tables/InvoicesRow";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
} from "react-icons/fa";
function MeetingItems(props) {
  const [items, setItems] = useState();
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  console.log(props.id);
  useEffect(() => {
    getItems();
  }, []);
  const getItems = async () => {
    console.log(props.id, "items");
    const id = props.id;
    const result = await fetch(`http://localhost:3000/api/items/${id}`);
    console.log(result);
    const data = await result.json();
    setItems(data);
    console.log(data);
  };
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
              {items &&
                items.map((row, index) => {
                  return (
                    <InvoicesRow
                      key={row._id}
                      date={row.title}
                      code={row.downArrow}
                      downArrow={row.downArrow}
                      upArrow={row.upArrow}
                      up={row.up}
                      down={row.down}
                      price={row.price}
                      logo={FaFilePdf}
                      format={"PDF"}
                      meetingId={props.id}
                      itemId={row._id}
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
