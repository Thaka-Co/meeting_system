<<<<<<< HEAD
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import theme from "../config/theme";
import { useRouter } from "next/router";
// import "react-calendar/dist/Calendar.css";
function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const direction = locale === "ar" ? "rtl" : "ltr";
=======
// pages/_app.js
>>>>>>> ace16c8536f1fc94e3d99f66e22f1388d1ac9ec9

import { ChakraProvider } from '@chakra-ui/react'
import { RtlProvider } from './rtl-provider'

function App(props) {
  const { Component, pageProps } = props
  return (
    <ChakraProvider>
      <RtlProvider>
        <Component {...pageProps} />
      </RtlProvider>
    </ChakraProvider>
  )
}

export default App