// @flow
import * as React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
export default function layout({ children }) {
  return (
    <div>
      <Navbar>
        <main>{children}</main>
        <Footer />
      </Navbar>
    </div>
  );
}
