// @flow
import * as React from "react";
import AddItems from "../../components/AddItems";
import MeetingItems from "../../components/MeetingItems";
import { MeetingMinutes } from "../../components/MeetingMinutes";
import MainNavBar from "../../components/navBar/navbar";
import Footer from "../../components/navBar/footer";
import { useRouter } from "next/router";
export default function nextStep(props) {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <div>
      <MainNavBar>
        <MeetingMinutes id={id} />
        <AddItems id={id} />
        {/* <MeetingItems id={id}/> */}
        <Footer />
      </MainNavBar>
    </div>
  );
}
