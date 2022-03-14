// @flow
import * as React from "react";
import { Setting } from "../components/Setting";
import MainNavBar from "../components/navBar/navbar";
import { getCsrfToken, getSession } from "next-auth/react";
import Footer from "../components/navBar/footer";
export default function setting(props) {
  return (
    <div>
      {/* {session ? ( */}
      <MainNavBar>
        <Setting user={props.user} />
        <Footer />
      </MainNavBar>
      {/* ) : (
        ""
      )} */}
    </div>
  );
}
export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });
  const id = session.id;
  console.log(id);
  if (!session && res) {
    console.log("working");
    res.writeHead(302, {
      Location: "/signin",
    });
    res.end();
  }
  const result = await fetch(`http://localhost:3000/api/user/${id}`);
  console.log(result);
  const user = await result.json();
  return {
    props: {
      csrfToken: await getCsrfToken(context),
      user,
    },
  };
}
