// @flow
import * as React from "react";
import { VoteDetails } from "../components/VoteDetails";
import { invoicesData } from "../Faker/general";
import MainNavBar from "../components/navBar/navbar";
import { useSession } from "next-auth/react";
function voteDetails(props) {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <MainNavBar>
          <VoteDetails votes={invoicesData[0].votes[0]} />
        </MainNavBar>
      ) : (
        ""
      )}
    </div>
  );
}
export default voteDetails;
