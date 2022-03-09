import React from "react";
import AddMeeting from "../components/AddMeeting";
import MainNavBar from "../components/navBar/navbar";
import { getCsrfToken, getSession } from "next-auth/react";
function meeting(props) {
  return (
    <div>
      {/* {session ? ( */}
      <MainNavBar>
        <AddMeeting />
      </MainNavBar>
      {/* ) : (
       ''
      )}  */}
    </div>
  );
}
export default meeting;
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
