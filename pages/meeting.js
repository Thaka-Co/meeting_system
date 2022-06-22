import React from "react";
import AddMeeting from "../components/AddMeeting";
import { getCsrfToken, getSession } from "next-auth/react";
import  NavBar  from "../components/navBar/navbar";
function meeting(props) {
  return (
    <div>
      <NavBar>
      <AddMeeting />
      </NavBar>
    </div>
  );
}
export default meeting;
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
  // const result = await fetch("http://localhost:3000/api/rooms/getRoom");
  // const rooms = await result.json();
  return {
    props: {
      csrfToken: await getCsrfToken(context),
      // rooms,
    },
  };
}
