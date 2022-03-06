// @flow
import * as React from "react";
import { MeetingRecored } from "../components/MeetingRecored";
import MainNavBar from "../components/navBar/navbar";
import { useSession } from "next-auth/react";
import { getCsrfToken, getSession } from "next-auth/react";
function meetingRecord(props) {
  const { data: session } = useSession();
  return (
    <div>
      {/* <AddComments /> */}
      {/* {session ? ( */}
      <MainNavBar>
        <MeetingRecored />
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
