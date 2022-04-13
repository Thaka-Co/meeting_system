import React from "react";
import MeetingDetails from "../../components/MeetingDetails";
import { getCsrfToken, getSession } from "next-auth/react";
import { useRouter } from "next/router";
function meetingDetailss(props) {
  const router = useRouter();
  const { meetingId } = router.query;
  console.log(router);
  return (
    <div>
      <MeetingDetails meetingId={meetingId} />
    </div>
  );
}

export default meetingDetailss;
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
