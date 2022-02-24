import * as React from "react";
import TaskDetails from "./../components/TaskDetails";
import MainNavBar from "../components/navBar/navbar";
export const taskDetails = (props) => {
  return (
    <div>
      <MainNavBar>
        <TaskDetails />
      </MainNavBar>
    </div>
  );
};
export default taskDetails;
