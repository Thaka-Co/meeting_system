import React from "react";
import MeetingDetails from "../components/MeetingDetails";
import MainNavBar from "../components/navBar/navbar";
import { useSession } from "next-auth/react";
function meetingDetails(props) {
  const { data: session } = useSession();
  return (
    <div>
      {/* {session ? ( */}
        <MainNavBar>
          <MeetingDetails />
        </MainNavBar>
      {/* ) : (
        <></>
      )} */}
    </div>
  );
}

export default meetingDetails;
