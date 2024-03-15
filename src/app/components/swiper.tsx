"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { Shows } from "../media/page";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface Props {
  show: Shows;
}

export default function ImageSlideshow(props: Props) {
  const { show } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  //   const [index, setIndex] = useState(1);
  //   const handleSelect = (selectedIndex, e) => {
  //     setIndex(selectedIndex);

  return (
    <div className="w-full">
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`slide-height w-full rounded-md`}
      >
        {Object.keys(show.photos).map(function (photoIndex) {
          var photo = show.photos[photoIndex];
          return (
            <SwiperSlide key={photo.id}>
              <div className="flex h-full w-full items-center justify-center relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="block h-full w-full object-cover"
                ></Image>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* Thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={12}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs mt-3 h-32 w-full rounded-md"
      >
        {Object.keys(show.photos).map(function (photoIndex) {
          var photo = show.photos[photoIndex];
          return (
            <SwiperSlide key={photo.id}>
              <button className="flex h-full w-full items-center justify-center relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="block h-full w-full object-cover"
                ></Image>
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
