import React from "react";
import AddMeeting from "../components/AddMeeting";
import MainNavBar from "../components/navBar/navbar";
import { useSession } from "next-auth/react";
function meeting(props) {
  const { data: session } = useSession();
  return (
    <div>
      {/* {session ? ( */}
      <MainNavBar>
        <AddMeeting />
      </MainNavBar>
      {/* ) : (
       ''
      )}  */}
    </div>
  );
}
export default meeting;
