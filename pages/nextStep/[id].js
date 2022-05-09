// @flow
import * as React from "react";
import AddItems from "../../components/AddItems";
import MeetingItems from "../../components/MeetingItems";
import { MeetingMinutes } from "../../components/MeetingMinutes";
import { useRouter } from "next/router";
export default function nextStep({ meeting }) {
  // const router = useRouter();
  // const { id } = router.query;
  console.log(meeting);
  return (
    <div>
      <MeetingMinutes id={meeting._id} />
      <AddItems id={meeting._id} />
      {/* <MeetingItems id={id}/> */}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/meetings/${context.params.id}`
  );
  const meeting = await res.json();
  return {
    props: { meeting },
  };
};
