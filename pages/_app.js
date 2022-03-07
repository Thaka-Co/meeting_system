// pages/_app.js
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "./rtl-provider";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";
function App(props) {
  const { Component, pageProps } = props;
  return (
    <SessionProvider>
      <ChakraProvider>
        {/* <RtlProvider> */}
        <Component {...pageProps} />
        {/* </RtlProvider> */}
      </ChakraProvider>
    </SessionProvider>
  );
}

export default App;
