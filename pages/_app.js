// pages/_app.js
import { SessionProvider } from "next-auth/react";
import { ChakraProvider,Box,useColorModeValue } from "@chakra-ui/react";
import RtlProvider from "../lib/providers/rtl-provider";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";
function App(props) {
  const { Component, pageProps } = props;
  return (
    <SessionProvider>
      <ChakraProvider >
        <RtlProvider>
        <Box bg={useColorModeValue("gray.50", "gray.900")}>
          <Component {...pageProps} />
        </Box>
        </RtlProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default App;
