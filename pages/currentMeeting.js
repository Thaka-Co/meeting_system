// @flow
import * as React from "react";
import CurrentMeeting from "../components/CurrentMeeting";
import MainNavBar from "../components/navBar/navbar";
import { useSession } from "next-auth/react";
function currentMeeting(props) {
  const { data: session } =   useSession();
  return (
    <div>
      {/* {session ? ( */}
        <MainNavBar>
          <CurrentMeeting />
        </MainNavBar>
      {/* ) : (
        ""
      )} */}
    </div>
  );
}
export default currentMeeting;
