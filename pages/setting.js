// @flow
import * as React from "react";
import { Setting } from "../components/Setting";
import MainNavBar from "../components/navBar/navbar";
import { useSession } from "next-auth/react";

export default function setting(props) {
  const { data: session } =   useSession();
  return (
    <div>
      {/* {session ? ( */}
        <MainNavBar>
          <Setting />
        </MainNavBar>
      {/* ) : (
        ""
      )} */}
    </div>
  );
}
