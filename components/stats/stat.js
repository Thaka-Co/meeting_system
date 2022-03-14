import { Stat as ChakraStat, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

export const Stat = (props) => (
  <ChakraStat
    px={{
      base: "0",
      md: "48",
      lg: "62",
    }}
    py="5"
    bg={useColorModeValue("white", "gray.700")}
    shadow="base"
    rounded="lg"
    {...props}
  />
);
