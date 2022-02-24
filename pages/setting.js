// @flow
import * as React from "react";
import { Setting } from "../components/Setting";
import MainNavBar from "../components/navBar/navbar";
export default function setting(props) {
  return (
    <div>
      <MainNavBar>
        <Setting />
      </MainNavBar>
    </div>
  );
}
