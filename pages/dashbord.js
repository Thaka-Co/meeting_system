import { Heading } from "@chakra-ui/react";
import MainNavBar from "../components/navBar/navbar";
import Status from "../components/stats/status";
import MyMeeting from "../components/Tables/MyMeeting";
import TodayMeetings from "../components/Tables/TodayMeetings";
export default function dashbord() {
  return (
    <MainNavBar>
      <Status />
      <Heading m="10">ToDay Meetings</Heading>
      {/* today meetings */}
      <TodayMeetings />
      <Heading m="10">My Meetings</Heading>
      {/* My Meetings Table */}
      <MyMeeting />
    </MainNavBar>
  );
}
