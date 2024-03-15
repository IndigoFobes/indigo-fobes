import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import Link from "next/link";
import Image from "next/image";
import { Component } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

// export interface SocialMedia {
//   href: string;
//   id: number;
//   component: React.ComponentType;
// }

// const socialMedia: SocialMedia[] = [
//   {
//     href: "https://www.facebook.com/",
//     id: 0,
//     component: FaFacebook,
//   },
//   {
//     href: "https://www.instagram.com/",
//     id: 1,
//     component: FaFacebook,
//   },
//   {
//     href: "https://www.facebook.com/m",
//     id: 2,
//     component: FaFacebook,
//   },
// ];

export default function Footer() {
  return (
    <div className="relative font-sans flex bg-[var(--light-theme-color)] min-h-[10rem] text-[var(--light-text-color)]">
      <div className="font-mono absolute left-8 top-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-3 z-30 text-3xl">
          {/* {socialMedia.map((item) => {
            return (
              <Link href={item.href} key={item.id} target={"_blank"}>
               
              </Link>
            );
          })} */}
          <Link
            href={"https://resumes.actorsaccess.com/indigofobes"}
            target={"_blank"}
          >
            <Image
              src={"/actors_access-blue.png"}
              alt={"Actors Access Icon"}
              width={30}
              height={30}
              className={"mr-2 hidden md:flex"}
            ></Image>
          </Link>
          <Link
            href={"https://www.instagram.com/indigofobes"}
            target={"_blank"}
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
      <div className="absolute flex flex-col top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 gap-5">
        <Link href="/" className="">
          <h4 className="text-center font-[600] font-mono text-xl md:text-2xl hover:cursor-pointer">
            Indigo Fobes
          </h4>
        </Link>
        <div className="text-center text-xs xl:text-sm font-mono">
          <p className="">Copyright 2023 Indigo M. Fobes</p>
          <p>Site designed and built by Indigo Fobes</p>
        </div>
      </div>
    </div>
  );
}
