"use client";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const skillsRef = useRef<HTMLDivElement>(null);
    const skillsTitleRef = useRef<HTMLHeadingElement>(null);
    const skills1Ref = useRef<HTMLDivElement>(null);
    const skills2Ref = useRef<HTMLDivElement>(null);
    const skills3Ref = useRef<HTMLDivElement>(null);
    const skills4Ref = useRef<HTMLDivElement>(null);
    const skills5Ref = useRef<HTMLDivElement>(null);
    const skills6Ref = useRef<HTMLDivElement>(null);
    const skills7Ref = useRef<HTMLDivElement>(null);
    const skills8Ref = useRef<HTMLDivElement>(null);
    const skills9Ref = useRef<HTMLDivElement>(null);
    const skills10Ref = useRef<HTMLDivElement>(null);
    const skills11Ref = useRef<HTMLDivElement>(null);
    const skills12Ref = useRef<HTMLDivElement>(null);
    const skills13Ref = useRef<HTMLDivElement>(null);
    const skills14Ref = useRef<HTMLDivElement>(null);
    const skills15Ref = useRef<HTMLDivElement>(null);
    const skills16Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(
            skillsRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
            }
        );
        // Animate the title
        if (skillsTitleRef.current) {
            const skillsTitleChars = skillsTitleRef.current.querySelectorAll("span");
            gsap.fromTo(
                skillsTitleChars,
                { opacity: 0, y: 20, filter: "blur(10px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    stagger: 0.035, // Animates each character with a delay
                    duration: 0.4,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: skillsTitleRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }

        // Animate the skills icons
        const skillsRefs = [
            skills1Ref, skills2Ref, skills3Ref, skills4Ref,
            skills5Ref, skills6Ref, skills7Ref, skills8Ref,
            skills9Ref, skills10Ref, skills11Ref, skills12Ref,
            skills13Ref, skills14Ref, skills15Ref, skills16Ref
        ];
        skillsRefs.forEach((skillRef, index) => {
            gsap.fromTo(
                skillRef.current,
                { opacity: 0, y: 20, filter: "blur(10px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.4,
                    ease: "power3.out",
                    delay: index * 0.05, // Stagger the animations
                    scrollTrigger: {
                        trigger: skillRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, [])

    const text = "The technologies and tools I use to build web and mobile applications:";

    return (
        <section id='skills' className='py-16 md:py-24 bg-default w-full flex items-center justify-center'>
            <article className='max-w-7xl w-full flex flex-col gap-12 px-4 md:px-8'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <div ref={skillsRef} className='px-5 py-1 bg-color-3 rounded-xl '>
                        <h2  className='text-color-6 text-sm font-medium font-inter leading-tight'>Skills</h2>
                    </div>
                    <div>
                        <p ref={skillsTitleRef} className='w-full max-w-[576px] text-center justify-start text-color-6 text-xl font-normal leading-7 font-inter'>
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

                <div>
                    <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-y-12'>
                        <div ref={skills1Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <Image 
                                src="/images/icon-javscript.svg"
                                fill
                                alt='js icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>JavaScript</p>
                        </div>

                        <div ref={skills2Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <Image 
                                src="/images/icon-typescript.svg"
                                fill
                                alt='js icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>Typescript</p>
                        </div>

                        <div ref={skills3Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <Image 
                                src="/images/icon-react.svg"
                                fill
                                alt='js icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>React</p>
                        </div>

                        <div ref={skills4Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <Image 
                                src="/images/icon-nextjs.svg"
                                fill
                                alt='nextjs icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>Next.js</p>
                        </div>

                        <div ref={skills5Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <Image 
                                src="/images/icon-nodejs.svg"
                                fill
                                alt='node.js icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>Node.js</p>
                        </div>

                        <div ref={skills6Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_316_300)">
                                    <path d="M64.1877 49.59C61.8597 50.182 60.4197 49.616 59.1277 47.676L49.9397 34.964L48.6117 33.204L37.8817 47.718C36.6557 49.464 35.3697 50.224 33.0817 49.606L46.8217 31.162L34.0297 14.502C36.2297 14.074 37.7497 14.292 39.0997 16.262L48.6297 29.132L58.2297 16.332C59.4597 14.586 60.7817 13.922 62.9897 14.566L58.0297 21.142L51.3097 29.892C50.5097 30.892 50.6197 31.576 51.3557 32.542L64.1877 49.59ZM0.203744 30.854L1.32774 25.326C4.38774 14.386 16.9277 9.84002 25.5757 16.6C30.6297 20.576 31.8857 26.2 31.6357 32.5H3.14774C2.71974 43.84 10.8817 50.684 21.2877 47.192C24.9377 45.966 27.0877 43.108 28.1637 39.532C28.7097 37.74 29.6137 37.46 31.2977 37.972C30.4377 42.444 28.4977 46.18 24.3977 48.518C18.2717 52.018 9.52774 50.886 4.92774 46.022C2.18774 43.2 1.05574 39.624 0.547744 35.8C0.467744 35.168 0.307744 34.566 0.187744 33.96C0.198411 32.9254 0.203744 31.8907 0.203744 30.856V30.854ZM3.19974 30.094H28.9437C28.7757 21.894 23.6697 16.07 16.6917 16.02C9.03174 15.96 3.53174 21.646 3.19974 30.094Z" fill="currentColor"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_316_300">
                                    <rect width="64" height="64" fill="currentColor" transform="translate(0.187744)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>Express.js</p>
                        </div>

                        <div ref={skills7Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <Image 
                                src="/light-expo-opened-svgrepo-com.svg"
                                fill
                                alt='expo icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>expo</p>
                        </div>

                        <div ref={skills8Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <Image 
                                src="/images/icon-react.svg"
                                fill
                                alt='React Native icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>React Native</p>
                        </div>

                        <div ref={skills9Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <Image 
                                src="/images/icon-postgresql.svg"
                                fill
                                alt='postgreSQL icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>PostgreSQL</p>
                        </div>

                        <div ref={skills10Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <Image 
                                src="/light-prisma-svgrepo-com.svg"
                                fill
                                alt='prisma icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>Prisma</p>
                        </div>

                        <div ref={skills11Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <Image 
                                src="/rest-api-svgrepo-com.svg"
                                fill
                                alt='Rest api icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>REST api</p>
                        </div>

                        <div ref={skills12Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <Image 
                                src="/images/icon-tailwindcss.svg"
                                fill
                                alt='tailwindcss icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>Tailwindcss</p>
                        </div>

                        <div ref={skills13Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <Image 
                                src="/images/icon-figma.svg"
                                fill
                                alt='figma icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>Figma</p>
                        </div>

                        <div ref={skills14Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <Image 
                                src="/html-5-svgrepo-com.svg"
                                fill
                                alt='html icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>HTML</p>
                        </div>

                        <div ref={skills15Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <Image 
                                src="/css-3-svgrepo-com.svg"
                                fill
                                alt='css icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>CSS</p>
                        </div>

                        <div ref={skills16Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <Image 
                                src="/images/icon-git.svg"
                                fill
                                alt='git icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>Git</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Skills;