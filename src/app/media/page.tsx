"use client";
import Header from "../components/header";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// import BootstrapCarousel from "../components/carousel";
import "../../../src/app/globals.css";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useMotionValue,
  Variants,
} from "framer-motion";
import ImageSlideshow from "../components/swiper";

// Variants for animations
const titleVariants: Variants = {
  hide: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const imageVariants: Variants = {
  hide: {
    opacity: 0,
    y: 75,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
};

// images (Same as OG definition)
export interface Photos {
  src: string;
  alt: string;
  title: string;
  id: number;
}
[];

// shows with nested photos
export interface Shows {
  id: number;
  title: string;
  credit: string;
  source: string;
  photos: {
    [key: string]: Photos;
  };
}

// buttons
export interface Buttons {
  id: number;
  title: string;
}

// video details
export interface Videos {
  id: number;
  src: string;
  alt: string;
}
// OG photos layout; check out previous commits ***

const shows: Shows[] = [
  {
    id: 0,
    title: "Cats",
    credit: "City Springs Theatre Company, Ben Rose Photography",
    source: "https://proofs.benrosephotography.com/",
    photos: {
      a: {
        id: 1,
        title: "Macavity",
        src: "/Indigo-cats-5.jpg",
        alt: "Indigo as Demeter in Cats, Macavity song",
      },
      b: {
        id: 2,
        title: "Macavity",
        src: "/Indigo-cats-2.jpg",
        alt: "Indigo as Demeter in Cats, with Bombalurina; Macavity song",
      },
      c: {
        id: 3,
        title: "Cats",
        src: "/Indigo-cats-1.jpg",
        alt: "Cats",
      },
      d: {
        id: 4,
        title: "Cats",
        src: "/Indigo-cats-4.jpg",
        alt: "Cats",
      },
      e: {
        id: 5,
        title: "Cats",
        src: "/Indigo-cats-6.jpg",
        alt: "Cats",
      },
      f: {
        id: 6,
        title: "Cats",
        src: "/Indigo-cats-8.jpg",
        alt: "Cats",
      },
    },
  },
  {
    id: 1,
    title: "Romeo & Juliet",
    credit: "REV Theatre Company, On Tour",
    source: "https://therevtheatre.com/education/sequential-dramatics/",
    photos: {
      a: {
        id: 1,
        title: "Romeo & Juliet",
        src: "/Romeo&Juliet-1.jpg",
        alt: "Romeo & Juliet",
      },
      b: {
        id: 2,
        title: "Romeo & Juliet",
        src: "/Romeo&Juliet-8.jpg",
        alt: "Romeo & Juliet",
      },
      c: {
        id: 3,
        title: "Romeo & Juliet",
        src: "/Romeo&Juliet-2.jpg",
        alt: "Romeo & Juliet",
      },
      d: {
        id: 4,
        title: "Romeo & Juliet",
        src: "/Romeo&Juliet-6.jpg",
        alt: "Romeo & Juliet",
      },
      e: {
        id: 5,
        title: "Romeo & Juliet",
        src: "/Romeo&Juliet-4.jpg",
        alt: "Romeo & Juliet",
      },
      f: {
        id: 6,
        title: "Romeo & Juliet",
        src: "/Romeo&Juliet-5.jpg",
        alt: "Romeo & Juliet",
      },
    },
  },
];

const buttons: Buttons[] = [
  {
    id: 1,
    title: "Dance Reel",
  },
  {
    id: 2,
    title: "Do I Hear a Waltz?",
  },
  {
    id: 3,
    title: "Macavity",
  },
  {
    id: 4,
    title: "Romeo & Juliet",
  },
];

const videos: Videos[] = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/YbgaU1nXQHo?si=2FwVn8lW39h3q2le",
    alt: "Dance Reel",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/vnWLksg4E9o?si=Prp4p-oPrEmL6Gcx",
    alt: "Do I Hear a Waltz?",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/yombw1LuHfk?si=n9fPEr9cq0eB-N2D",
    alt: "Macavity",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/zCCSe9orCTg?si=-FszI56cSdtu-LNS",
    alt: "Romeo & Juliet",
  },
];

/* For Video State Rendering

Dislay certain videos depending on which "button" is clicked/toggled  
*/

export default function Page() {
  function handleClick(e) {
    setRendered(e.target.value);
  }

  const [rendered, setRendered] = useState(1);

  let source;
  let title;
  let id;

  if (rendered == 1) {
    source = videos[0].src;
    title = videos[0].alt;
    id = videos[0].id;
    // title = video[0].title;
  } else if (rendered == 2) {
    source = videos[1].src;
    title = videos[1].alt;
    id = videos[1].id;
  } else if (rendered == 3) {
    source = videos[2].src;
    title = videos[2].alt;
    id = videos[2].id;
  } else if (rendered == 4) {
    source = videos[3].src;
    title = videos[3].alt;
    id = videos[3].id;
  } else {
    console.log("Something went wrong.");
  }

  // Video frame
  const video = (
    <iframe
      className="rounded-sm w-[calc(800px*1/2)] h-[calc(400px*1/2)] md:w-[calc(800px*2/3)] md:h-[calc(400px*2/3)] lg:w-[800px] lg:h-[400px]"
      src={source}
      title={title}
      key={id}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );

  let photosArray;
  // For mapping photos within shows
  shows.map((show) => {
    const photosArray = Object.keys(show.photos).map(function (photoIndex) {
      let photo = show.photos[photoIndex];
      return photo;
    });
  });

  // ***RENDERED***
  return (
    <div className="lg:w-9/12 mx-8 sm:mx-auto sm:px-8 pt-16 md:pt-48 mb-20 md:mb-32">
      <div className="flex flex-col">
        {/* Videos section */}
        <div className="flex flex-col justify-center content-center mb-10">
          <motion.h1
            className="title text-center"
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={titleVariants}
          >
            Videos
          </motion.h1>
          <hr className="w-3/4 border-solid mt-4 place-self-center horizontal-line-accent mb-8"></hr>
          <div className="lg:row-span-4">
            <motion.div
              className="py-2 px-1 rounded-md flex justify-center"
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              {rendered == 0 ? (
                <div className="video-image flex b-gradient border-2 rounded-[var(--rounded-tiny)] w-[calc(800px*1/2)] h-[calc(400px*1/2)] md:w-[calc(800px*2/3)] md:h-[calc(400px*2/3)] lg:w-[800px] lg:h-[400px]">
                  <div className="flex image-overlay w-full justify-center">
                    <p className="place-self-center font-[500] text-[1.7rem] md:text-[2rem]">
                      Click below to see a video
                    </p>
                  </div>
                </div>
              ) : (
                <div>{video}</div>
              )}
              {/* {video} */}
            </motion.div>
          </div>
          <div className="flex flex-col place-self-center sm:grid sm:grid-cols-2 gap-6 mt-10 lg:mx-10 w-3/4">
            {buttons.map((button) => {
              return (
                <button
                  key={button.id}
                  value={button.id}
                  onClick={handleClick}
                  className={`rounded-[var(--rounded-tiny)] text-md md:text-lg text-[var(--light-text-color)] hover:bg-[var(--light-text-transparent)] hover:text-[var(--accent-color)] border-[var(--light-text-color)] hover:border-[var(--accent-color)] border-2 p-2 m-2 md:m-4 w-full place-self-center h-full`}
                  style={{ transition: "all 300ms ease-in-out" }}
                >
                  {button.title}
                </button>
              );
            })}
          </div>
          {/* <button onClick={handleClick} className="bg-red-400 m-4 p-3">
            Click me
          </button> */}
        </div>
        {/* Production photos section */}
        <div className="flex flex-col justify-center mt-8 md:mt-20 content-center">
          <motion.h1
            className="title text-center"
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={titleVariants}
          >
            Production Photos
          </motion.h1>
          <hr className="w-full md:w-3/4 border-solid mt-4 place-self-center horizontal-line-accent mb-2"></hr>
        </div>
        {/* map through each show, with photos from each show. I can either create new interfaces with photos nested into shows. I don't know another good option. */}
        {shows.map((show) => {
          return (
            <div className="w-full md:w-3/4 flex flex-col self-center pb-12">
              <motion.h2
                className="text-[2rem] py-4 flex"
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
                variants={titleVariants}
              >
                {show.title}
              </motion.h2>
              {/* <BootstrapCarousel show={show} key={show.id} /> */}
              <ImageSlideshow show={show} key={show.id} />
              <Link href={show.source} target="_blank">
                <p className="pt-1 hover:text-[var(--accent-color)]">
                  {show.credit}
                </p>
              </Link>
            </div>
          );
        })}
        {/* OG photo layout, just 3 rows of 3, look at previous commits */}
      </div>
    </div>
  );
}
