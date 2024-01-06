"use client";
import Header from "../components/header";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useMotionValue,
  Variants,
} from "framer-motion";

const textVariants: Variants = {
  hide: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const imageVariants: Variants = {
  hide: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Page() {
  return (
    <div className="w-9/12 mx-auto pt-16 md:pt-48 mb-20 md:mb-32">
      <h1 className="title pb-10 text-center md:text-start">About me</h1>
      {/* mobile */}
      <div className="md:hidden flex flex-col justify-center">
        <motion.div
          className="h-[20rem] w-[20rem] about-image place-self-center"
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={imageVariants}
        ></motion.div>
        <motion.p
          className="text-[.9rem] text-start font-[400] mt-10"
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariants}
        >
          {`Jacob was born in Buffalo, NY in the sweltering month of August.
          Always interested in acting, it wasn’t until he received numerous
          accolades from his middle school film festival that he decided to
          pursue it as a career. From that point on, Jacob was a force to be
          reckoned with. If there was an opportunity to learn, he took it. He
          was at every workshop, class, and audition possible. In 2021, he
          graduated from SUNY Fredonia with a BFA in Acting with minors in Music
          and Gender Studies. Jacob currently resides in Manhattan with his
          plants and Legos.`}
          {<br></br>}
          {<br></br>}
          {`Jacob’s main focus in his work is the character.
          Their journey and relationships. Their hopes and dreams. From The
          Pillowman to Singfeld!, he is able to be successful across many
          genres. Jacob takes pride in his ability to understand and empathize
          with people so different from him, and he is constantly pulling
          inspiration from the outside world into his work.`}
          {<br></br>}
          {<br></br>}
          {`A wise teacher once
          told Jacob, “The best way to grow as an actor is by living your life
          to the fullest,” which he embraced. Jacob loves to cook, box, and pet
          dogs, although not always at the same time. His favorite places to be
          are in a park or a movie theater. Jacob loves to spread positivity and
          make people laugh, though sometimes he can be a real rascal (in a
          totally safe, healthy, and marketable way). Maybe just a little prank
          every now and again. Unless…?`}
        </motion.p>
      </div>
      <motion.div
        className="md:relative md:float-right md:h-[22.4rem] md:w-[19.2rem] lg:h-[28rem] lg:w-[24rem] xl:h-[35rem] xl:w-[30rem] about-image ml-6 mb-4"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={imageVariants}
      >
        {/* <Image
          src="/Jacob_hs_2.jpg"
          alt="Male placeholder"
          fill={true}
          className="mx-auto object-cover md:pl-16 pb-10 bg-top"
        /> */}
      </motion.div>
      <motion.p
        className="hidden md:block text-[1.1rem] text-start font-[400]"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={textVariants}
      >
        {`Jacob was born in Buffalo, NY in the sweltering month of August.
          Always interested in acting, it wasn’t until he received numerous
          accolades from his middle school film festival that he decided to
          pursue it as a career. From that point on, Jacob was a force to be
          reckoned with. If there was an opportunity to learn, he took it. He
          was at every workshop, class, and audition possible. In 2021, he
          graduated from SUNY Fredonia with a BFA in Acting with minors in Music
          and Gender Studies. Jacob currently resides in Manhattan with his
          plants and Legos.`}
        {<br></br>}
        {<br></br>}
        {`Jacob’s main focus in his work is the character.
          Their journey and relationships. Their hopes and dreams. From The
          Pillowman to Singfeld!, he is able to be successful across many
          genres. Jacob takes pride in his ability to understand and empathize
          with people so different from him, and he is constantly pulling
          inspiration from the outside world into his work.`}
        {<br></br>}
        {<br></br>}
        {`A wise teacher once
          told Jacob, “The best way to grow as an actor is by living your life
          to the fullest,” which he embraced. Jacob loves to cook, box, and pet
          dogs, although not always at the same time. His favorite places to be
          are in a park or a movie theater. Jacob loves to spread positivity and
          make people laugh, though sometimes he can be a real rascal (in a
          totally safe, healthy, and marketable way). Maybe just a little prank
          every now and again. Unless…?`}
      </motion.p>
    </div>
  );
}
