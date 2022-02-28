// pages/_app.js

import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "./rtl-provider";

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
