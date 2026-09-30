"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const [showEarlierWork, setShowEarlierWork] = useState(false);
  const workRef = useRef<HTMLDivElement>(null);
  const workTitleRef = useRef<HTMLHeadingElement>(null);
  const workCard1Ref = useRef<HTMLDivElement>(null);
  const workCard2Ref = useRef<HTMLDivElement>(null);
  const workCard3Ref = useRef<HTMLDivElement>(null);

  const recentProjects = [
    {
      name: "Sharp Padi",
      description:
        "A full-stack messaging application built with React Native and Expo, backed by an Express and PostgreSQL API. It includes authentication, user profiles, conversations, messaging, and protected API routes.",
      image: "/images/sharp-padi.png",
      tags: [
        "TypeScript",
        "React Native",
        "Expo",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "JWT",
      ],
      link: "#",
    },
    {
      name: "Blog API",
      description:
        "A REST API for a blog platform with authentication, role-based access, post management, comments, validation, and database relationships. Built with Express, Prisma, and PostgreSQL.",
      image: "/blog API screenshot.png",
      tags: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "JWT",
        "Zod",
        "REST API",
      ],
      link: "https://github.com/Alexworldwid/personal-blog-backend",
    },
    {
      name: "Mini Google Drive",
      description:
        "A file management application with authentication, folders, file uploads, breadcrumbs, and shareable file links. Built with Express, Prisma, PostgreSQL, and Supabase Storage.",
      image: "/mini-google-drive.png",
      tags: [
        "JavaScript",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "Multer",
        "Supabase",
        "Passport.js",
      ],
      link: "https://github.com/Alexworldwid/mini-google-drive",
    },
  ];

  const earlierProjects = [
    {
      name: "Eternalize",
      description:
        "This landing page template was created using only vanilla JavaScript, which means everything you see—from the smooth form interactions to the image gallery—was hand-coded for simplicity and speed.",
      image: "/images/Screenshot 2025-06-23 230812.png",
      tags: ["HTML", "CSS", "Javascript", "Figma", "Git"],
      link: "https://funeral-eternalize.vercel.app/",
    },
    {
      name: "Loaner",
      description:
        "Loaner is a fast, lightweight loan template website built entirely with HTML, CSS, and JavaScript, featuring a clean, responsive UI that helps users get the loan they need—quickly and easily.",
      image: "/images/Screenshot 2025-06-23 231126.png",
      tags: ["HTML", "CSS", "Javascript", "Figma", "Git"],
      link: "https://fitness-loaner.vercel.app/",
    },
    {
      name: "Etherael",
      description:
        "This landing page template was created using only vanilla JavaScript, with hand-coded interactions and a responsive interface designed to keep the experience simple and easy to use.",
      image: "/images/Screenshot 2025-06-23 225636.png",
      tags: ["HTML", "CSS", "Javascript", "Figma", "Git"],
      link: "https://etherealhomes.vercel.app/",
    },
  ];

  const projects = showEarlierWork ? earlierProjects : recentProjects;

  // Animate the work section
  useEffect(() => {
    gsap.fromTo(
      workRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );

    // Animate the title characters
    const titleChars = workTitleRef.current?.querySelectorAll("span");
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
            trigger: workTitleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    // Animate each work card
    [workCard1Ref, workCard2Ref, workCard3Ref].forEach((cardRef, index) => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: `top ${75 + index * 10}%`,
            end: `bottom ${20 - index * 10}%`,
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  const text =
    "Some of the projects I have built while growing as a full-stack developer:";

  return (
    <section
      id="work"
      className="flex w-full flex-col items-center justify-center px-4 py-12 lg:px-20 lg:py-24"
    >
      <article className="flex w-full max-w-[1280px] flex-col gap-12 lg:px-8">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div
            ref={workRef}
            className="inline-flex items-center justify-center rounded-xl bg-color-2 px-5 py-1"
          >
            <h2 className="justify-start font-inter text-sm font-medium leading-tight text-color-6">
              Work
            </h2>
          </div>
          <div>
            <p
              ref={workTitleRef}
              className="w-full max-w-[576px] justify-start text-center font-inter text-xl font-normal leading-7 text-color-6"
            >
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

        <div className="mt-2 flex items-center justify-center gap-2">
          <button
            onClick={() => setShowEarlierWork(false)}
            className={`rounded-xl px-5 py-2 font-inter text-sm font-medium transition-all duration-300 ${
              !showEarlierWork
                ? "bg-color-2 text-color-6"
                : "bg-transparent text-color-6"
            }`}
          >
            Recent Work
          </button>

          <button
            onClick={() => setShowEarlierWork(true)}
            className={`rounded-xl px-5 py-2 font-inter text-sm font-medium transition-all duration-300 ${
              showEarlierWork
                ? "bg-color-2 text-color-6"
                : "bg-transparent text-color-6"
            }`}
          >
            Earlier Work
          </button>
        </div>

        {projects.map((project, index) => {
          const cardRefs = [workCard1Ref, workCard2Ref, workCard3Ref];

          return (
            <div
              key={project.name}
              ref={cardRefs[index]}
              className={`flex w-full flex-col items-stretch justify-center shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07)] lg:flex-row ${
                index === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`h-[350px] w-full bg-color-1 p-8 lg:h-[unset] lg:w-1/2 lg:p-12 ${
                  index === 1
                    ? "rounded-tl-xl rounded-tr-xl lg:rounded-bl-none lg:rounded-br-xl lg:rounded-tl-xl lg:rounded-tr-none"
                    : "rounded-tl-xl rounded-tr-xl lg:rounded-bl-xl lg:rounded-tl-xl lg:rounded-tr-none"
                }`}
              >
                <div className="relative h-full w-full rounded-xl">
                  <Image
                    src={project.image}
                    alt={`${project.name} project screenshot`}
                    fill
                    className="rounded-xl object-cover object-left-top"
                  />
                </div>
              </div>

              <div
                className={`flex h-[100%] w-full flex-col gap-4 bg-color-special p-8 lg:w-1/2 lg:p-12 ${
                  index === 1
                    ? "rounded-bl-xl rounded-br-xl lg:rounded-bl-xl lg:rounded-br-none lg:rounded-tl-xl"
                    : "rounded-bl-xl rounded-br-xl lg:rounded-bl-none lg:rounded-br-xl lg:rounded-tr-xl"
                }`}
              >
                <div>
                  <h2 className="text-color- justify-start self-stretch font-inter text-xl font-semibold leading-7">
                    {project.name}
                  </h2>
                </div>

                <div>
                  <p className="justify-start self-stretch font-inter text-base font-normal leading-normal text-color-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <div
                      key={tag}
                      className="inline-flex items-center justify-center rounded-xl bg-color-3 px-5 py-1"
                    >
                      <p className="justify-start font-inter text-sm font-medium leading-tight text-color-6">
                        {tag}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <Link href={project.link}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      className="fill-color-6 transition-all duration-300 ease-in hover:fill-color-10"
                      viewBox="0 0 256 256"
                    >
                      <path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Work;
