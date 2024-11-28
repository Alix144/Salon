"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const Sidebar = ({ sidebarState, setSidebarState }) => {
  const navbar = useTranslations("navbar");
// sidebarState ? "right-0" : "-right-full"
  return (
    <div
      className={`h-screen w-[80%] shadow-md bg-white fixed top-0 ${
        navbar("language")==="English"
        ?
        (sidebarState ? "left-0" : "-left-full")
        :
        (sidebarState ? "right-0" : "-right-full" )
      } z-10 md:hidden duration-200 text-center`}
    >
      <nav>
        <div className="p-10 flex flex-col gap-10">
          <Link href="#hero" onClick={() => setSidebarState(false)}>
            <h1 className="text-2xl font-bold">SENIORA</h1>
          </Link>
          <ul className="space-y-8">
            <li>
              <Link
                href="#about"
                className="text-gray-600 hover:text-black"
                onClick={() => setSidebarState(false)}
              >
                {navbar("about")}
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-gray-600 hover:text-black"
                onClick={() => setSidebarState(false)}
              >
                {navbar("services")}
              </Link>
            </li>
            <li>
              <Link
                href="#team"
                className="text-gray-600 hover:text-black"
                onClick={() => setSidebarState(false)}
              >
                {navbar("team")}
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-black"
                onClick={() => setSidebarState(false)}
              >
                {navbar("contact")}
              </Link>
            </li>
          </ul>
          <Link
            href={navbar("navigateTo")}
            className="text-gray-600 hover:text-black flex items-center justify-center gap-2"
            onClick={() => setSidebarState(false)}
          >
            <Image src="/images/world.png" alt="World" width={20} height={20} />
            {navbar("language")}
          </Link>
        </div>
      </nav>
      <Image
        src="/images/cross.png"
        alt="Close Icon"
        width={20}
        height={20}
        className={`absolute ${navbar("language") === "English" ? "left-5" : "right-5"} top-5`}
        onClick={() => setSidebarState(false)}
      />
    </div>
  );
};

export default Sidebar;
