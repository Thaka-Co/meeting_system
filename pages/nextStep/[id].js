// @flow
import * as React from "react";
import AddItems from "../../components/AddItems";
import MeetingItems from "../../components/MeetingItems";
import { MeetingMinutes } from "../../components/MeetingMinutes";
import { server } from "../../config";
import { useRouter } from "next/router";
import NavBar from "../../components/navBar/navbar";
export default function nextStep({ meeting }) {
  console.log(meeting);
  return (
    <div>
      <NavBar>
        <MeetingMinutes id={meeting._id} />
        <AddItems id={meeting._id} />
      </NavBar>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/meetings/${context.params.id}`);
  const meeting = await res.json();
  return {
    props: { meeting },
  };
};
