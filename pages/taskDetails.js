import * as React from "react";
import TaskDetails from "./../components/TaskDetails";
import MainNavBar from "../components/navBar/navbar";
import { useSession } from "next-auth/react";
import { getCsrfToken, getSession } from "next-auth/react";
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
