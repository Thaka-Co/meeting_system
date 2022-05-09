import React from "react";
import MeetingDetails from "../../components/MeetingDetails";
import {server} from '../../config';
import { getCsrfToken, getSession } from "next-auth/react";
import { useRouter } from "next/router";
function meetingDetailss({ meeting }) {
  // const router = useRouter();
  // const { meetingId } = router.query;
  console.log(meeting);
  return (
    <div>
      <MeetingDetails meetingId={meeting._id} />
    </div>
  );
}

export default meetingDetailss;
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
  const res = await fetch(
    `${server}/api/meetings/${context.params.meetingId}`
  );
  const meeting = await res.json();
  return {
    props: { meeting },
  };
};
