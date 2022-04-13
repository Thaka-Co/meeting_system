// @flow
import * as React from "react";
import { Setting } from "../components/Setting";
import { getCsrfToken, getSession } from "next-auth/react";
export default function setting(props) {
  return (
    <div>
      <Setting />
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
  // const result = await fetch(`http://localhost:3000/api/user/${id}`);
  // console.log(result);
  // const user = await result.json();
  return {
    props: {
      csrfToken: await getCsrfToken(context),
      // user,
    },
  };
}
