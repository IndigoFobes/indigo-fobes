"use client";
import Link from "next/link";
import MediaDropdown from "./media-dropdown";
import React, { useState } from "react";
import MobileDropdown from "./mobile-menu";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useMotionValue,
  Variants,
} from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { link } from "fs";

export interface MenuItem {
  title: string;
  route?: string;
  id: number;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    route: "/",
    id: 0,
  },
  {
    title: "About",
    route: "/about",
    id: 1,
  },
  {
    title: "Headshot + Resume",
    route: "/resume",
    id: 2,
  },
  {
    title: "Media",
    route: "/media",
    id: 3,
  },
  {
    title: "Contact",
    route: "/#contact",
    id: 4,
  },
];

export default function Header() {
  const path = usePathname();

  return (
    <motion.header
      className="absolute top-0 right-0 header-bg hidden z-30 w-full md:flex md:flex-col justify-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute flex justify-center top-0 w-screen text-center text-[var(--light-text-color)] pt-3 lg:pt-8 px-4 header-title">
        <Link href="/" className="header-title link-no-dec">
          <h1>Indigo Fobes</h1>
        </Link>
      </div>
      {/* only visible on screens medium and larger */}
      <div className="menu-height flex w-screen place-items-end">
        <ul className="hidden w-full menu-item font-[500] md:grid grid-cols-5 text-[var(--light-text-color)] text-center pb-4 text-sm md:text-md lg:text-lg">
          {menuItems.map((item) => {
            return (
              <Link
                key={item.id}
                className={`relative hover:text-[var(--accent-color)] place-self-center link-no-dec ${
                  item.route === path ? `` : `hover-underline-animation`
                }`}
                href={item?.route || ""}
              >
                {item.route === path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full -translate-y-[2px] block h-[2px] w-full bg-[var(--light-text-color)]"
                  />
                )}
                {item.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </motion.header>
  );
}
