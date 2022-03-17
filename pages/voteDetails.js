// @flow
import * as React from "react";
import { VoteDetails } from "../components/VoteDetails";
import { invoicesData } from "../Faker/general";
import MainNavBar from "../components/navBar/navbar";
import { getCsrfToken, getSession } from "next-auth/react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Footer from "../components/navBar/footer";
function voteDetails(props) {
  return (
    <div>
      <MainNavBar>
        <VoteDetails votes={invoicesData[0].votes[0]} />
        <Footer />
      </MainNavBar>
    </div>
  );
}
export default voteDetails;
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
