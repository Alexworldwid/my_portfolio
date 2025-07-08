"use client";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
    const workRef = useRef<HTMLDivElement>(null);
    const workTitleRef = useRef<HTMLHeadingElement>(null);
    const workCard1Ref = useRef<HTMLDivElement>(null);
    const workCard2Ref = useRef<HTMLDivElement>(null);
    const workCard3Ref = useRef<HTMLDivElement>(null);

    // Animate the work section
    useEffect(() => {
        gsap.fromTo(
            workRef.current,
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: workRef.current,
                    start: 'top 85%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Animate the title characters
        const titleChars = workTitleRef.current?.querySelectorAll('span');
        if (titleChars) {
            gsap.fromTo(
                titleChars,
                { opacity: 0, y: 20, filter: 'blur(10px)' },
                {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    stagger: 0.035,
                    duration: 0.4,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: workTitleRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none none',
                    },
                }
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
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: `top ${75 + index * 10}%`,
                        end: `bottom ${20 - index * 10}%`,
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
    }, []);

    const text = "Some of the noteworthy projects I have built:";

    return (
        <section id='work' className='py-12 px-4 lg:py-24 lg:px-20 w-full flex flex-col items-center justify-center '>
            <article className='w-full max-w-[1280px] lg:px-8 flex flex-col gap-12'>
                <div className='flex w-full items-center justify-center flex-col gap-4'>
                    <div ref={workRef} className='px-5 py-1 bg-color-2 rounded-xl inline-flex justify-center items-center'>
                        <h2  className='justify-start text-color-6 text-sm font-medium font-inter leading-tight'>Work</h2>
                    </div>
                    <div>
                        <p ref={workTitleRef} className='w-full max-w-[576px] text-center justify-start text-color-6 text-xl font-normal font-inter leading-7'>
                            {
                                text.split(' ').map((char, index) => (
                                    <span key={index} style={{ display: 'inline-block', marginRight: '0.3rem' }}>
                                        {char === ' ' ? '\u00A0' : char}
                                    </span>
                                ))
                            }
                        </p>
                    </div>
                </div>

                <div ref={workCard1Ref} className='flex w-full justify-center flex-col lg:flex-row items-stretch shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07)]'>
                    <div className='w-full lg:w-1/2 p-8 lg:p-12 bg-color-1 rounded-tl-xl rounded-tr-xl lg:rounded-tr-none lg:rounded-tl-xl lg:rounded-bl-xl h-[350px] lg:h-[unset]'>
                        <div className='relative h-full w-[100%] rounded-xl'>
                            <Image
                                src={'/images/Screenshot 2025-06-23 230812.png'}
                                alt='work 1'
                                fill
                                className='rounded-xl object-cover object-left-top'
                            />
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 flex flex-col gap-4 p-8 lg:p-12 h-[100%] bg-color-special rounded-bl-xl rounded-br-xl lg:rounded-bl-none lg:rounded-tr-xl lg:rounded-br-xl lg:order-2'>
                        <div>
                            <h2 className='self-stretch justify-start text-color- text-xl font-semibold font-inter leading-7'>Eternalize</h2>
                        </div>
                        <div>
                            <p className="self-stretch justify-start text-color-6 text-base font-normal font-inter leading-normal">This landing page template was created using only vanilla 
                                JavaScript, which means everything you see— from the 
                                smooth form interactions to the image gallery—was hand-coded 
                                for simplicity and speed. It’s designed to be respectful and easy to use, 
                                helping visitors find important information like services, contact details, 
                                and support options quickly, without the bloat or distractions of heavy frameworks.
                            </p>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <div className="px-5 py-1 bg-color-3 rounded-xl inline-flex justify-center items-center">
                                <p className="justify-start text-color-6 text-sm font-medium font-inter leading-tight">HTML</p>
                            </div>
                            <div className="px-5 py-1 bg-color-3 rounded-xl inline-flex justify-center items-center">
                                <p className="justify-start text-color-6 text-sm font-medium font-inter leading-tight">CSS</p>
                            </div>
                            <div className="px-5 py-1 bg-color-3 rounded-xl inline-flex justify-center items-center">
                                <p className="justify-start text-color-6 text-sm font-medium font-inter leading-tight">Javascript</p>
                            </div>
                            <div className="px-5 py-1 bg-color-3 rounded-xl inline-flex justify-center items-center">
                                <p className="justify-start text-color-6 text-sm font-medium font-inter leading-tight">Figma</p>
                            </div>
                            <div className="px-5 py-1 bg-color-3 rounded-xl inline-flex justify-center items-center">
                                <p className="justify-start text-color-6 text-sm font-medium font-inter leading-tight">Git</p>
                            </div>
                        </div>
                        <div>
                            <Link href={'https://funeral-eternalize.vercel.app/'}>
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="32" 
                                height="32" 
                                className='fill-color-6 hover:fill-color-10 transition-all duration-300 ease-in'
                                viewBox="0 0 256 256"><path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div ref={workCard2Ref} className='flex w-full justify-center flex-col lg:flex-row items-stretch shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07)]'>
                    <div className='w-full lg:w-1/2 p-8 lg:p-12 bg-color-1 rounded-tl-xl rounded-tr-xl lg:rounded-tl-none lg:rounded-tr-xl lg:rounded-br-xl lg:order-2 h-[350px] lg:h-[unset] '>
                        <div className='relative h-full w-[100%] rounded-xl'>
                            <Image
                                src={'/images/Screenshot 2025-06-23 231126.png'}
                                alt='work 2'
                                fill
                                className='rounded-xl object-cover object-left-top'
                            />
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 flex flex-col gap-4 p-8 lg:p-12 h-[100%] lg:order-1 bg-color-special rounded-bl-xl rounded-br-xl lg:rounded-br-none lg:rounded-tl-xl lg:rounded-bl-xl'>
                        <div>
                            <h2  className='self-stretch justify-start text-color- text-xl font-semibold font-inter leading-7'>Loaner</h2>
                        </div>
                        <div>
                            <p className="self-stretch justify-start text-color-6 text-base font-normal font-inter leading-normal">
                                Loaner is a fast, lightweight loan template website built 
                                entirely with HTML, CSS, and JavaScript, featuring a clean, responsive UI
                                that helps users get the loan they need—quickly and easily.
                            </p>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <div className="px-5 py-1 bg-color-3 rounded-xl inline-flex justify-center items-center">
                                <p className="justify-start text-color-6 text-sm font-medium font-inter leading-tight">HTML</p>
                            </div>
                            <div className="px-5 py-1 bg-color-3 rounded-xl inline-flex justify-center items-center">
                                <p className="justify-start text-color-6 text-sm font-medium font-inter leading-tight">CSS</p>
                            </div>
                            <div className="px-5 py-1 bg-color-3 rounded-xl inline-flex justify-center items-center">
                                <p className="justify-start text-color-6 text-sm font-medium font-inter leading-tight">Javascript</p>
                            </div>
                            <div className="px-5 py-1 bg-color-3 rounded-xl inline-flex justify-center items-center">
                                <p className="justify-start text-color-6 text-sm font-medium font-inter leading-tight">Figma</p>
                            </div>
                            <div className="px-5 py-1 bg-color-3 rounded-xl inline-flex justify-center items-center">
                                <p className="justify-start text-color-6 text-sm font-medium font-inter leading-tight">Git</p>
                            </div>
                        </div>
                        <div>
                            <Link href={'https://fitness-loaner.vercel.app/'}>
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="32" 
                                height="32" 
                                className='fill-color-6 hover:fill-color-10 transition-all duration-300 ease-in'
                                viewBox="0 0 256 256"><path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div ref={workCard3Ref} className='flex w-full justify-center flex-col lg:flex-row items-stretch shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07)]'>
                    <div className='w-full lg:w-1/2 p-8 lg:p-12 bg-color-1  rounded-tl-xl rounded-tr-xl lg:rounded-tr-none lg:rounded-tl-xl lg:rounded-bl-xl h-[350px] lg:h-[unset]'>
                        <div className='relative h-full w-[100%] rounded-xl'>
                            <Image
                                src={'/images/Screenshot 2025-06-23 225636.png'}
                                alt='work 1'
                                fill
                                className='rounded-xl object-cover object-left-top'
                            />
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 flex flex-col gap-4 p-8 lg:p-12 h-[100%] bg-color-special rounded-bl-xl rounded-br-xl lg:rounded-bl-none lg:rounded-tr-xl lg:rounded-br-xl lg:order-2'>
                        <div>
                            <h2  className='self-stretch justify-start text-color- text-xl font-semibold font-inter leading-7'>Etherael</h2>
                        </div>
                        <div>
                            <p className="self-stretch justify-start text-color-6 text-base font-normal font-inter leading-normal">This landing page template was created using only vanilla 
                                JavaScript, which means everything you see— from the 
                                smooth form interactions to the image gallery—was hand-coded 
                                for simplicity and speed. It’s designed to be respectful and easy to use, 
                                helping visitors find important information like services, contact details, 
                                and support options quickly, without the bloat or distractions of heavy frameworks.
                            </p>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <div className="px-5 py-1 bg-color-3 rounded-xl inline-flex justify-center items-center">
                                <p className="justify-start text-color-6 text-sm font-medium font-inter leading-tight">HTML</p>
                            </div>
                            <div className="px-5 py-1 bg-color-3 rounded-xl inline-flex justify-center items-center">
                                <p className="justify-start text-color-6 text-sm font-medium font-inter leading-tight">CSS</p>
                            </div>
                            <div className="px-5 py-1 bg-color-3 rounded-xl inline-flex justify-center items-center">
                                <p className="justify-start text-color-6 text-sm font-medium font-inter leading-tight">Javascript</p>
                            </div>
                            <div className="px-5 py-1 bg-color-3 rounded-xl inline-flex justify-center items-center">
                                <p className="justify-start text-color-6 text-sm font-medium font-inter leading-tight">Figma</p>
                            </div>
                            <div className="px-5 py-1 bg-color-3 rounded-xl inline-flex justify-center items-center">
                                <p className="justify-start text-color-6 text-sm font-medium font-inter leading-tight">Git</p>
                            </div>
                        </div>
                        <div>
                            <Link href={'https://etherealhomes.vercel.app/'}>
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="32" 
                                height="32" 
                                className='fill-color-6 hover:fill-color-10 transition-all duration-300 ease-in'
                                viewBox="0 0 256 256"><path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Work;