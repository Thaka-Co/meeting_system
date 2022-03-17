// @flow
import * as React from "react";
import { MeetingRecored } from "../components/MeetingRecored";
import MainNavBar from "../components/navBar/navbar";
import { getCsrfToken, getSession } from "next-auth/react";
import Footer from "../components/navBar/footer";
function meetingRecord(props) {
  return (
    <div>
      {/* <AddComments /> */}
      {/* {session ? ( */}
      <MainNavBar>
        <MeetingRecored />
        <Footer />
      </MainNavBar>
      {/* ) : (
        ""
      )} */}
    </div>
  );
}
export default meetingRecord;
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
