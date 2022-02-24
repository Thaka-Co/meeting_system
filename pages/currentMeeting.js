// @flow
import * as React from "react";
import CurrentMeeting from "../components/CurrentMeeting";
import { MeetingRecored } from "../components/MeetingRecored";
import MainNavBar from "../components/navBar/navbar";
function currentMeeting(props) {
  return (
    <div>
      <MainNavBar>
        <CurrentMeeting />
        {/* <MeetingRecored /> */}
      </MainNavBar>
    </div>
  );
}
export default currentMeeting;
