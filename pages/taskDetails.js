import * as React from "react";
import TaskDetails from "./../components/TaskDetails";
import { getCsrfToken, getSession } from "next-auth/react";
import NavBar from "../../components/navBar/navbar";
export const taskDetails = (props) => {
  return (
    <div>
      <NavBar>
        <TaskDetails />
      </NavBar>
    </div>
  );
};
export default taskDetails;
export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });
  console.log(session);
  if (!session && res) {
    console.log("working");
    res.writeHead(302, {
      Location: "/signin",
    });
    res.end();
  }
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
