import { Heading } from "@chakra-ui/react";
import MainNavBar from "../components/navBar/navbar";
import Status from "../components/stats/status";
import MyMeeting from "../components/Tables/MyMeeting";
import TodayMeetings from "../components/Tables/TodayMeetings";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
import { useSession } from "next-auth/react";
// import { redirect } from "next/dist/server/api-utils";
export default function dashbord() {
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      {session?
      <MainNavBar>
        <Status />
        <Heading m="10">{t.ToDayMeetings}</Heading>
        {/* today meetings */}
        <TodayMeetings />
        <Heading m="10">{t.MyMeetings}</Heading>
        {/* My Meetings Table */}
        <MyMeeting />
      </MainNavBar>
      :<></>
}
    </>
  );
}
