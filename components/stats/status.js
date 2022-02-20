import { Box, SimpleGrid, useColorModeValue as mode } from "@chakra-ui/react";
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

export default function Status() {
  return (
    <Box as="section" bg={mode("gray.50", "gray.800")} p="">
      <Box
        maxW="9xl"
        mx="auto"
        px={{
          base: "6",
          md: "8",
        }}
      >
        <SimpleGrid
          columns={{
            base: 2,
            md: 4,
          }}
          spacing="6"
        >
          <Stat key="Meetings">
            <StatLabel>Meetings</StatLabel>
            <FaCalendarAlt />
            <StatNumber>10</StatNumber>
          </Stat>

          <Stat key="CompletedMeetings">
            <StatLabel>CompletedMeetings</StatLabel>
            <FaRegCalendarCheck />
            <StatNumber>10</StatNumber>
          </Stat>

          <Stat key="Tasks">
            <StatLabel>Tasks</StatLabel>
            <FaClipboardList />
            <StatNumber>10</StatNumber>
          </Stat>

          <Stat key="Complated Ta">
            <StatLabel>Complated Tasks</StatLabel>
            <FaClipboardCheck />
            <StatNumber>10</StatNumber>
          </Stat>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
