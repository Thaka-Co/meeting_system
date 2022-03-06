import * as React from "react";
import TaskDetails from "./../components/TaskDetails";
import MainNavBar from "../components/navBar/navbar";
import { useSession } from "next-auth/react";
export const taskDetails = (props) => {
  const { data: session } = useSession();
  return (
    <div>
      {/* {session ? ( */}
        <MainNavBar>
          <TaskDetails />
        </MainNavBar>
      {/* ) : (
        ""
      )} */}
    </div>
  );
};
export default taskDetails;
