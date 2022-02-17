// @flow
import * as React from "react";
import AddItems from "./AddItems";
import MeetingItems from "./MeetingItems";
function CurrentMeeting  (props)  {
  return (
    <div>
      <AddItems />
      <MeetingItems />
    </div>
  );
};
export default CurrentMeeting;
