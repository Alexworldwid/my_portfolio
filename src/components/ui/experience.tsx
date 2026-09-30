"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  // Refs for the experience section
  const experienceRef = useRef<HTMLDivElement>(null);
  const experienceTitleRef = useRef<HTMLHeadingElement>(null);
  const experienceCard1Ref = useRef<HTMLDivElement>(null);
  const experienceCard2Ref = useRef<HTMLDivElement>(null);
  const experienceCard3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the entire experience section
    gsap.fromTo(
      experienceRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );

    // Animate the title characters
    const titleChars = experienceTitleRef.current?.querySelectorAll("span");
    if (titleChars) {
      gsap.fromTo(
        titleChars,
        { opacity: 0, y: 20, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.035,
          duration: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: experienceTitleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    // Animate each experience card
    [experienceCard1Ref, experienceCard2Ref, experienceCard3Ref].forEach(
      (cardRef, index) => {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5 + index * 0.2, // Stagger the animation slightly
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          },
        );
      },
    );
  }, []);

  const text = "Here is a quick summary of my most recent experiences:";

  return (
    <section
      id="experience"
      className="inline-flex w-full flex-col items-center justify-center bg-color-1 px-4 py-16 lg:px-20 lg:py-24"
    >
      <article className="inline-flex w-full max-w-7xl flex-col items-center justify-center gap-12 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <div
            ref={experienceRef}
            className="inline-flex items-center justify-center rounded-xl bg-color-3 px-5 py-1"
          >
            <h2 className="justify-start font-inter text-sm font-medium leading-tight text-color-6">
              Experience
            </h2>
          </div>
          <div className="w-full max-w-[576px] justify-start text-center font-inter text-xl font-normal leading-7 text-color-6">
            <p ref={experienceTitleRef}>
              {text.split(" ").map((char, index) => (
                <span
                  key={index}
                  style={{ display: "inline-block", marginRight: "0.3rem" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="inline-flex w-full max-w-[896px] flex-col items-start justify-start overflow-hidden rounded-xl bg-default p-8 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06),_0px_4px_3px_0px_rgba(0,0,0,0.07)]">
          <div
            ref={experienceCard1Ref}
            className="inline-flex w-full flex-col items-start justify-start gap-4 overflow-hidden md:gap-12 lg:flex-row"
          >
            <div className="order-1 w-full lg:order-none">
              <p className="text-2xl text-color-9">I38 Agency</p>
            </div>
            <div className="order-3 inline-flex w-full flex-col items-start justify-start gap-4 lg:order-none">
              <p className="justify-start font-inter text-xl font-semibold leading-7 text-color-9">
                Frontend Engineer
              </p>
              <ul className="text-color-600 list-inside list-disc justify-start self-stretch font-inter text-base font-normal leading-normal">
                <li>
                  Developed responsive website templates using HTML, CSS, and
                  JavaScript, creating reusable layouts that made new pages
                  faster to build and maintain.
                </li>
                <li>
                  Built and maintained user interfaces with a focus on
                  responsive design, cross-browser compatibility, and consistent
                  user experience across devices.
                </li>
                <li>
                  Integrated WordPress and external APIs to support dynamic
                  content and functionality for client websites.
                </li>
              </ul>
            </div>

            <div className="order-2 w-full lg:order-none">
              <p className="justify-start font-inter text-base font-normal leading-normal text-color-7 lg:justify-self-end">
                Sept 2023 - Jan 2024
              </p>
            </div>
          </div>
        </div>

        <div
          ref={experienceCard2Ref}
          className="inline-flex w-full max-w-[896px] flex-col items-start justify-start overflow-hidden rounded-xl bg-default p-8 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06),_0px_4px_3px_0px_rgba(0,0,0,0.07)]"
        >
          <div className="inline-flex w-full flex-col items-start justify-start gap-4 overflow-hidden md:gap-12 lg:flex-row">
            <div className="order-1 w-full lg:order-none">
              <p className="font-inter text-2xl text-color-9">Freelance</p>
            </div>

            <div className="order-3 w-full lg:order-none">
              <p className="justify-start font-inter text-xl font-semibold leading-7 text-color-9">
                Full-Stack Web Developer
              </p>
              <ul className="text-color-600 list-inside list-disc justify-start self-stretch font-inter text-base font-normal leading-normal">
                <li>
                  Designed and developed a custom WordPress job platform with a
                  responsive interface tailored to the platform&apos;s users and
                  administrators.
                </li>
                <li>
                  Integrated an external API to support backend functionality
                  and connect the platform with job-related data and services.
                </li>
                <li>
                  Structured the WordPress admin experience so non-technical
                  content managers could review applications, approve jobs, and
                  manage content.
                </li>
              </ul>
            </div>
            <div className="order-2 w-full lg:order-none">
              <p className="justify-start font-inter text-base font-normal leading-normal text-color-7 lg:justify-self-end">
                Sept 2023 - Oct 2023
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Experience;
