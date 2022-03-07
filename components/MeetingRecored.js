// @flow
import * as React from "react";
import {
  Box,
  Button,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { GrDownload, GrDocumentPdf } from "react-icons/gr";
import { AiFillPrinter } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import { BsFillFileEarmarkWordFill } from "react-icons/bs";
import { invoicesData } from "../Faker/general";
import InvoicesRow from "../components/Tables/InvoicesRow";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
export const MeetingRecored = (props) => {
  const [i, setI] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  let ditLang = locale == "en" ? "ltr" : "rtl";
  const showChooses = () => {
    setI(true);
  };
  return (
    <div>
      <Box bg={useColorModeValue("gray.50", "inherit")}>
        <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
          {/* <MeetingItems /> */}
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
                record={true}
              />
            );
          })}
          {i ? (
            <>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  {/* <ModalHeader>Vote info</ModalHeader> */}
                  <ModalCloseButton />
                  <ModalBody>
                    <Box mt={70} mr={50}>
                      <Icon as={GrDocumentPdf} w={50} h={"auto"} ml={100} />
                      <Icon
                        as={BsFillFileEarmarkWordFill}
                        w={50}
                        h={"auto"}
                        ml={100}
                      />
                    </Box>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={140} onClick={onClose}>
                      {t.downlodas}
                    </Button>
                    {/* <Button variant='ghost'>Secondary Action</Button> */}
                  </ModalFooter>
                </ModalContent>
              </Modal>
              {/* <Icon as={GrDocumentPdf} w={"30px"} h={"auto"} />
              <Icon as={BsFillFileEarmarkWordFill} w={"30px"} h={"auto"} /> */}
            </>
          ) : (
            ""
          )}
          <Box mt={50} display="flex" justifyContent={"right"}>
            <Button mt={5} me={4} bg="#add8e6" onClick={onOpen} _hover={"none"}>
              <Icon
                as={GrDownload}
                w={"30px"}
                h={"auto"}
                onClick={showChooses}
              />
            </Button>
            <Button mt={5} bg="#add8e6" _hover={"none"}>
              <Icon as={AiFillPrinter} w={"30px"} h={"auto"} />
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
