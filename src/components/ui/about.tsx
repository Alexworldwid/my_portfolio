"use client";
import Image from "next/image";
import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const aboutTitleRef = useRef<HTMLHeadingElement>(null);
  const aboutImageRef = useRef<HTMLDivElement>(null);
  const para1Ref = useRef<HTMLParagraphElement>(null);
  const para2Ref = useRef<HTMLParagraphElement>(null);
  const para3Ref = useRef<HTMLParagraphElement>(null);
  const para4Ref = useRef<HTMLParagraphElement>(null);
  const para5Ref = useRef<HTMLParagraphElement>(null);
  const para6Ref = useRef<HTMLUListElement>(null);
  const para7Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );

    // Animate the title
    if (aboutTitleRef) {
      const aboutTitleChars = aboutTitleRef.current
        ? aboutTitleRef.current.querySelectorAll("span")
        : [];
      gsap.fromTo(
        aboutTitleChars,
        { opacity: 0, y: 20, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.035, // Animates each character with a delay
          duration: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutTitleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        },
      );

      // Animate the image
      gsap.fromTo(
        aboutImageRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutImageRef.current,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        },
      );

      // Animate the paragraphs
      const paragraphs = [
        para1Ref.current,
        para2Ref.current,
        para3Ref.current,
        para4Ref.current,
        para5Ref.current,
        para6Ref.current,
        para7Ref.current,
      ]; // Add more refs if needed
      paragraphs.forEach((para) => {
        if (para) {
          gsap.fromTo(
            para,
            { opacity: 0, y: 20, filter: "blur(10px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.4,
              ease: "power3.out",
              scrollTrigger: {
                trigger: para,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none",
              },
            },
          );
        }
      });
    }
  }, []);

  const text = "Curious about me? Here you have it:";

  return (
    <section
      id="about"
      className="flex w-full flex-col items-center justify-center bg-color-1 px-4 py-16 md:py-24"
    >
      <article className="flex max-w-7xl flex-col items-center justify-center gap-6 md:gap-12 md:px-8">
        <div
          ref={aboutRef}
          className="flex w-full items-center justify-center opacity-0 will-change-transform"
        >
          <p className="inline-flex items-center justify-center rounded-xl bg-color-2 px-5 py-1 font-inter text-sm font-medium leading-tight text-color-6">
            About me
          </p>
        </div>
        <div className="inline-flex flex-col content-start items-start justify-start gap-12 overflow-hidden md:flex-row">
          <div className="flex w-full flex-col items-center justify-start md:w-1/2 md:items-start">
            <div
              ref={aboutImageRef}
              className="relative flex h-[520px] w-[100%] max-w-80 items-center justify-center opacity-0 will-change-transform"
            >
              <div className="relative top-2 z-10 h-[480px] w-[100%] max-w-96 border-8 border-default bg-color-3 md:top-6"></div>
              <Image
                src="/WhatsApp Image 2025-07-07 at 08.26.52_f235f4d5.jpg"
                alt="hero image"
                width={80} // Percentage width (100%)
                height={90} // Aspect ratio (adjust as needed)
                priority
                className="absolute top-0 z-20 h-[480px] w-[90%] max-w-72 border-8 border-default object-cover md:left-6 md:w-80 md:max-w-80"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:w-1/2">
            <h2
              ref={aboutTitleRef}
              className="font-inter text-3xl font-semibold leading-9 text-color-10"
            >
              {text.split("").map((char, index) => (
                <span
                  key={index}
                  style={{
                    display: "inline-block",
                    marginRight: "0.03rem",
                    opacity: "0",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>
            <div className="flex flex-col gap-4">
              <p
                ref={para1Ref}
                className="font-inter text-base font-normal leading-normal text-color-6 opacity-0 will-change-transform"
              >
                I&apos;m a full-stack JavaScript developer who enjoys building
                applications from the interface all the way through the backend.
                I care about creating thoughtful user experiences while writing
                clean, maintainable code behind them.
              </p>

              <p
                ref={para2Ref}
                className="font-inter text-base font-normal leading-normal text-color-6 opacity-0 will-change-transform"
              >
                My current stack includes TypeScript, React, Next.js, React
                Native, Expo, Node.js, Express, PostgreSQL, and Prisma.
                I&apos;ve built REST APIs, authentication systems,
                database-driven applications, file management systems, and
                mobile applications.
              </p>

              <p
                ref={para4Ref}
                className="font-inter text-base font-normal leading-normal text-color-6 opacity-0 will-change-transform"
              >
                I started with frontend development and gradually moved deeper
                into backend development. That progression has given me an
                appreciation for both sides of an application — creating a good
                user experience while also thinking about the APIs, data,
                authentication, and architecture behind it.
              </p>

              <p
                ref={para5Ref}
                className="font-inter text-base font-normal leading-normal text-color-6 opacity-0 will-change-transform"
              >
                A few quick things about me.
              </p>

              <ul
                ref={para6Ref}
                className="grid list-inside list-disc grid-cols-2 opacity-0 will-change-transform"
              >
                <li className="font-inter text-base font-normal leading-normal text-color-6">
                  BSc Computer Science
                </li>
                <li className="font-inter text-base font-normal leading-normal text-color-6">
                  Avid Learner
                </li>
                <li className="font-inter text-base font-normal leading-normal text-color-6">
                  JavaScript Enthusiast
                </li>

                <li className="font-inter text-base font-normal leading-normal text-color-6">
                  Mobile & Web Developer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
