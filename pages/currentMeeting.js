// @flow
import * as React from "react";
import CurrentMeeting from "../components/CurrentMeeting";
import MainNavBar from "../components/navBar/navbar";
import { getCsrfToken, getSession } from "next-auth/react";
import Footer from "../components/navBar/footer";
function currentMeeting(props) {
  return (
    <div>
      <MainNavBar>
        <CurrentMeeting />
        <Footer />
      </MainNavBar>
    </div>
  );
}
export default currentMeeting;
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
