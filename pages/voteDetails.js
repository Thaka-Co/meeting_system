// @flow
import * as React from "react";
import { VoteDetails } from "../components/VoteDetails";
import { invoicesData } from "../Faker/general";
import { getCsrfToken, getSession } from "next-auth/react";
import NavBar from "../../components/navBar/navbar";
function voteDetails(props) {
  return (
    <div>
      <NavBar>
        <VoteDetails votes={invoicesData[0].votes[0]} />
      </NavBar>
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
