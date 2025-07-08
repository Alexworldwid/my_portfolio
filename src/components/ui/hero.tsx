"use client"

import gsap from "gsap";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";



const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const subHeadingRef = useRef<HTMLParagraphElement>(null);
  const waveEmojiRef = useRef(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    // Animate hero characters
    if (heroRef.current) {
      const chars = heroRef.current.querySelectorAll("span");
      gsap.fromTo(
        chars,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.05, // Animates each character with a delay
        }
      );
    }

    // Animate subheading characters
    if (subHeadingRef.current) {
      const subHeadingChars = subHeadingRef.current.querySelectorAll("span");
      gsap.fromTo(
        subHeadingChars,
        { opacity: 0, y: 30, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.05, // Animates each character with a delay
        }
      );
    }

    // wave animation
    gsap.to(waveEmojiRef.current, {
      keyframes: [
        { rotation: 50, duration: 0.4 }, // Rotate to 20 degrees
        { rotation: 0, duration: 0.4 },  // Rotate back to default (0 degrees)
      ],
      ease: "power1.inOut",
      yoyo: true, // Reverse the animation
      repeat: -1, // Infinite loop
      repeatDelay: 1.5, // Delay between repeats
    });

    // fade in animation
    if (locationRef.current) {
      gsap.fromTo(
        locationRef.current,
        { opacity: 0},
        {
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          delay: 1.6
        }
      );
    }

    if (linkRef.current) {
      gsap.fromTo(
        linkRef.current,
        { opacity: 0},
        {
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          delay: 1.75
        }
      );
    }

    if (heroImageRef.current) {
      gsap.fromTo(
        heroImageRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
          delay: 1.5
        }
      );
    }
    
  }, []);

  const text = "Hi, I’m OBA 👋";
  const subHeadingText =
    "I’m a full stack developer (react.js & node.js) I love building things that live on the internet. My goal is to create a seamless experience for users while solving complex problems.";

  return (
    <section 
    id="hero" className="flex w-full items-center justify-center bg-default py-16 pt-24 md:py-24 md:pt-40">
      <article className="flex flex-col-reverse w-full max-w-7xl items-center gap-12 px-4 md:px-8 md:flex-row ">
        <div className="flex w-full flex-col gap-12">
          <div className="">
            <h1 ref={heroRef} className="text-4xl leading-10 md:text-6xl font-bold md:leading-[72px] text-color-10 font-inter">
              {text.split(" ").map((char, index) => (
                <span key={index} style={{ display: "inline-block", marginRight: "0.8rem" }} ref={char.includes("👋") ? waveEmojiRef : null}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <p className="mt-2 text-base font-medium text-color-6 font-inter max-w-lg" ref={subHeadingRef}>
              {subHeadingText.split(" ").map((char, index) => (
                <span
                  key={index}
                  ref={index === 0 ? subHeadingRef : null}
                  style={{ display: "inline-block", marginRight: "0.5rem" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>
          </div>
          <div ref={locationRef} className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-normal leading-normal text-color-6">
              <MapPin className="text-color-7" />
              <p className="text-base font-medium text-color-7 font-inter">
                Lagos, Nigeria
              </p>
            </div>

            <div className="flex items-center gap-2 font-normal leading-normal text-color-6">
              <div className="flex h-6 w-6 items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
              </div>
              <p className="text-base font-medium text-color-7 font-inter">
                Available for freelance
              </p>
            </div>
          </div>
          <div ref={linkRef} className="inline-flex items-center gap-1">
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-current"
                viewBox="0 0 256 256"
              >
                <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
              </svg>
            </Link>
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-current"
                viewBox="0 0 256 256"
              >
                <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="relative inline-flex w-full md:h-96 md:w-96 md:min-w-96 flex-col items-center md:items-end justify-center">
          <div ref={heroImageRef} className="relative h-80 w-[100%]  max-w-72 md:h-96 md:w-80">
            <div className="absolute left-0 top-[20px] md:top-[28px] z-10 h-72 w-[100%] max-w-72 md:h-80 md:w-72 border-8 border-default bg-color-3"></div>
            <Image 
                src="/WhatsApp Image 2025-07-07 at 08.26.51_3d36d357.jpg"
                alt="hero image"
                width={80} // Percentage width (100%)
                height={100} // Aspect ratio (adjust as needed)
                priority
                className='w-[90%] max-w-72 h-72 left-[0.9rem] md:w-72 md:h-80 absolute border-8 border-default top-0 md:left-[-19px] z-20 object-cover'
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
