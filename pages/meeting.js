import React from "react";
import AddMeeting from "../components/AddMeeting";
import MainNavBar from "../components/navBar/navbar";
function meeting(props) {
  return (
    <div>
      <MainNavBar>
        <AddMeeting />
      </MainNavBar>
    </div>
  );
}
export default meeting;
