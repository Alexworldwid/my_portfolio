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

    const text = "The skills, tools and technologies I am really good at:";

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
                                src="/images/icon-nest.svg"
                                fill
                                alt='Nest.js icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>Nest.js</p>
                        </div>

                        <div ref={skills8Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_316_308)">
                                    <path d="M64.4879 31.295C64.3139 20.595 58.3479 10.177 49.1179 4.69099C41.8459 0.161987 32.6599 -1.05701 24.3859 1.03299C11.9329 4.16799 2.00488 15.446 0.742881 28.3C-0.825119 40.44 5.31488 53.066 15.8079 59.292C26.0839 65.736 40.0609 65.475 50.1079 58.692C59.1649 52.814 64.7819 42.092 64.4779 31.304L64.4879 31.295ZM34.2699 59.25C19.7269 60.687 5.66288 48.365 5.26988 33.778C4.16988 21.935 11.9749 10.222 23.1219 6.30299C38.7539 0.0329871 57.9559 11.615 59.5669 28.38C62.0929 43.444 49.5529 58.78 34.2699 59.25ZM24.6999 30.38L45.7299 13.18L34.3659 30.423C31.1439 30.423 27.9219 30.424 24.6999 30.38ZM30.6129 33.56L40.2789 33.604L19.2489 50.847L30.6129 33.56Z" fill="currentColor"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_316_308">
                                        <rect width="64" height="64" fill="white" transform="translate(0.5)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>Socket.io</p>
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
                                src="/images/icon-sass.svg"
                                fill
                                alt='SASS icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>Sass/scss</p>
                        </div>

                        <div ref={skills11Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <Image 
                                src="/images/icon-mongodb.svg"
                                fill
                                alt='mongoDB icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>MongoDB</p>
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
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_316_340)">
                                    <path d="M1.48928 40.4784C0.734741 37.7306 0.350586 34.8764 0.350586 32.0018C0.350586 18.879 8.59227 6.88003 20.8605 2.14832L22.469 6.31128C11.9088 10.3852 4.81612 20.7086 4.81612 32.0018C4.81612 34.479 5.14536 36.9322 5.79359 39.2963L1.48928 40.4784Z" fill="#58D09E"/>
                                    <path d="M20.6461 2.2505C23.3 1.21286 26.0984 0.532471 28.9573 0.231986C42.0082 -1.13972 54.8029 5.80258 60.7911 17.509L56.8191 19.5438C51.6637 9.46734 40.6554 3.4926 29.4241 4.67306C26.9604 4.93199 24.5551 5.51586 22.2717 6.40766L20.6461 2.2505Z" fill="#58D09E"/>
                                    <path d="M46.9978 55.2685C55.7122 49.7137 60.566 39.8557 59.6642 29.5475C59.3446 25.895 58.3309 22.4066 56.6562 19.1861L60.6132 17.1219C62.5607 20.866 63.7404 24.9148 64.1117 29.1584C65.1594 41.1339 59.5229 52.5821 49.3979 59.0351L46.9978 55.2685Z" fill="currentColor"/>
                                    <path d="M22.8532 25.3992C25.4425 25.3992 27.5518 26.78 28.6357 29.1887L28.7214 29.3772L33.0702 27.9004L32.9777 27.6778C31.2937 23.5764 27.4146 21.0272 22.8532 21.0272C19.6462 21.0272 17.0397 22.0552 14.8858 24.1658C12.7456 26.2627 11.6619 28.901 11.6619 32.0086C11.6619 35.0888 12.7456 37.7134 14.8858 39.8103C17.0397 41.921 19.6462 42.9488 22.8532 42.9488C27.4146 42.9488 31.2937 40.3996 32.9777 36.3018L33.0702 36.0791L28.7145 34.5988L28.6322 34.7942C27.6616 37.1618 25.5009 38.5768 22.8532 38.5768C21.049 38.5768 19.5262 37.9464 18.3189 36.706C17.098 35.4486 16.4806 33.8691 16.4806 32.012C16.4806 30.1412 17.0842 28.5926 18.3189 27.2768C19.5228 26.0298 21.049 25.3992 22.8532 25.3992Z" fill="currentColor"/>
                                    <path d="M50.0921 21.4316L43.8946 37.1138L37.656 21.4316H32.5525L41.3017 42.8358L35.0768 57.932L39.5389 58.8195L54.9144 21.4316H50.0921Z" fill="currentColor"/>
                                    <path d="M35.8751 55.9858L34.7879 58.6173C34.5718 59.1381 34.0779 59.4909 33.5223 59.5149C33.1554 59.5286 32.785 59.5389 32.4111 59.5389C19.6147 59.5321 8.29316 50.5106 5.48763 38.08L1.13184 39.0633C2.70609 46.0358 6.65717 52.3642 12.2579 56.887C17.9239 61.461 25.0611 63.9862 32.3631 64C32.3734 64 32.4282 64 32.4282 64C32.857 64 33.2822 63.9897 33.7075 63.9726C35.9986 63.8766 38.0462 62.441 38.9207 60.3133L40.3406 56.8733L35.8751 55.9858Z" fill="currentColor"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_316_340">
                                    <rect width="64" height="64" fill="white" transform="translate(0.350586)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>Cypress</p>
                        </div>

                        <div ref={skills15Ref} className='flex justify-center items-center flex-col'>
                            <div className='relative w-16 h-16'>
                                <Image 
                                src="/images/icon-storybook.svg"
                                fill
                                alt='storybook icon'
                                />
                            </div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>Storybook</p>
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