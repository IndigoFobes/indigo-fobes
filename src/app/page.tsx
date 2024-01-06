"use client";
import Header from "./components/header";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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

const introPictureVariants: Variants = {
  hide: {
    opacity: 0,
    x: -500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const introTextVariants: Variants = {
  hide: {
    opacity: 0,
    x: 500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const titleVariants: Variants = {
  hide: {
    opacity: 0,
    y: 75,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const reachOutVariants: Variants = {
  hide: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const reachOutTextVariants: Variants = {
  hide: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <div className="font-mono font-[400] relative bg-[var(--light-theme-color)] flex flex-col md:grid grid-cols-7">
        <div className="md:relative col-start-1 col-end-8 md:min-h-[30rem] lg:min-h-[40rem] xl:min-h-[50rem] xl:max-h-[60rem] w-full">
          <Image
            src="/indigo-dance.PNG"
            alt="Indigo Dancing"
            fill={true}
            className="hidden md:flex object-cover object-top"
          />
          {/* mobile */}
          <Image
            src="/Jacob_pillowman.jpg"
            alt="Male placeholder"
            width={1000}
            height={500}
            className="md:hidden object-cover"
          />
          {/* <div className="hidden md:flex absolute font-mono text-[1.5rem] lg:text-[2rem] xl:text-[3rem] bottom-[2rem] z-30 left-0 translate-x-10 -rotate-6 ">
            Jacob A. Millman
          </div> */}
        </div>
        <div className="col-start-1 col-end-8 flex flex-col justify-center content-center my-auto px-4 md:px-20 py-10 2xl:pr-60 bg-[var(--dark-theme-color)]">
          <h1 className=" text-[var(--light-text-color)] font-[300] text-md md:text-xl leading-normal mb-10 mx-8 md:mx-20 lg:mx-40 text-center">
            Not a quote, but just a blurb about indigo,{" "}
            <span className="text-[var(--light-text-color)] font-[600]">
              her personality,{" "}
            </span>
            and more.
            {/* <span className="text-[var(--light-text-color)] font-[500]">
              actor
            </span>{" "} */}
          </h1>
          <div className="flex justify-center">
            <Link
              className="font-[600] text-center bg-[var(--dark-theme-color)] my-2 mx-8 rounded-[var(--rounded-tiny)] text-lg text-[var(--light-text-color)] hover-underline-animation"
              href="/about"
            >
              read more about Indigo
            </Link>
          </div>
        </div>
      </div>
      {/* What's New / Most Recently Section */}
      <div className="p-4 flex flex-col">
        <div className="title pt-12 pb-6 px-8 md:px-12 lg:px-20 xl:px-36 w-full grid grid-cols-3">
          <h1 className="col-start-1 md:col-end-3 col-end-4">Most Recently</h1>
          {/* <hr className="col-start-1 md:col-end-3 col-end-4 md:mr-10 border-solid horizontal-line-dark mt-2"></hr> */}
        </div>

        <ul className="md:px-12 lg:px-20 xl:px-36 h-auto">
          {/* first show */}
          <li className="flex flex-col md:grid md:grid-cols-5 pb-24">
            {/* image */}
            <motion.div
              className="md:col-start-1 md:col-end-3 relative place-self-center h-96 w-full mb-10 md:mb-0 md:w-full md:h-full md:mr-10"
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={introPictureVariants}
            >
              <Image
                src="/Indigo-cats-1.jpg"
                alt="Indigo in Cats"
                fill
                className="object-cover"
              />
            </motion.div>
            {/* text */}
            <motion.div
              className="flex flex-col col-start-3 col-end-6 pl-10 mx-10 md:mx-0"
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={introTextVariants}
            >
              <h2 className="text-3xl md:text-4xl font-[500]">Cats</h2>
              <h3 className="text-2xl 2xl:text-3xl font-[400] mt-2 mb-4">
                City Springs Theatre Company
              </h3>
              <p className="md:text-lg lg:text-xl 2xl:text-2xl font-[400] lg:w-10/12">
                {`Indigo was recently Demeter in Cats, directed by Baayork Lee in Sandy Springs, Georgia.`}
              </p>
              <div className="place-self-start">
                <Link
                  className="hover-underline-animation pt-6 md:pt-10 text-lg lg:text-xl font-[500] text-[var(--light-text-color)] hover:cursor-pointer"
                  href="https://www.singfeld.com/"
                  target="_blank"
                >
                  get details
                </Link>
              </div>
            </motion.div>
          </li>
        </ul>
      </div>
      {/* Quote section */}
      <div className="bg-[var(--dark-theme-color)] p-8 md:p-10">
        <p className="font-mono title text-[var(--light-text-color)] text-center lg:mx-20 my-5">
          {`"Quote that I love from an author`}
          <br className="hidden md:flex"></br> {`I love. Or a verse I love...”`}
          <br></br> {`- The Bible`}
        </p>
      </div>
      {/* Image section */}
      <div className="h-screen">
        {/* Headshots section */}
        <div className="grid grid-cols-10 h-1/2">
          {/* headshot */}
          <div className="col-start-1 col-end-6 md:col-end-4 w-full relative h-full">
            <Image
              src="/Indigo-pink-headshot.jpg"
              alt="Indigo's face"
              fill
              className="object-cover object-top"
            />
          </div>
          {/* text/link */}
          <div className="col-start-6 md:col-start-4 col-end-11 w-full flex flex-col gap-6 justify-center items-center mx-auto">
            <motion.h2
              className="title text-[var(--light-text-color)]"
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={titleVariants}
            >
              {`Headshots`} <br className="sm:hidden"></br> {`& Resume`}
            </motion.h2>
            <hr className="w-3/4 xl:w-1/2 border-solid horizontal-line-dark mt-2"></hr>
            <Link
              className="font-[600] text-center my-2 mx-8 rounded-[var(--rounded-tiny)] text-lg text-[var(--light-text-color)] place-self-center hover-underline-animation"
              href="/resume"
            >
              see more
            </Link>
          </div>
        </div>
        {/* Production shot section */}
        <div className="grid grid-cols-10 bg-[var(--dark-theme-color)] h-1/2">
          {/* text/link */}
          <div className="col-start-1 col-end-6 md:col-end-8 w-full flex flex-col gap-6 justify-center items-center mx-auto">
            <motion.h2
              className="title text-[var(--light-text-color)]"
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={titleVariants}
            >
              Media
            </motion.h2>
            <hr className="w-3/4 xl:w-1/2 border-solid horizontal-line-light mt-2"></hr>
            <Link
              className="font-[600] text-center my-2 mx-8 rounded-[var(--rounded-tiny)] text-lg text-[var(--light-text-color)] place-self-center hover-underline-animation"
              href="/media"
            >
              see more media
            </Link>
          </div>
          {/* photo */}
          <div className="col-start-6 md:col-start-8 col-end-11 w-full relative h-full">
            <Image
              src="/Indigo-cats-2.jpg"
              alt="Indigo Cats"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      {/* Video section */}
      <div className="p-4 flex flex-col b-gradient">
        <h1 className="title pt-12 pb-4 place-self-center">
          Check out some of my work
        </h1>
        {/* Youtube video */}
        <div className="bg-fixed flex flex-col items-center w-full relative">
          <div className="py-2 px-1 rounded-md">
            <iframe
              className="rounded-sm w-[calc(1000px*1/3)] h-[calc(500px*1/3)] sm:w-[calc(1000px*1/2)] sm:h-[calc(500px*1/2)] md:w-[calc(1000px*2/3)] md:h-[calc(500px*2/3)] lg:w-[1000px] lg:h-[500px]"
              src="https://www.youtube.com/embed/YbgaU1nXQHo?si=O7-pdBHZebCzTK2n"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <Link
          className="mx-auto my-16 font-[600] text-center rounded-[var(--rounded-tiny)] text-lg text-[var(--light-text-color)] hover-underline-animation"
          href="/media"
        >
          see more videos
        </Link>
      </div>
      {/* Contact section */}
      <div className="w-screen contact-image flex min-h-screen" id="contact">
        <div className="image-overlay w-full">
          <div className="p-10 h-full flex flex-col md:flex-row mx-auto my-20 max-w-[35rem] md:max-w-[60rem]">
            <div className="md:mr-10 mb-8 md:mb-0 md:h-72 lg:h-96 flex md:justify-end md:w-1/3">
              <motion.h2
                className="font-[600] text-[3rem] text-[var(--dark-text-color)]"
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
                variants={reachOutVariants}
              >
                Reach out
              </motion.h2>
            </div>
            {/* vertical line */}
            <div className="verticalLine h-3/4 hidden md:flex"></div>
            <div className="md:ml-8 md:place-self-start flex w-1/2">
              <motion.div
                className="flex flex-col lg:mt-4"
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
                variants={reachOutTextVariants}
              >
                <h3 className="pt-2 pb-4 text-lg md:text-2xl font-[600] text-[var(--dark-text-color)]">
                  (777)777-7777
                </h3>
                <h3 className="pb-8 text-lg md:text-2xl font-[600] text-[var(--dark-text-color)]">
                  jacobam*****@gmail.com
                </h3>
                <Link
                  className="w-full md:w-3/4 mt-6 font-[600] text-center py-2 px-8 rounded-[var(--rounded-tiny)] text-lg text-[var(--dark-text-color)] hover:bg-[var(--light-text-transparent)] hover:text-[var(--light-text-color)] border-[var(--dark-text-color)] border-2"
                  href="mailto:indigo.crandell@gmail.com"
                >
                  Send an email
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
