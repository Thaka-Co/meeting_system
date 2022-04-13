import { Heading } from "@chakra-ui/react";
import Status from "../components/stats/status";
import MyMeeting from "../components/Tables/MyMeeting";
import TodayMeetings from "../components/Tables/TodayMeetings";
import { useRouter } from "next/router";
import { getCsrfToken, getSession } from "next-auth/react";
import en from "../locales/en";
import ar from "../locales/ar";

export default function Dashboard() {
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;

  return (
    <>
      <Status />
      <Heading m="10">{t.ToDayMeetings}</Heading>
      <TodayMeetings />
      <Heading m="10">{t.MyMeetings}</Heading>
      <MyMeeting />
    </>
  );
}
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
