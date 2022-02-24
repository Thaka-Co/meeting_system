// @flow
import * as React from "react";
import { MeetingRecored } from "../components/MeetingRecored";
import MainNavBar from "../components/navBar/navbar";
function meetingRecord(props) {
  return (
    <div>
      {/* <AddComments /> */}
      <MainNavBar>
        <MeetingRecored />
      </MainNavBar>
    </div>
  );
}
export default meetingRecord;
