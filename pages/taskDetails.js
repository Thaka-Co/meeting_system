import * as React from "react";
import TaskDetails from "./../components/TaskDetails";
import MainNavBar from "../components/navBar/navbar";
import { getCsrfToken, getSession } from "next-auth/react";
import { Box,useColorModeValue } from "@chakra-ui/react";
export const taskDetails = (props) => {
  return (
    <div>
      {/* {session ? ( */}
      <Box bg={useColorModeValue("gray.50", "inherit")}>
      <MainNavBar>
        <TaskDetails />
      </MainNavBar>
      {/* ) : (
        ""
      )} */}</Box>
    </div>
  );
};
export default taskDetails;
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
