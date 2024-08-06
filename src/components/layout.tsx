import React, { FC, PropsWithChildren } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <div className="flex">
      <Sidebar />
      <div className="relative flex flex-1 flex-col lg:ml-72.5">
        <Header />

        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          <main>{children}</main>
        </div>
      </div>
    </div>
  </>
);

export default Layout;
