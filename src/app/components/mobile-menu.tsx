"use client";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import Link from "next/link";
import { MenuItem } from "./header";

const menuItems: MenuItem[] = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Headshot + Resume",
    route: "/resume",
  },
  {
    title: "Media",
    route: "/media",
  },
  {
    title: "Contact",
    route: "/#contact",
  },
];

export default function MobileDropdown() {
  // Open mobile menu
  const [mobileIsOpen, setMobileIsOpen] = useState<boolean>(false);

  // const dropdown = document.getElementById("mobile-dropdown");

  const toggle = () => {
    setMobileIsOpen((old) => !old);
    // dropdown?.translate;
  };

  const transClass = mobileIsOpen ? "flex h-[212px]" : "flex h-0";
  const textHidden = mobileIsOpen
    ? "flex"
    : "absolute -top-[200px] opacity-0 rotate-45";

  return (
    <>
      <div className="md:hidden font-[500] text-[var(--light-text-color)]">
        <header className="font-mono w-full bg-[var(--dark-theme-color)] grid grid-cols-5 md:flex md:flex-col justify-center">
          <Link href="/" className="col-start-2 col-end-5">
            <h1 className="font-[300] text-center text-[var(--light-text-color)] py-3 px-4 header-title">
              Indigo Fobes
            </h1>
          </Link>
          <div className="md:hidden text-[var(--light-text-color)] flex justify-center place-items-center">
            <button onClick={toggle} className="sm:text-2xl">
              <AiOutlineMenu />
            </button>
          </div>
        </header>
        {/* Dropdown */}
        {/* <div className="fixed top-0 w-full h-full right-0 z-30"> */}
        <div
          id="mobile-dropdown"
          className={`absolute -top-[212px] right-0 w-full z-30 bg-[var(--light-theme-color)] justify-center rounded-[var(--rounded-tiny)] ${transClass} translate-y-[212px]`}
          style={{ transition: "height 500ms ease-in-out 0s" }}
        >
          <ul
            className={`${textHidden} py-4 flex-col text-center justify-center gap-1`}
            style={{ transition: "opacity 500ms ease-in-out 300ms" }}
          >
            {menuItems.map((item) => {
              return (
                <Link href={item?.route || ""} onClick={toggle}>
                  {item.title}
                </Link>
              );
            })}
          </ul>
          <p
            className={`absolute top-8 right-10 sm:top-10 sm:right-16 ${textHidden} cursor-pointer sm:text-2xl close-menu`}
            onClick={toggle}
            style={{
              transition: "all 300ms ease-in-out",
            }}
          >
            <AiOutlineClose />
          </p>
        </div>
        {/* </div> */}
      </div>
      {mobileIsOpen ? (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
          onClick={toggle}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}
