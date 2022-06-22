// @flow
import * as React from "react";
import { MeetingRecored } from "../components/MeetingRecored";
import { getCsrfToken, getSession } from "next-auth/react";
import  NavBar  from "../../components/navBar/navbar";
function meetingRecord(props) {
  return (
    <div>
      <NavBar>
      <MeetingRecored />
      </NavBar>
    </div>
  );
}
export default meetingRecord;
// export async function getServerSideProps(context) {
//   const { req, res } = context;
//   const session = await getSession({ req });
//   console.log(session);
//   if (!session && res) {
//     console.log("working");
//     res.writeHead(302, {
//       Location: "/signin",
//     });
//     res.end();
//   }
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context),
//     },
//   };
// }
