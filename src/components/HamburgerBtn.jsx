"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";

const HamburgerBtn = () => {
  const [sidebarState, setSidebarState] = useState(false);

  return (
    <>
      <Image
        src="/images/hamburger.png"
        alt="Hamburger Icon"
        width={20}
        height={20}
        className="md:hidden"
        onClick={()=>setSidebarState(true)}
      />
      <Sidebar sidebarState={sidebarState} setSidebarState={setSidebarState}/>
    </>
  );
};

export default HamburgerBtn;
