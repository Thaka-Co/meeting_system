// @flow
import * as React from "react";
import CurrentMeeting from "../../components/CurrentMeeting";
import { getCsrfToken, getSession } from "next-auth/react";
import { useRouter } from "next/router";
function currentMeeting(props) {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <div>
      <CurrentMeeting id={id} />
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
