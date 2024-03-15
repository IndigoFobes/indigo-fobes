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
          {`Indigo was born and raised in Alpharetta, Georgia. She’s the second of four kids, and she loves her family dearly. Indigo was – as a little gal – goofy, vivacious, curious, and imaginative. Though she often felt like she was in charge, she generally followed in the footsteps of her older brother, Chase, wherever he went and whatever he did. Thus, when Chase stepped into theatre at about 10 years old, little Indigo was keen to be a part of it. She practiced the dance moves on the side, longing to be in the same troupe her brother was in. A couple years later, she finally found herself in those same rehearsal rooms, working on her first “big kid” show: Children of Eden. She played young Abel, the first of many times Indigo would play a little boy (cue: Winthrop, Aladdin, and Pinnochio). Indigo fell in love with theatre and continued to watch her brother as they both stepped into more intense training and pursuit of performing. 
          `}
          {<br></br>}
          {<br></br>}
          {`Indigo is still goofy, vivacious, curious, and imaginative, but perhaps not as feisty as she was back in the day. She learned early on that she excelled in tap dancing and in committing fully to whatever character she was playing. She ended up beginning her pursuit of a BFA in Musical Theatre at Texas Christian University in 2017 and is extremely grateful for the four years she got to spend there. During those four years, she met some of her best friends, learned how to dig deeper into characters, realized she’s a SOPRANO, and got engaged to her best friend, James.`}
          {<br></br>}
          {<br></br>}
          {`Indigo now lives in NYC with her husband James, both pursuing the arts. Her side hustle is building websites, a skill she learned before moving to NYC. When not designing or coding websites, Indigo can be found singing & dancing in her apartment, spending time with her sweet husband, baking bread, or jogging around Hudson Heights. Indigo loves her community at Church of the City, and The Hang, and is grateful to God for the friends that make NYC feel like home and for his love for her.`}
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
        {`Indigo was born and raised in Alpharetta, Georgia. She’s the second of four kids, and she loves her family dearly. Indigo was – as a little gal – goofy, vivacious, curious, and imaginative. Though she often felt like she was in charge, she generally followed in the footsteps of her older brother, Chase, wherever he went and whatever he did. Thus, when Chase stepped into theatre at about 10 years old, little Indigo was keen to be a part of it. She practiced the dance moves on the side, longing to be in the same troupe her brother was in. A couple years later, she finally found herself in those same rehearsal rooms, working on her first “big kid” show: Children of Eden. She played young Abel, the first of many times Indigo would play a little boy (cue: Winthrop, Aladdin, and Pinnochio). Indigo fell in love with theatre and continued to watch her brother as they both stepped into more intense training and pursuit of performing. 
          `}
        {<br></br>}
        {<br></br>}
        {`Indigo is still goofy, vivacious, curious, and imaginative, but perhaps not as feisty as she was back in the day. She learned early on that she excelled in tap dancing and in committing fully to whatever character she was playing. She ended up beginning her pursuit of a BFA in Musical Theatre at Texas Christian University in 2017 and is extremely grateful for the four years she got to spend there. During those four years, she met some of her best friends, learned how to dig deeper into characters, realized she’s a SOPRANO, and got engaged to her best friend, James.`}
        {<br></br>}
        {<br></br>}
        {`Indigo now lives in NYC with her husband James, both pursuing the arts. Her side hustle is building websites, a skill she learned before moving to NYC. When not designing or coding websites, Indigo can be found singing & dancing in her apartment, spending time with her sweet husband, baking bread, or jogging around Hudson Heights. Indigo loves her community at Church of the City, and The Hang, and is grateful to God for the friends that make NYC feel like home and for his love for her.`}
      </motion.p>
      {/* pics at bottom */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
        <div className="relative min-h-[20rem]">
          <Image
            src="/indigo-james.jpg"
            alt="Indigo & James marriage!"
            fill={true}
            className="object-cover"
          />
          <div
            className="opacity-[0] absolute flex bg-[#e1c7e8]/50 hover:opacity-100 top-0 left-0 w-full h-full justify-start"
            style={{ transition: "opacity 300ms ease-in-out" }}
          >
            <h3 className="p-3 text-[1rem] text-gray-700">The best day.</h3>
          </div>
        </div>
        <div className="relative min-h-[25rem]">
          <Image
            src="/indigo-running.jpg"
            alt="Indigo running the GWB"
            fill={true}
            className="object-cover"
          />
          <div
            className="opacity-[0] absolute flex bg-[#e1c7e8]/50 hover:opacity-100 top-0 left-0 w-full h-full justify-start"
            style={{ transition: "opacity 300ms ease-in-out" }}
          >
            <h3 className="p-3 text-[1rem] text-gray-700">
              Running the GWB, smiling at James!
            </h3>
          </div>
        </div>
        <div className="relative min-h-[25rem]">
          <Image
            src="/indigo-cats-pumped.jpg"
            alt="Indigo Cats"
            fill={true}
            className="object-cover"
          />
          <div
            className="opacity-[0] absolute flex bg-[#e1c7e8]/50 hover:opacity-100 top-0 left-0 w-full h-full justify-start"
            style={{ transition: "opacity 300ms ease-in-out" }}
          >
            <h3 className="p-3 text-[1rem] text-gray-700">
              Pre-show. Just feelin' jazzed.
            </h3>
          </div>
        </div>
        <div className="relative min-h-[25rem]">
          <Image
            src="/indigo-pool.jpg"
            alt="Indigo by the pool"
            fill={true}
            className="object-cover"
          />
          <div
            className="opacity-[0] absolute flex bg-[#e1c7e8]/50 hover:opacity-100 top-0 left-0 w-full h-full justify-start"
            style={{ transition: "opacity 300ms ease-in-out" }}
          >
            <h3 className="p-3 text-[1rem] text-gray-700">
              Just chilling by the pool in Florida, at my husband's
              grandparent's best friends' house.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
