// @flow
import * as React from "react";
import { VoteDetails } from "../components/VoteDetails";
import { invoicesData } from "../Faker/general";
import MainNavBar from "../components/navBar/navbar";
function voteDetsils(props) {
  return (
    <div>
      <MainNavBar>
        <VoteDetails votes={invoicesData[0].votes[0]} />
      </MainNavBar>
    </div>
  );
}
export default voteDetsils;
