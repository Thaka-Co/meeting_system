import React from "react";
import AddMeeting from "../components/AddMeeting";
import MainNavBar from "../components/navBar/navbar";
import { getCsrfToken, getSession } from "next-auth/react";
function meeting(props) {
  console.log(props, "props");
  return (
    <div>
      {session ? (
        <MainNavBar>
          <AddMeeting />
        </MainNavBar>
      ) : (<></>
      )} 
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
  const result = await fetch("http://localhost:3000/api/rooms/getRoom");
  const rooms = await result.json();
  return {
    props: {
      csrfToken: await getCsrfToken(context),
      rooms,
    },
  };
}
// export const getStaticProps = async () => {
//   const res = await fetch('http://localhost:3000/api/rooms/getRoom')
//   const rooms = await res.json()
//   return {
//     props: {
//       rooms,
//     },
//   };
// };
