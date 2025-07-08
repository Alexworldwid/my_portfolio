"use client";

import React, { useEffect, useRef } from 'react';
import CopyToClipboard from '../copyToClipBoard';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Contact = () => {
    // Refs for the contact section
    const contactRef = useRef<HTMLDivElement>(null);
    const contactTitleRef = useRef<HTMLHeadingElement>(null);
    const contactMeRef = useRef<HTMLDivElement>(null);
    const contactSocialsTitleRef = useRef<HTMLDivElement>(null);
    const contactSocialIconsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate the entire contact section
        gsap.fromTo(
            contactRef.current,
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play none none none",
                },
            }
        );

        // Animate the title characters
        const titleChars = contactTitleRef.current?.querySelectorAll("span");
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
                        trigger: contactTitleRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none none",
                    },
                }
            );
        };

        // Animate the contact me section
        gsap.fromTo(
            contactMeRef.current,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contactMeRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none",
                },
            }
        );

        // Animate the contact socials title
        const contactSocialsTitleChars = contactSocialsTitleRef.current?.querySelectorAll("span");
        if (contactSocialsTitleChars) {
            gsap.fromTo(
                contactSocialsTitleChars,
                { opacity: 0, y: 20, filter: "blur(10px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    stagger: 0.035,
                    duration: 0.4,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: contactSocialsTitleRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
        // Animate the social icons
        gsap.fromTo(
            contactSocialIconsRef.current,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contactSocialIconsRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none",
                },
            }
        );

    }, [])

    const socialTitle = "You may also find me on these platforms!"
    const title = "What’s next? Feel free to reach out to me if you&apos;re looking for a developer, have a query, or simply want to connect."

    return (
        <section id='contact' className='w-full px-4 py-16 lg:py-24 lg:px-20 flex items-center justify-center'>
            <article className='max-w-7xl w-full flex flex-col gap-6 lg:gap-12 '>
                <div className='flex flex-col items-center gap-4'>
                    <p ref={contactRef} className="px-5 py-1 bg-color-3 rounded-xl inline-flex justify-center items-center text-color-6 text-sm font-medium font-inter leading-tight">Get in touch</p>
                    <h2 ref={contactTitleRef} className='text-center text-color-6 max-w-[576px] text-xl font-normal font-inter leading-7'>
                        {
                            title.split(" ").map((char, index) => (
                                <span key={index} style={{ display: "inline-block", marginRight: "0.3rem" }}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))
                        }
                    </h2>
                </div>
                <div ref={contactMeRef} className='flex flex-col items-center justify-center'>
                    <div  className='flex gap-4 lg:gap-5 items-center justify-center'>
                        <a href='mailto:obadunadewale1234@yahoo.com'>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                 className='fill-color-6 w-6 h6 lg:w-8 lg:h-8' viewBox="0 0 256 256">
                                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                            </svg>
                        </a>
                        <span className='flex-1 min-w-0 break-words text-color-9 text-lg lg:text-4xl font-semibold font-inter leading-10 text-center'>obadunadewale1234@yahoo.com</span>
                        <span>
                            <CopyToClipboard value='obadunadewale1234@yahoo.com'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                     className='fill-color-6 w-6 h6 lg:w-8 lg:h-8' viewBox="0 0 256 256">
                                    <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
                                </svg>
                            </CopyToClipboard>
                        </span>
                    </div>
                    <div className='flex gap-4 lg:gap-5 items-center justify-center'>
                        <a href='tel:+2349072504080'>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                 className='fill-color-6 w-6 h6 lg:w-8 lg:h-8' viewBox="0 0 256 256">
                                <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                            </svg>
                        </a>
                        <span className='text-center justify-start text-color-9 text-lg lg:text-4xl font-semibold font-inter leading-10 text-wrap'>
                            09072504080
                        </span>
                        <span>
                            <CopyToClipboard value='09072504080'>
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                     className='fill-color-6 w-6 h6 lg:w-8 lg:h-8' viewBox="0 0 256 256">
                                    <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
                                </svg>
                            </CopyToClipboard>
                        </span>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <div className='text-color-6 text-base font-normal font-inter leading-normal'>
                        <p ref={contactSocialsTitleRef}>
                            {
                                socialTitle.split(" ").map((char, index) => (
                                    <span key={index} style={{ display: "inline-block", marginRight: "0.3rem" }}>
                                        {char === " " ? "\u00A0" : char}
                                    </span>
                                ))
                            }
                        </p>
                    </div>
                    <div ref={contactSocialIconsRef} className='flex'>
                        <Link href="" className='w-9 h-9 flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width="24" height="24" className='fill-color-6' viewBox="0 0 256 256">
                                <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                            </svg>
                        </Link>
                        <Link href="" className='w-9 h-9 flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width="24" height="24" className='fill-color-6' viewBox="0 0 256 256">
                                <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                            </svg>
                        </Link>
                        <Link href="" className='w-9 h-9 flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width="24" height="24" className='fill-color-6' viewBox="0 0 256 256">
                                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Contact;