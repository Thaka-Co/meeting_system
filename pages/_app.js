// pages/_app.js
import { SessionProvider } from "next-auth/react";
import { ChakraProvider, Box, useColorModeValue } from "@chakra-ui/react";
import RtlProvider from "../lib/providers/rtl-provider";
import "react-calendar/dist/Calendar.css";
import Layout from "../components/navBar/layout";
// import "../styles/calendar.css";
function App(props) {
  const { Component, pageProps } = props;
  return (
    <SessionProvider>
      <ChakraProvider>
        <RtlProvider>
          <Layout>
            {/* <Box bgColor={useColorModeValue("gray.50", "gray.900")}> */}
            <Component {...pageProps} />
            {/* </Box> */}
          </Layout>
        </RtlProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default App;
