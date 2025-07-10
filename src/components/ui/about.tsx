"use client";
import Image from 'next/image';
import React from 'react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
          }
        );

        // Animate the title
        if (aboutTitleRef) {
            const aboutTitleChars = aboutTitleRef.current ? aboutTitleRef.current.querySelectorAll("span") : [];
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
                }
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
                }
            );

            // Animate the paragraphs
            const paragraphs = [para1Ref.current, para2Ref.current, para3Ref.current, para4Ref.current, para5Ref.current, para6Ref.current, para7Ref.current]; // Add more refs if needed
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
                        }
                    );
                }
            });
        }
      }, []);

      const text = "Curious about me? Here you have it:"
    
    return (
        <section id='about' className='flex flex-col px-4 py-16 md:py-24 items-center justify-center bg-color-1 w-full'>
            <article className="flex items-center justify-center flex-col max-w-7xl gap-6 md:gap-12 md:px-8">
                <div ref={aboutRef} className="w-full flex items-center justify-center opacity-0 will-change-transform">
                    <p className='px-5 py-1 bg-color-2 rounded-xl inline-flex justify-center items-center text-color-6 text-sm font-medium leading-tight font-inter'>About me</p>
                </div>
                <div className="inline-flex flex-col md:flex-row justify-start items-start gap-12 content-start overflow-hidden">
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-start">
                        <div ref={aboutImageRef} className="w-[100%] max-w-80 h-[520px] relative flex items-center justify-center opacity-0 will-change-transform">
                            <div className="max-w-96 w-[100%] h-[480px] relative bg-color-3 border-8 border-default top-2 md:top-6 z-10"></div>
                            <Image 
                                src="/WhatsApp Image 2025-07-07 at 08.26.52_f235f4d5.jpg"
                                alt="hero image"
                                width={80} // Percentage width (100%)
                                height={90} // Aspect ratio (adjust as needed)
                                priority
                                className='w-[90%] max-w-72 md:w-80 h-[480px] absolute border-8 border-default top-0 md:left-6 z-20 object-cover md:max-w-80'
                            />
                        </div>
                    </div>

                    <div className="md:w-1/2 flex gap-6 flex-col">
                        <h2 ref={aboutTitleRef} className='text-color-10 text-3xl font-semibold leading-9 font-inter'>
                            {
                                text.split('').map((char, index) => (
                                    <span key={index} style={{ display: "inline-block", marginRight: "0.03rem", opacity: "0" }}>
                                        {char === " " ? "\u00A0" : char}
                                    </span>
                                ))
                            }
                        </h2>
                        <div className="flex flex-col gap-4">
                            <p ref={para1Ref} className='text-color-6 text-base font-normal font-inter leading-normal opacity-0 will-change-transform'>I&apos;m a passionate, 
                                <span className="text-color-6 text-base font-normal font-inter underline leading-normal pr-1"> self-proclaimed developer</span>
                                <span className="text-color-6 text-base font-normal font-inter leading-normal"> 
                                    who specializes in full stack development (React.js & Node.js). I am very enthusiastic about 
                                    bringing the technical and visual aspects of digital products to life. User experience, 
                                    pixel perfect design, and writing clear, readable, highly performant code matters to me.
                                </span>
                            </p>

                            <p ref={para2Ref} className='text-color-6 text-base font-normal font-inter leading-normal opacity-0 will-change-transform'>
                                I love building things that live on the internet. My goal is to create a seamless experience 
                                for users while solving complex problems. I am always eager to learn new technologies and 
                                improve my skills. I am currently looking for opportunities to work on exciting projects 
                                and collaborate with talented teams.
                            </p>

                            <p ref={para4Ref} className='text-color-6 text-base font-normal font-inter leading-normal opacity-0 will-change-transform'>
                                When I am not coding, you can find me exploring new places, reading books, or playing video games. 
                                I also enjoy sharing my knowledge and experiences with others through blogging and mentoring.
                            </p>

                            <p ref={para5Ref} className='text-color-6 text-base font-normal font-inter leading-normal opacity-0 will-change-transform'>
                                Finally, some quick bits about me.
                            </p>
                            
                            <ul ref={para6Ref} className=' list-disc grid list-inside grid-cols-2 opacity-0 will-change-transform'>
                                <li className='text-color-6 text-base font-normal font-inter leading-normal'>BSc Computer Science</li>
                                <li className='text-color-6 text-base font-normal font-inter leading-normal'>Avid Learner</li>
                                <li className='text-color-6 text-base font-normal font-inter leading-normal'>Full time freelancer</li>
                            </ul>

                            <p ref={para7Ref} className='text-color-6 text-base font-normal font-inter leading-normal opacity-0 will-change-transform'>
                                One last thing, I&apos;m available for freelance work, so feel free to reach out and say hello! I promise I don&apos;t bite 😉
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default About;