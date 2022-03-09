// @flow
import * as React from "react";
import { Setting } from "../components/Setting";
import MainNavBar from "../components/navBar/navbar";
import { getCsrfToken, getSession } from "next-auth/react";
import { Box,useColorModeValue } from "@chakra-ui/react";
export default function setting(props) {
  const bg=useColorModeValue("gray.50", "inherit")
  return (
    <div>
      {/* {session ? ( */}
      <Box bg={bg}>
      <MainNavBar>
        <Setting />
      </MainNavBar>
      {/* ) : (
        ""
      )} */}
      </Box>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });
  console.log(session);
  if (!session && res) {
    console.log("working");
    res.writeHead(302, {
      Location: "/signin",
    });
    res.end();
  }
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
