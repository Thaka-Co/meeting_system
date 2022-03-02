// pages/_app.js

import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "./rtl-provider";
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css'
function App(props) {
  const { Component, pageProps } = props;
  return (
    <ChakraProvider>
      <RtlProvider>
        <Component {...pageProps} />
      </RtlProvider>
    </ChakraProvider>
  );
}

export default App;
