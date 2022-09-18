import React from "react";
import MeetingDetails from "../components/MeetingDetails";
import MainNavBar from "../components/navBar/navbar";
import { getCsrfToken, getSession } from "next-auth/react";
function meetingDetails(props) {
  return (
    <div>
      {session ? (
        <MainNavBar>
          <MeetingDetails />
        </MainNavBar>
      ) : (
        <></>
      )}
    </div>
  );
}

export default meetingDetails;
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
