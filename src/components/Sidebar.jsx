"use client";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const Sidebar = ({ sidebarState, setSidebarState }) => {
  return (
    <div
      className={`h-screen w-[80%] shadow-md bg-white fixed top-0 ${
        sidebarState ? "right-0" : "-right-full"
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
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-gray-600 hover:text-black"
                onClick={() => setSidebarState(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#team"
                className="text-gray-600 hover:text-black"
                onClick={() => setSidebarState(false)}
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-black"
                onClick={() => setSidebarState(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href="#"
            className="text-gray-600 hover:text-black flex items-center justify-center gap-2"
            onClick={() => setSidebarState(false)}
          >
            <Image
              src="/images/world.png"
              alt="World"
              width={20}
              height={20}
            />
            العربية
          </Link>
        </div>
      </nav>
      <Image
        src="/images/cross.png"
        alt="Close Icon"
        width={20}
        height={20}
        className="absolute top-5 right-5"
        onClick={() => setSidebarState(false)}
      />
    </div>
  );
};

export default Sidebar;
