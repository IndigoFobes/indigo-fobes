"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { Shows } from "../media/page";

interface Props {
  show: Shows;
}

export default function BootstrapCarousel(props: Props) {
  const { show } = props;

  const [index, setIndex] = useState(1);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    // console.log(show.photos);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {/* <div className="text-2xl text-center py-4">{show.title}</div> */}
      {Object.keys(show.photos).map(function (photoIndex) {
        var photo = show.photos[photoIndex];
        return (
          <Carousel.Item key={photo.id} interval={4000} className="slide">
            <div className="max-h-[30rem] md:max-h-[40rem] 2xl:max-h-[50rem] slide relative">
              {/* <img src={photo.src} alt={photo.alt} /> */}
              <Image
                src={photo.src}
                alt={photo.alt}
                fill={true}
                className="object-cover"
              ></Image>
            </div>
            <Carousel.Caption>
              <h3>{photo.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
