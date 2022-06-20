import { Heading } from "@chakra-ui/react";
import Status from "../components/stats/status";
import MyMeeting from "../components/Tables/MyMeeting";
import TodayMeetings from "../components/Tables/TodayMeetings";
import { useRouter } from "next/router";
import { getCsrfToken, getSession } from "next-auth/react";
import en from "../locales/en";
import ar from "../locales/ar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { signIn } from "../reducers/login";
import { useDispatch } from "react-redux";
function Dashboard() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  const session = getSession();
  // useEffect(async()=>{
  // },[])

  const [id, setId] = useState();
  console.log(session, "WOOW");

  useEffect(() => {
    setUserId();
  }, []);
  const setUserId = async () => {
    const session = await getSession();
    const userId = session.id;
    const data = {
      id: session.id,
      token: session.token,
    };
    dispatch(signIn(data));
    setId(userId);
  };
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
  // console.log(session);
  console.log(context, "context.id");
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
export default Dashboard;
