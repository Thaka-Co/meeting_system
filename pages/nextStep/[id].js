// @flow
import * as React from "react";
import AddItems from "../../components/AddItems";
import MeetingItems from "../../components/MeetingItems";
import { MeetingMinutes } from "../../components/MeetingMinutes";
import { useRouter } from "next/router";
export default function nextStep(props) {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <div>
      <MeetingMinutes id={id} />
      <AddItems id={id} />
      {/* <MeetingItems id={id}/> */}
    </div>
  );
}
