// @flow
import * as React from "react";
import { MeetingRecored } from "../components/MeetingRecored";
import MainNavBar from "../components/navBar/navbar";
import { useSession } from "next-auth/react";
function meetingRecord(props) {
  const { data: session } = useSession();
  return (
    <div>
      {/* <AddComments /> */}
      {session ? (
        <MainNavBar>
          <MeetingRecored />
        </MainNavBar>
      ) : (
        ""
      )}
    </div>
  );
}
export default meetingRecord;
