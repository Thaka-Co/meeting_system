import {
  Box,
  SimpleGrid,
  Button,
  useDisclosure,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { Stat } from "./Stat";
import { StatLabel } from "./StatLabel";
import { StatNumber } from "./StatNumber";
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
      <Box as="section"  p="">
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
              <Stat key="Meetings" bg={mode("gray.50", "gray.800")}>
                <StatLabel>{t.Meetings}</StatLabel>
                <FaCalendarAlt />
                <StatNumber>10</StatNumber>
              </Stat>

              <Stat key="CompletedMeetings" bg={mode("gray.50", "gray.800")}>
                <StatLabel>{t.CompletedMeetings}</StatLabel>
                <FaRegCalendarCheck />
                <StatNumber>10</StatNumber>
              </Stat>

              <Stat key="Tasks" bg={mode("gray.50", "gray.800")}>
                <StatLabel>{t.Tasks}</StatLabel>
                <FaClipboardList />
                <StatNumber>10</StatNumber>
              </Stat>

              <Stat key="Complated Ta" bg={mode("gray.50", "gray.800")}>
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
    </>
  );
}
