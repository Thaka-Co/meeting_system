import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import theme from "../config/theme";
import { useRouter } from "next/router";
// import "react-calendar/dist/Calendar.css";
function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const direction = locale === "ar" ? "rtl" : "ltr";

  // 👇🏻 Here's the place we add direction to the theme
  const theme = extendTheme({ direction });
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
