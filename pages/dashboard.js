import { Heading } from "@chakra-ui/react";
import MainNavBar from "../components/navBar/navbar";
import Status from "../components/stats/status";
import MyMeeting from "../components/Tables/MyMeeting";
import TodayMeetings from "../components/Tables/TodayMeetings";
import { useRouter } from "next/router";
import { getCsrfToken, getSession } from "next-auth/react"
import en from "../locales/en";
import ar from "../locales/ar";


export default function dashboard() {
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;

  return (
    <>
      <MainNavBar>
        <Status />
        <Heading m="10">{t.ToDayMeetings}</Heading>
        {/* today meetings */}
        <TodayMeetings />
        <Heading m="10">{t.MyMeetings}</Heading>
        {/* My Meetings Table */}
        <MyMeeting />
      </MainNavBar>
    </>
  )
}
export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });
  console.log(session)
  if (!session && res) {
    console.log('working')
    res.writeHead(302, {
      Location: '/signin'
    });
    res.end();
  }
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}