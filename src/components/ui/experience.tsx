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
            }
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
                }
            );
        }

        // Animate each experience card
        [experienceCard1Ref, experienceCard2Ref, experienceCard3Ref].forEach((cardRef, index) => {
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
                }
            );
        });
    }, []);

    const text = "Here is a quick summary of my most recent experiences:"

    return (
        <section id="experience" className="px-4 py-16 lg:px-20 lg:py-24 bg-color-1 inline-flex flex-col justify-center items-center w-full">
            <article className="w-full lg:px-8 inline-flex flex-col justify-center items-center gap-12 max-w-7xl">
                <div className="flex flex-col items-center gap-4">
                    <div ref={experienceRef} className="px-5 py-1 bg-color-3 rounded-xl inline-flex justify-center items-center">
                        <h2 className="justify-start text-color-6 text-sm font-medium font-inter leading-tight">Experience</h2>
                    </div>
                    <div  className="w-full max-w-[576px] text-center justify-start text-color-6 text-xl font-normal font-inter leading-7">
                        <p ref={experienceTitleRef}>
                            {
                                text.split(" ").map((char, index) => (
                                    <span key={index} style={{ display: "inline-block", marginRight: "0.3rem" }}>
                                        {char === " " ? "\u00A0" : char}
                                    </span>
                                ))
                            }
                        </p>
                    </div>
                </div>

                <div className="w-full bg-default max-w-[896px] p-8 rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06),_0px_4px_3px_0px_rgba(0,0,0,0.07)] inline-flex flex-col justify-start items-start overflow-hidden">
                    <div ref={experienceCard1Ref} className="w-full flex-col lg:flex-row inline-flex justify-start items-start gap-4 md:gap-12 overflow-hidden">
                        <div className="w-full order-1 lg:order-none">
                            <p className="text-2xl text-color-9">I38 Agency</p>
                        </div>
                        <div className="w-full order-3 lg:order-none inline-flex flex-col justify-start items-start gap-4">
                            <p className="justify-start text-color-9 text-xl font-semibold font-inter leading-7">Frontend Engineer</p>
                            <ul className="list-disc list-inside self-stretch justify-start text-color-600 text-base font-normal font-inter leading-normal">
                                <li>Template Development: Develop reusable templates and layouts
                                     that support fast page creation and consistent visual structure 
                                     across the website.
                                </li>
                                <li>
                                    Cross-Browser & Device Compatibility: Ensure consistent user experience 
                                    across all major browsers and devices.
                                </li>
                                <li>
                                    CMS Integration: Work with content management systems (WordPress) to dynamically
                                    render content, enabling non-technical teams to manage site content with ease.
                                </li>
                            </ul>
                        </div>

                        <div className="w-full order-2 lg:order-none">
                            <p className="justify-start text-color-7 text-base font-normal font-inter leading-normal lg:justify-self-end">Sept 2023 - Present</p>
                        </div>
                    </div>
                </div>

                <div ref={experienceCard2Ref} className="w-full bg-default  max-w-[896px] p-8  rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06),_0px_4px_3px_0px_rgba(0,0,0,0.07)] inline-flex flex-col justify-start items-start overflow-hidden">
                    <div className="w-full flex-col lg:flex-row inline-flex justify-start items-start gap-4 md:gap-12 overflow-hidden">
                        <div className="w-full order-1 lg:order-none">
                            <p className="text-2xl text-color-9 font-inter">Freelance</p>
                        </div>

                        <div className="order-3 lg:order-none w-full">
                            <p className="justify-start text-color-9 text-xl font-semibold font-inter leading-7">Team Lead</p>
                            <ul className="list-disc list-inside self-stretch justify-start text-color-600 text-base font-normal font-inter leading-normal">
                                <li>
                                    Admin Usability
                                    Structured the WordPress admin area for easy use by non-technical
                                     content managers, enabling them to approve jobs, review applications,
                                      and manage content.
                                </li>
                                <li>
                                    Custom Theme Development
                                    Designed and developed a fully custom WordPress theme from scratch, 
                                    tailored specifically for a job platform use case with modern, responsive 
                                    UI.
                                </li>
                            </ul>
                        </div>
                        <div className="w-full order-2 lg:order-none">
                            <p className="justify-start text-color-7 text-base font-normal font-inter leading-normal lg:justify-self-end">Sept 2023 - Oct 2023</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Experience;