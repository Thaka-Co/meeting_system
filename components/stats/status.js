import {
  Box,
  SimpleGrid,
  Button,
  useDisclosure,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { Stat } from "./stat";
import { StatLabel } from "./statLabel";
import { StatNumber } from "./statNumber";
import {
  FaCalendarAlt,
  FaRegCalendarCheck,
  FaClipboardList,
  FaClipboardCheck,
} from "react-icons/fa";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function Status() {
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const open = () => {
    show ? setShow(false) : setShow(true);
    const btn = document.querySelector(".btn");
    // if(show){
    //   btn.style.visibility = 'hidden';
    // }
    console.log(show);
  };
  console.log(show);
  return (
    <>
    {/* <Box bg={mode("gray.50", "inherit")}> */}
      <Box as="section" p="">
        <Box
          maxW="9xl"
          mx="auto"
          px={{
            base: "6",
            md: "8",
          }}
        >
          <Button onClick={open} className={"btn"} height={4} m={2}>
            ...
          </Button>
          {show == true ? (
            <SimpleGrid
              columns={{
                base: 2,
                md: 4,
              }}
              spacing="6"
            >
              <Stat key="Meetings" bg={mode("white", "gray.800")}>
                <StatLabel>{t.Meetings}</StatLabel>
                <FaCalendarAlt />
                <StatNumber>10</StatNumber>
              </Stat>

              <Stat key="CompletedMeetings" bg={mode("white", "gray.800")}>
                <StatLabel>{t.CompletedMeetings}</StatLabel>
                <FaRegCalendarCheck />
                <StatNumber>10</StatNumber>
              </Stat>

              <Stat key="Tasks" bg={mode("white", "gray.800")}>
                <StatLabel>{t.Tasks}</StatLabel>
                <FaClipboardList />
                <StatNumber>10</StatNumber>
              </Stat>

              <Stat key="Complated Ta" bg={mode("white", "gray.800")}>
                <StatLabel>{t.complatedTasks}</StatLabel>
                <FaClipboardCheck />
                <StatNumber>10</StatNumber>
              </Stat>
            </SimpleGrid>
          ) : (
            ""
          )}
        </Box>
      </Box>
      {/* </Box> */}
    </>
  );
}
