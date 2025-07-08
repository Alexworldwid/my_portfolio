"use client";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
    const testimonialRef = useRef<HTMLDivElement>(null);
    const testimonialTitleRef = useRef<HTMLHeadingElement>(null);
    const testimonialcard1Ref = useRef<HTMLDivElement>(null);
    const testimonialcard2Ref = useRef<HTMLDivElement>(null);
    const testimonialcard3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate the entire testimonial section
        gsap.fromTo(
            testimonialRef.current,
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: testimonialRef.current,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play none none none",
                },
            }
        );

        // Animate the title characters
        const titleChars = testimonialTitleRef.current?.querySelectorAll("span");
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
                        trigger: testimonialTitleRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none none",
                    },
                }
            );
        };

        // Animate testimonial cards
        const cards = [testimonialcard1Ref, testimonialcard2Ref, testimonialcard3Ref];
        cards.forEach((card, index) => {
            gsap.fromTo(
                card.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: index * 0.2, // Stagger the animation
                    scrollTrigger: {
                        trigger: card.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    const text = "Nice things people have said about me:"

    return (
        <section id='testimonials' className='px-4 py-16 lg:py-24 lg:px-20 bg-color-1 w-full justify-center flex items-center'>
            <article className='self-stretch lg:px-8 inline-flex flex-col justify-center items-center gap-6 lg:gap-12 max-w-[1280px] w-full'>
                <div className='self-stretch inline-flex flex-col justify-center items-center gap-4'>
                    <div ref={testimonialRef} className='flex items-center justify-center'>
                        <h2 className='px-5 py-1 bg-color-3 text-color-6 rounded-xl inline-flex justify-center items-center'>Testimonials</h2>
                    </div>
                    <div>
                        <p ref={testimonialTitleRef} className='text-color-6 text-sm font-medium font-inter leading-tight'>
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

                <div className='flex flex-col lg:flex-row gap-6 lg:gap-12'>
                    <div ref={testimonialcard1Ref} className='flex-1 self-stretch p-12 bg-default rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06)] inline-flex flex-col justify-start items-center gap-6 '>
                        <div className='bg-color-4 w-16 h-16 p-5 rounded-[50%] flex items-center justify-center'>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="40" 
                                height="40" 
                                fill="#000000" 
                                viewBox="0 0 256 256"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>
                                “Job well done! I am really impressed. He is very very good 
                                at what he does:) I would recommend Oba and will rehire in 
                                the future for Frontend development.”
                            </p>
                        </div>
                        <div>
                            <p className='text-center justify-start text-color-9 text-xl font-semibold font-inter leading-7'>Nanna</p>
                            <p className='text-center justify-start text-color-6 text-sm font-normal font-inter leading-tight'>Founder - i38 Agency</p>
                        </div>
                    </div>
                    <div ref={testimonialcard2Ref} className='flex-1 self-stretch p-12 bg-default rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06)] inline-flex flex-col justify-start items-center gap-6 '>
                        <div className='bg-color-4 w-16 h-16 p-5 rounded-[50%] flex items-center justify-center'>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="32" 
                                height="32" 
                                fill="#000000" 
                                viewBox="0 0 256 256"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>
                                “Great guy, highly recommended for any COMPLEX front-end 
                                development job! His skills are top-notch and he will be 
                                an amazing addition to any team.”
                            </p>
                        </div>
                        <div>
                            <p className='text-center justify-start text-color-9 text-xl font-semibold font-inter leading-7'>James</p>
                            <p className='text-center justify-start text-color-6 text-sm font-normal font-inter leading-tight'>Co-founder - 138 agency</p>
                        </div>
                    </div>
                    <div ref={testimonialcard3Ref} className='flex-1 self-stretch p-12 bg-default rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06)] inline-flex flex-col justify-start items-center gap-6 '>
                        <div className='bg-color-4 w-16 h-16 p-5 rounded-[50%] flex items-center justify-center'>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="32" 
                                height="32" 
                                fill="#000000" 
                                viewBox="0 0 256 256"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className='text-color-6 text-base font-normal font-inter leading-normal'>
                                “Oba was extremely easy and pleasant to work with and 
                                he truly cares about the project being a success. Oba 
                                has a high level of knowledge and was able to work on my 
                                MERN stack application without any issues.”
                            </p>
                        </div>
                        <div>
                            <p className='text-center justify-start text-color-9 text-xl font-semibold font-inter leading-7'>Swagg</p>
                            <p className='text-center justify-start text-color-6 text-sm font-normal font-inter leading-tight'>Entreprenuer</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Testimonial;