// @flow
import * as React from "react";
import CurrentMeeting from "../../components/CurrentMeeting";
import { getCsrfToken, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import NavBar from "../../components/navBar/navbar";
import { server } from "../../config";
function currentMeeting({ meeting }) {
  // const router = useRouter();
  // const { id } = router.query;
  console.log(meeting);
  return (
    <div>
      <NavBar>
        <CurrentMeeting id={meeting._id} />{" "}
      </NavBar>
    </div>
  );
}
export default currentMeeting;
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
export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/meetings/${context.params.id}`);
  const meeting = await res.json();
  return {
    props: { meeting },
  };
};
