// pages/_app.js
import { SessionProvider } from "next-auth/react"; // version 4 /react version 3 /client
import { ChakraProvider, Box, useColorModeValue } from "@chakra-ui/react";
import RtlProvider from "../lib/providers/rtl-provider";
import "react-calendar/dist/Calendar.css";
import Layout from "../components/navBar/layout";
import { Provider } from "react-redux";
import store from "../reducers";
// import "../styles/calendar.css";
function App(props) {
  const { Component, pageProps } = props;
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider>
        <RtlProvider>
          <Provider store={store}>
            <Layout>
              {/* <Box bgColor={useColorModeValue("gray.50", "gray.900")}> */}
              <Component {...pageProps} />
              {/* </Box> */}
            </Layout>
          </Provider>
        </RtlProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default App;
